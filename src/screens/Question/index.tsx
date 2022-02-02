import React, { FC, useState } from 'react'
import { ScrollView, View } from 'react-native'

import { useNavigation, useQuestions } from '../../hooks'
import { Container, Text, Option, Space, Fab } from '../../components'
import { question_db } from '../../data'

import { StyledHeader, StyledOptions } from './Styles'

const Question: FC = () => {
  const navigation = useNavigation()
  const { state, dispatch } = useQuestions()
  const { questions, activeQuestionIndex } = state

  const [selectedAnswer, setSelectedAnswer] = useState<number>()

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

  const handleSelect = (id: number) => {
    if (selectedAnswer) return
    setSelectedAnswer(id)
  }

  return (
    <Container>
      <ScrollView>
        <StyledHeader>
          <Text variant="h3" weight="bold" style={{ textAlign: 'center' }}>
            {question_db[questions[activeQuestionIndex]].question_text}
          </Text>
        </StyledHeader>
        <StyledOptions>
          {question_db[questions[activeQuestionIndex]].answers.map(answer => {
            const { id, answer_text, correct, explanation } = answer

            return (
              <View key={id}>
                <Option
                  text={answer_text}
                  explanation={explanation}
                  onPress={() => handleSelect(id)}
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
