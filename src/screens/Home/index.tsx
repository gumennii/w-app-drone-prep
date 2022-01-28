import React from 'react'
import { Button, Text } from 'react-native'

import { useNavigation } from '../../hooks'
import { StyledView } from './Styles'

const Home = () => {
  const navigation = useNavigation()

  return (
    <StyledView>
      <Text>Home Screen</Text>
      <Button
        title="Go to Session"
        onPress={() => navigation.navigate('SessionTypes')}
      />
    </StyledView>
  )
}

export default Home
