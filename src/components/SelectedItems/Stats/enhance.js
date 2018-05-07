import { compose, withState, withHandlers, withPropsOnChange, pure } from 'recompose'
import { createSelector } from 'reselect'
import _ from 'lodash/fp'

const add = (...values) => {
  console.log({ values })
  return _.flatten(values).reduce(
    (total, _value) => {
      const value = parseInt(_value, 10) || 0
      return total + value
    }, 0
  )
}

const _getStrengthValue = items => add(
  add(items.map(_.get('stats.strength'))),
  add(items.map(_.get('stats.all-attributes')))
)

const _getAgilityValue = items => add(
  add(items.map(_.get('stats.agility'))),
  add(items.map(_.get('stats.all-attributes')))
)

const _getIntelligenceValue = items => add(
  add(items.map(_.get('stats.intelligence'))),
  add(items.map(_.get('stats.all-attributes')))
)

const getAttackSpeed = items => {
  const fromStats = add(items.map(_.get('stats.attack-speed')))
  const fromAgility = _getAgilityValue(items)

  return {
    text: `+${add(fromStats, fromAgility)}`,
    label: 'Attack Speed'
  }
}

const getDamage = items => {
  const fromStats = add(items.map(_.get('stats.damage')))

  return {
    text: `+${fromStats}`,
    label: 'Damage'
  }
}

const getMoveSpeed = items => {
  const msStats = items.map(_.get('stats.movement-speed'))

  const flat = add(
    msStats
    .filter(val => val && !val.includes('%'))
  )
  const percent = add(
    msStats
    .filter(val => val && val.includes('%'))
    .map(val => val.replace('%', ''))
  )


  return {
    text: `+${flat} & +${percent}%`,
    label: 'Move Speed'
  }
}

const getHealthPool = items => {
  const fromStats = add(items.map(_.get('stats.health')))
  const fromStrength = 18 * _getStrengthValue(items)

  return {
    text: `+${add(fromStats, fromStrength)}`,
    label: 'Health Pool'
  }
}

export default compose(
  withPropsOnChange(
    ['items'],
    ({ items }) => {
      console.log(items.map(_.get('stats')))
      return {
        attackStats: [
          getAttackSpeed,
          getDamage,
          getMoveSpeed
        ].map(f => f(items)),
        defenceStats: [
          getHealthPool
        ].map(f => f(items))
      }
    }
  ),
  pure
)
