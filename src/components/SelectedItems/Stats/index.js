import React from 'react'

import enhance from './enhance'
import {
  Container,
  Block,
  Title,
  Stat,
  StatLabel,
  StatText,
  StatsContainer
} from './styled'

const StatsBlock = props => {
  const { title, stats } = props
  return (
    <Block>
      <Title>{title}</Title>
      <StatsContainer>
        {
          stats.map((stat, i) => {
            return (
              <Stat key={i}>
                <StatLabel>{stat.label}</StatLabel>
                <StatText>{stat.text}</StatText>
              </Stat>
            )
          })
        }
      </StatsContainer>
    </Block>
  )
}

const Stats = props => {
  const { attackStats, defenceStats } = props
  return (
    <Container>
      <StatsBlock
        title='Attack'
        stats={attackStats}
      />
      <StatsBlock
        title='Defence'
        stats={defenceStats}
      />
    </Container>
  )
}

export default enhance(Stats)