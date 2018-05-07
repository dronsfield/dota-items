import React from 'react'
import _ from 'lodash'

import enhance from './enhance'
import {
  Container,
  Item
} from './styled'

const six = _.range(6)

const Inventory = props => {
  const { items } = props
  console.log('Inventory', items)

  return (
    <Container>
      {
        six.map(i => {
          return (
            <Item
              key={i}
              {...items[i]}
            />
          )
        })
      }
    </Container>
  )
}

export default enhance(Inventory)