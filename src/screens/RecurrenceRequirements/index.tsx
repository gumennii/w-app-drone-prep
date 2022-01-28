import React from 'react'
import { Button, Text } from 'react-native'

import { useNavigation } from '../../hooks'
import { StyledView } from './Styles'

const RecurrenceRequirements = () => {
  const navigation = useNavigation()

  return (
    <StyledView>
      <Text>RecurrenceRequirements Screen</Text>
      <Button
        title="Go to Session"
        onPress={() => navigation.navigate('SessionTypes')}
      />
    </StyledView>
  )
}

export default RecurrenceRequirements
