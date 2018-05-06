const fetch = require('node-fetch')
const cheerio = require('cheerio')
const _ = require('lodash/fp')
const fs = require('fs')

const customShaping = require('./customShaping')

const dotabuffUrl = 'https://www.dotabuff.com'

const slugify = _.kebabCase

const getPage = url => {
  return (
    fetch(url)
    .then(x => x.text())
    .then(html => {
      if (html) return html
      else throw new Error('no html')
    })
  )
}

const getDataForItem = slug => {
  return (
    getPage(`${dotabuffUrl}/items/${slug}/tooltip`)
    .then(html => {
      const $ = cheerio.load(html)
      let data = {}
      
      // basic
      data.slug = slugify(slug)
      data.name = $('.tooltip-header .name').text()
      data.image = `${dotabuffUrl}${$('.tooltip-header img').attr('src')}`

      // stats
      data.stats = {}
      $('.stats .stat').each((i, el) => {
        const key = slugify($(el).find('.label').text())
        const value = $(el).find('.value').text()
        // console.log({ key, value })
        if (key && value) {
          data.stats[key] = value
        }
      })
      if (!Object.keys(data.stats).length) {
        delete data.stats
      }

      // shortcuts for search
      data.shortcuts = []
      const acronym = data.slug.split('-').map(word => word.slice(0, 1)).join('')
      data.shortcuts.push(acronym)

      const f = customShaping[data.slug]
      if (f) {
        data = f(data)
      }

      // console.log(data)
      
      return data
    })
  )
}

const getDataForItems = () => {
  return (
    getPage(`${dotabuffUrl}/items`)
    .then(html => {
      const $ = cheerio.load(html)
    
      const itemSlugs = []
      $('tr td:first-child a').each((i, el) => {
        const href = $(el).attr('href')
        const slug = href.replace('/items/', '')
        itemSlugs.push(slug)
      })

      return (
        Promise.all(
          itemSlugs.slice(0).map(getDataForItem)
        )
        .then(items => {
          return items.reduce((acc, item) => {
            acc[item.slug] = item
            return acc
          }, {})
        })
      )
    })
  )

}

getDataForItems()
.then(itemsData => {
  fs.writeFileSync('src/data/itemsRaw.json', JSON.stringify(itemsData, null, 2))
})

