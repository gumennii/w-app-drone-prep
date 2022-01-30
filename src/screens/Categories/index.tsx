import React from 'react'

import { useNavigation } from '../../hooks'
import { Text, Container, Category, Space, Fab } from '../../components'

import { StyledHeader, StyledCategories } from './Styles'

const Categories = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <StyledHeader>
        <Text variant="h3" weight="bold">
          Select specific categories to study and review
        </Text>
      </StyledHeader>
      <StyledCategories>
        <Category title="Aerodynamic Forces" selected={false} />
        <Space size={2} />
        <Category title="Aircraft Performance" selected={true} />
      </StyledCategories>

      <Fab title="Continue" onPress={() => navigation.navigate('Question')} />
    </Container>
  )
}

export default Categories
