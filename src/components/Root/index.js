import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../../theme'
import { itemsArr } from '../../data/items'
import Search from '../Search'
import SelectedItems from '../SelectedItems'

import enhance from './enhance'
import {
  Container,
  Bar
} from './styled'

const searchableKeys = ['name','shortcuts']

const Root = props => {
  const {
    leftItems,
    rightItems,
    onSubmitSearch
  } = props
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div>/// CODING IN PROGRESS ///</div>
        <Search
          items={itemsArr}
          searchableKeys={searchableKeys}
          onSubmit={onSubmitSearch}
        />
        <SelectedItems
          items={leftItems}
        />
      </Container>
    </ThemeProvider>
  )
}

export default enhance(Root)