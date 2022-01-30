import * as React from 'react'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components/native'

import Stacks from './src/stacks'
import theme from './src/theme'
import { QuestionsProvider } from './src/contexts/Questions'

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.background.primary,
    card: theme.background.primary,
  },
}

function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <QuestionsProvider>
        <NavigationContainer theme={navigationTheme}>
          <Stacks />
        </NavigationContainer>
      </QuestionsProvider>
    </ThemeProvider>
  )
}

export default App
