import React from 'react'
import { Button } from 'react-native'
import { Text, Container } from '../../components'

import { useNavigation } from '../../hooks'

const SessionTypes = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <Text>What type of session would you like to start?</Text>
      <Text>Specific Categories</Text>
      <Text>Random Questions</Text>
      <Text>Marked Questions</Text>
      <Text>Questions Answered Wrong</Text>
      <Button
        title="Specific Categories"
        onPress={() => navigation.navigate('Categories')}
      />
    </Container>
  )
}

export default SessionTypes
