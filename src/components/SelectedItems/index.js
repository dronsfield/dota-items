import React from 'react'

import { itemsObj } from '../../data/items'

import Inventory from './Inventory'
import Stats from './Stats'

import enhance from './enhance'
import {
  Foo
} from './styled'

const items = [
  itemsObj['eye-of-skadi'],
  itemsObj['sange-and-yasha'],
  itemsObj['linkens-sphere'],
  itemsObj['monkey-king-bar'],
  itemsObj['boots-of-travel'],
  itemsObj['abyssal-blade'],
]

const SelectedItems = props => {
  // console.log('SelectedItem props', props)
  // const { items } = props
  return (
    <div>
      <Inventory
        items={items}
      />
      <Stats
        items={items}
      />
    </div>
  )
}

export default enhance(SelectedItems)