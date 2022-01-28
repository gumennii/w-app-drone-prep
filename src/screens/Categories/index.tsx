import React from 'react'
import { Button, Text } from 'react-native'

import { useNavigation } from '../../hooks'
import { StyledView } from './Styles'

const Categories = () => {
  const navigation = useNavigation()

  return (
    <StyledView>
      <Text>Select specific categories to study and review</Text>
      <Button
        title="Go to Session"
        onPress={() => navigation.navigate('Question')}
      />
    </StyledView>
  )
}

export default Categories
