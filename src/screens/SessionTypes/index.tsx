import React from 'react'
import * as Haptics from 'expo-haptics'
import { ScrollView } from 'react-native'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faBomb } from '@fortawesome/free-solid-svg-icons'

import { Text, Container, SessionType, Space, Fab } from '../../components'

import { useNavigation, useQuestions } from '../../hooks'
import { StyledHeader, StyledCategories } from './Styles'

const SessionTypes = () => {
  const navigation = useNavigation()
  const { state, dispatch } = useQuestions()
  const { selectedSessionType } = state

  const handleSelected = (id: number) => {
    Haptics.selectionAsync()
    dispatch({ type: 'set_session_type', payload: id })
  }

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
          />
          <Space size={2} />
          <SessionType
            title="Questions Answered Wrong"
            description="Creates a new study session from questions that have been previously marked in either a study or test session."
            icon={faBomb}
            selected={selectedSessionType === 4}
            onPress={() => handleSelected(4)}
          />
        </StyledCategories>
      </ScrollView>

      {selectedSessionType && (
        <Fab
          title="Continue"
          onPress={() => navigation.navigate('Categories')}
        />
      )}
    </Container>
  )
}

export default SessionTypes
