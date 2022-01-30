import React, { FC } from 'react'

import { useNavigation } from '../../hooks'
import { Text, Container, Option, Space, Fab } from '../../components'

import { StyledHeader, StyledOptions } from './Styles'

const Question: FC = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <StyledHeader>
        <Text variant="h3" weight="bold" style={{ textAlign: 'center' }}>
          While filming a breaking news event with a small UA, a manned news
          helicopter arrives on the scene. Who must yield the right-of-way?
        </Text>
      </StyledHeader>
      <StyledOptions>
        <Option
          value="value"
          text="The small UA must give way to the helicopter."
          onPress={() => alert('Pressed!')}
          isCorrect
          isSelected
        />
        <Space size={2} />
        <Option
          value="value"
          text="Both manned and unmanned aircraft must maintain awareness as to see and avoid each other."
          onPress={() => alert('Pressed!')}
          isSelected
        />
        <Space size={2} />
        <Option
          value="value"
          text="The helicopter must give way to the small UA."
          onPress={() => alert('Pressed!')}
        />
        <Space size={2} />
      </StyledOptions>

      <Fab title="Continue" onPress={() => navigation.navigate('Categories')} />
    </Container>
  )
}

export default Question
