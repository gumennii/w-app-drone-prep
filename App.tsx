import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RootStackParams } from './src/types/RootStackParams'

import Home from './src/screens//Home'
import RecurrenceRequirements from './src/screens/RecurrenceRequirements'
import { ThemeProvider } from 'styled-components/native'

import theme from './src/theme'

import SessionTypes from './src/screens/SessionTypes'
import Categories from './src/screens/Categories'
import Results from './src/screens/Results'
import Question from './src/screens/Question'

const Stack = createNativeStackNavigator<RootStackParams>()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerBackTitleVisible: false,
            headerShadowVisible: false,
            title: null,
            headerStyle: { backgroundColor: theme.background.primary },
            contentStyle: { backgroundColor: theme.background.primary },
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="RecurrenceRequirements"
            component={RecurrenceRequirements}
          />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="SessionTypes" component={SessionTypes} />
          <Stack.Screen name="Question" component={Question} />
          <Stack.Screen name="Results" component={Results} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
