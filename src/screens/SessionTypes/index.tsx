import React, { useEffect, useState } from 'react'
import * as Haptics from 'expo-haptics'
import { ScrollView } from 'react-native'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faBomb } from '@fortawesome/free-solid-svg-icons'

import { Text, Container, SessionType, Space, Fab } from '../../components'

import { useNavigation, useQuestions } from '../../hooks'
import { StyledHeader, StyledCategories } from './Styles'
import {
  getStorageData,
  KEY_APP_ANSWERS_INCORRECT,
  KEY_APP_ANSWERS_MARKED,
} from '../../storage'

const SessionTypes = () => {
  const navigation = useNavigation()
  const { state, dispatch } = useQuestions()
  const [questionsMarked, setQuestionsMarked] = useState([])
  const [questionsIncorrect, setQuestionsIncorrect] = useState([])

  const { selectedSessionType } = state

  const handleSelected = (id: number) => {
    Haptics.selectionAsync()
    dispatch({ type: 'set_session_type', payload: id })
  }

  const handleNavigation = async () => {
    switch (selectedSessionType) {
      case 1:
        return navigation.navigate('Categories')
      case 2:
        return navigation.navigate('Random')
      case 3: {
        dispatch({ type: 'set_questions', payload: questionsMarked })
        return navigation.navigate('Question')
      }
      case 4: {
        dispatch({ type: 'set_questions', payload: questionsIncorrect })
        return navigation.navigate('Question')
      }
    }
  }

  const getStorage = async () => {
    const questionsMarked = (await getStorageData(KEY_APP_ANSWERS_MARKED)) || []
    const questionsIncorrect =
      (await getStorageData(KEY_APP_ANSWERS_INCORRECT)) || []

    setQuestionsMarked(questionsMarked)
    setQuestionsIncorrect(questionsIncorrect)
  }

  useEffect(() => {
    getStorage()
  }, [navigation])

  const isSessionTypeMarkedDisabled = questionsMarked.length === 0
  const isSessionTypeIncorrectDisabled = questionsIncorrect.length === 0

  return (
    <Container>
      <ScrollView>
        <StyledHeader>
          <Text variant="h3" weight="bold">
            What type of session would you like to start?
          </Text>
        </StyledHeader>
        <StyledCategories>
          <SessionType
            title="Specific Categories"
            description="Create a custom session by selecting specific categories of questions to study."
            icon={faClipboardList}
            selected={selectedSessionType === 1}
            onPress={() => handleSelected(1)}
          />
          <Space size={2} />
          <SessionType
            title="Random Questions"
            description="Creates a new study session from a random selection of questions."
            icon={faDice}
            selected={selectedSessionType === 2}
            onPress={() => handleSelected(2)}
          />
          <Space size={2} />
          <SessionType
            title="Marked Questions"
            description="Creates a new study session from questions that have been previously marked in either a study or test session."
            icon={faFlag}
            selected={selectedSessionType === 3}
            onPress={() => handleSelected(3)}
            disabled={isSessionTypeMarkedDisabled}
            questions={questionsMarked.length}
          />
          <Space size={2} />
          <SessionType
            title="Questions Answered Wrong"
            description="Creates a new study session from questions that have been previously marked in either a study or test session."
            icon={faBomb}
            selected={selectedSessionType === 4}
            onPress={() => handleSelected(4)}
            disabled={isSessionTypeIncorrectDisabled}
            questions={questionsIncorrect.length}
          />
        </StyledCategories>
      </ScrollView>

      {selectedSessionType && (
        <Fab title="Continue" onPress={handleNavigation} />
      )}
    </Container>
  )
}

export default SessionTypes
