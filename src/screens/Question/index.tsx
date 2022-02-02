import React, { FC, useState } from 'react'
import { ScrollView, View } from 'react-native'

import { useNavigation, useQuestions } from '../../hooks'
import { question_db } from '../../data'
import {
  addStorageArrayValue,
  removeStorageArrayValue,
  KEY_APP_ANSWERS_INCORRECT,
} from '../../storage'
import { Container, Text, Option, Space, Fab } from '../../components'

import { StyledHeader, StyledOptions } from './Styles'

const Question: FC = () => {
  const navigation = useNavigation()
  const { state, dispatch } = useQuestions()
  const {
    questions,
    activeQuestionIndex,
    activeQuestionCorrectAnswers,
    activeQuestionIncorrectAnswers,
  } = state

  const [selectedAnswer, setSelectedAnswer] = useState<number>()

  const question = question_db[questions[activeQuestionIndex]]
  const isLastQuestion = activeQuestionIndex === questions.length - 1
  const buttonLabel = isLastQuestion ? 'Go to results' : 'Continue'

  const handleNext = () => {
    setSelectedAnswer(undefined)

    dispatch({
      type: 'set_active_question_index',
      payload: activeQuestionIndex + 1,
    })
  }

  const handleGoToResults = () => {
    return navigation.navigate('Results')
  }

  const handleSelect = (id: number, correct: boolean) => {
    if (selectedAnswer) return

    setSelectedAnswer(id)

    if (correct) {
      dispatch({
        type: 'set_active_question_correct_answers',
        payload: activeQuestionCorrectAnswers + 1,
      })
      return removeStorageArrayValue(
        KEY_APP_ANSWERS_INCORRECT,
        String(question.id)
      )
    }

    dispatch({
      type: 'set_active_question_incorrect_answers',
      payload: activeQuestionIncorrectAnswers + 1,
    })

    return addStorageArrayValue(KEY_APP_ANSWERS_INCORRECT, String(question.id))
  }

  return (
    <Container>
      <ScrollView>
        <StyledHeader>
          <Text variant="h3" weight="bold" style={{ textAlign: 'center' }}>
            {question.question_text}
          </Text>
        </StyledHeader>
        <StyledOptions>
          {question.answers.map(answer => {
            const { id, answer_text, correct, explanation } = answer

            return (
              <View key={id}>
                <Option
                  text={answer_text}
                  explanation={explanation}
                  onPress={() => handleSelect(id, correct)}
                  isCorrect={correct}
                  isSelected={selectedAnswer === id}
                  isAnswered={selectedAnswer}
                />
                <Space size={2} />
              </View>
            )
          })}
        </StyledOptions>
      </ScrollView>

      {selectedAnswer && !isLastQuestion && (
        <Fab title={buttonLabel} onPress={handleNext} />
      )}

      {selectedAnswer && isLastQuestion && (
        <Fab title={buttonLabel} onPress={handleGoToResults} />
      )}
    </Container>
  )
}

export default Question
