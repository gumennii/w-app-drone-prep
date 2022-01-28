import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { RootStackParams } from '../../types/RootStackParams'

const Results = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()

  return (
    <View style={styles.container}>
      <Text>Results Screen</Text>
      <Button
        title="Go to Session"
        onPress={() => navigation.navigate('SessionTypes')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Results
