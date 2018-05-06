import React from 'react'

import { itemsArr } from '../../data/items'
import Search from '../Search'

import enhance from './enhance'
import {
  Container,
  Bar
} from './styled'

const searchableKeys = ['name','shortcuts']

const Root = props => {
  return (
    <Container>
      <div>/// CODING IN PROGRESS ///</div>
      <Search
        items={itemsArr}
        searchableKeys={searchableKeys}
      />
    </Container>
  )
}

export default enhance(Root)