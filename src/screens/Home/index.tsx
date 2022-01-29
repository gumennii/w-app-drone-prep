import React from 'react'

import { Text, Container } from '../../components'
import { StyledHeader } from './Styles'
import Cards from './Cards'

const Home = () => {
  return (
    <Container>
      <StyledHeader>
        <Text variant="h1" weight="bold">
          Hello 👋 Pilot
        </Text>
        <Text variant="h2" weight="bold">
          How do{' '}
          <Text variant="h2" weight="bold" color="yellow">
            you
          </Text>
        </Text>
        <Text variant="h2" weight="bold">
          want to{' '}
          <Text variant="h2" weight="bold" color="blue">
            practice today?
          </Text>
        </Text>
      </StyledHeader>
      <Cards />
    </Container>
  )
}

export default Home
