import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  height: 500px;
  width: 300px;
`

const Block = styled.div`
  padding: 1em;
`

const Title = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`

const StatsContainer = styled.div`
  margin-top: 1em;
`

const Stat = styled.div`
  display: flex;
  flex-direction: row;
`

const StatLabel = styled.div`
  width: 6em;
`

const StatText = styled.div`
  flex: 1;
`

export {
  Container,
  Block,
  Title,
  Stat,
  StatLabel,
  StatText,
  StatsContainer
}