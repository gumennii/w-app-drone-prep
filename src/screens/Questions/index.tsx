import React, { FC, useState } from 'react'
import { ScrollView, View } from 'react-native'

import { useQuestions } from '../../hooks'
import { question_db } from '../../data'

import { Container, Question, Text } from '../../components'

import { StyledHeader, StyledQuestions } from './Styles'

const Questions: FC = ({ route, navigation }) => {
  const { state, dispatch } = useQuestions()

  const {
    questions,
    activeQuestionIndex,
    activeQuestionCorrectAnswers,
    activeQuestionIncorrectAnswers,
  } = state

  return (
    <Container>
      <ScrollView>
        <StyledHeader>
          <Text variant="h3" weight="bold" mb={2}>
            Questions
          </Text>
          <Text>
            This learning mode shows all the questions within session and allows
            you to navigate to any question
          </Text>
        </StyledHeader>
        <StyledQuestions>
          {questions.map((id: number, index: number) => {
            const question = question_db[id]
            const { question_text } = question

            return (
              <Question
                key={id}
                index={index + 1}
                question_text={question_text}
                isCorrect={false}
                isAnswered={true}
                onPress={() => navigation.navigate('Question')}
              />
            )
          })}
        </StyledQuestions>
      </ScrollView>
    </Container>
  )
}

export default Questions
