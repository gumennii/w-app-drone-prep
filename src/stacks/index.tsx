import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RootStackParams } from '../types/RootStackParams'

import Home from '../screens/Home'
import SessionTypes from '../screens/SessionTypes'
import Categories from '../screens/Categories'
import Results from '../screens/Results'
import Question from '../screens/Question'
import RecurrenceRequirements from '../screens/RecurrenceRequirements'

import { Back } from '../components'

const Stack = createNativeStackNavigator<RootStackParams>()

const options = {
  headerLeft: () => <Back />,
}

const Stacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        title: null,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="RecurrenceRequirements"
        component={RecurrenceRequirements}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={options}
      />
      <Stack.Screen
        name="SessionTypes"
        component={SessionTypes}
        options={options}
      />
      <Stack.Screen name="Question" component={Question} options={options} />
      <Stack.Screen name="Results" component={Results} options={options} />
    </Stack.Navigator>
  )
}

export default Stacks
