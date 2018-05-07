import styled from 'styled-components'

const Foo = styled.div`
`

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 0.4em;
`

const Item = styled.div`
  width: 5.5em;
  height: 4em;
  background-color: ${p => p.theme.color.border};
  background-image: url(${p => p.image});
  background-size: cover;
  background-position: center center;
`

export {
  Foo,
  Container,
  Item
}