import styled from 'styled-components'

const ListItem = styled.div`
  padding: 0.5em;
  border-top: 1px solid #ddd;
  cursor: pointer;

  &:first-child {
    border-top: 0
  }
`

export {
  ListItem
}