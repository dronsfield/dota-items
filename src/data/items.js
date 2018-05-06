import itemsObj from './itemsRaw.json'

export const items = itemsObj
export { itemsObj }

export const itemsArr = Object.values(itemsObj).filter(item => !!item.stats)
