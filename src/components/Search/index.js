import React from 'react'
import _ from 'lodash/fp'

import ListItem from './ListItem'

import enhance from './enhance'
import {
  Container,
  Input,
  List,
} from './styled'

const Search = props => {
  const { query, onChange, onKeyPress, onBlur, matchingItems, listVisible, limit } = props
  return (
    <Container onBlur={onBlur}>
      <Input
        value={query}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      {
        listVisible
        ? <List>
          {
            matchingItems.slice(0, limit).map((item, i) => (
              <ListItem
                key={i}
                item={item}
                onSubmit={props.onSubmit}
                displayKey={props.displayKey}
              />
            ))
          }
        </List>
        : null
      }
    </Container>
  )
}

export default enhance(Search)