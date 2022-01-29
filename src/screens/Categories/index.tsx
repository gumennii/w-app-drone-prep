import React from 'react'
import { Button } from 'react-native'

import { useNavigation } from '../../hooks'
import { StyledHeader } from './Styles'

import { Text, Container } from '../../components'

const Categories = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <StyledHeader>
        <Text variant="h3" weight="bold">
          Select specific categories to study and review
        </Text>
      </StyledHeader>
      <Button
        title="Go to Session"
        onPress={() => navigation.navigate('Question')}
      />
    </Container>
  )
}

export default Categories
