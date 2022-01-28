import React from 'react'
import { Button, Text } from 'react-native'

import { useNavigation } from '../../hooks'
import { StyledView } from './Styles'

const SessionTypes = () => {
  const navigation = useNavigation()

  return (
    <StyledView>
      <Text>What type of session would you like to start?</Text>
      <Text>Specific Categories</Text>
      <Text>Random Questions</Text>
      <Text>Marked Questions</Text>
      <Text>Questions Answered Wrong</Text>
      <Button
        title="Specific Categories"
        onPress={() => navigation.navigate('Categories')}
      />
    </StyledView>
  )
}

export default SessionTypes
