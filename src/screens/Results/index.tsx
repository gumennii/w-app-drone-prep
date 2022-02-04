import React from 'react'
import { ScrollView } from 'react-native'
import {
  faAngleRight,
  faClipboardList,
  faBomb,
} from '@fortawesome/free-solid-svg-icons'

import {
  Text,
  Container,
  Card,
  Button,
  SessionType,
  Space,
} from '../../components'
import { useNavigation, useQuestions } from '../../hooks'
import SvgComponentConfetti from '../../assets/svg/ConfettiSvg'
import SvgComponentDoc from '../../assets/svg/DocSvg'

import {
  StyledHeader,
  StyledCards,
  StyledCanfettiImageView,
  StyledImageView,
} from './Styles'

const Results = () => {
  const navigation = useNavigation()
  const { state } = useQuestions()
  const { questions, activeQuestionCorrectAnswers } = state

  const total = Math.round(
    (activeQuestionCorrectAnswers / questions.length) * 100
  )

  return (
    <Container>
      <ScrollView>
        <StyledHeader>
          <Text variant="h2" weight="bold" style={{ textAlign: 'center' }}>
            Congratulations!
          </Text>
          <Text variant="h2" weight="bold" style={{ textAlign: 'center' }}>
            Your score is{' '}
            <Text variant="h2" weight="bold" color="blue">
              {total}%
            </Text>
          </Text>
          <StyledCanfettiImageView>
            <SvgComponentConfetti />
          </StyledCanfettiImageView>
        </StyledHeader>

        <StyledCards>
          <SessionType
            title="Review Questions"
            description="Review all questions you answered within this practice session."
            icon={faClipboardList}
            onPress={() => navigation.navigate('Questions')}
          />
          <Space size={2} />
          <SessionType
            title="Review Missed Questions"
            description="Take a look at questions you answered incorrectly."
            icon={faBomb}
            onPress={() => navigation.navigate('Questions')}
          />
          <Space size={2} />
          <Card variant="blue">
            <Text variant="h3" weight="bold" color="white" mb={2}>
              New Study Session
            </Text>
            <Text color="snow" mb={6}>
              Start preparing for your FAA knowledge test by creating custom
              study sessions and learning the questions.
            </Text>
            <Button
              title="Go to Session!"
              icon={faAngleRight}
              onPress={() => navigation.navigate('SessionTypes')}
            />
            <StyledImageView>
              <SvgComponentDoc />
            </StyledImageView>
          </Card>
        </StyledCards>
      </ScrollView>
    </Container>
  )
}

export default Results
