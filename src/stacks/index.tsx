import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RootStackParams } from '../types/RootStackParams'

import Home from '../screens/Home'
import SessionTypes from '../screens/SessionTypes'
import Categories from '../screens/Categories'
import Results from '../screens/Results'
import Question from '../screens/Question'
import Questions from '../screens/Questions'
import Random from '../screens/Random'
import Examination from '../screens/Examination'
import RecurrenceRequirements from '../screens/RecurrenceRequirements'

import { Back, Progress, Close, Flag, QuestionList } from '../components'
import { useQuestions } from '../hooks'

const Stack = createNativeStackNavigator<RootStackParams>()

const options = {
  headerLeft: () => <Back />,
}

const questionOptions = {
  headerLeft: () => <Close />,
  headerTitle: () => <Progress />,
  headerRight: () => <QuestionList />,
}

const resultsOptions = {
  headerLeft: () => <Close />,
}

const Stacks = () => {
  const { dispatch } = useQuestions()

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        title: null,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        listeners={() => ({
          focus: () => {
            dispatch({ type: 'reset' })
          },
        })}
      />
      <Stack.Screen
        name="SessionTypes"
        component={SessionTypes}
        options={options}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={options}
        listeners={() => ({
          beforeRemove: () => {
            dispatch({ type: 'set_categories', payload: [] })
          },
        })}
      />
      <Stack.Screen name="Random" component={Random} options={options} />
      <Stack.Screen
        name="Examination"
        component={Examination}
        options={options}
      />

      <Stack.Screen
        name="Question"
        component={Question}
        options={questionOptions}
        listeners={() => ({
          // beforeRemove: () => {
          //   dispatch({ type: 'reset' })
          // },
        })}
      />
      <Stack.Screen name="Questions" component={Questions} options={options} />
      <Stack.Screen
        name="Results"
        component={Results}
        options={resultsOptions}
        listeners={() => ({
          beforeRemove: () => {
            dispatch({ type: 'reset' })
          },
        })}
      />
      <Stack.Screen
        name="RecurrenceRequirements"
        component={RecurrenceRequirements}
      />
    </Stack.Navigator>
  )
}

export default Stacks
