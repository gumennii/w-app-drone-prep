import React, { FC, useState } from 'react'
import { ScrollView, View } from 'react-native'

import { useNavigation, useQuestions } from '../../hooks'
import { Text, Container, Option, Space, Fab } from '../../components'
import { question_db } from '../../data'

import { StyledHeader, StyledOptions } from './Styles'

const Question: FC = () => {
  const navigation = useNavigation()
  const { state, dispatch } = useQuestions()
  const { questions, activeQuestionIndex } = state

  const [selectedAnswer, setSelectedAnswer] = useState<number>()

  const handleNext = () => {
    if (activeQuestionIndex > questions.length) {
      navigation.navigate('Categories')
    }
    dispatch({
      type: 'set_active_question_index',
      payload: activeQuestionIndex + 1,
    })
    setSelectedAnswer(undefined)
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
                />
                <Space size={2} />
              </View>
            )
          })}
        </StyledOptions>
      </ScrollView>

      {selectedAnswer && <Fab title="Continue" onPress={() => handleNext()} />}
    </Container>
  )
}

export default Question
