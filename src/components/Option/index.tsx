import React, { FC } from 'react'
import * as Haptics from 'expo-haptics'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import Text from '../Text'
import { QuestionOption } from '../../types'
import {
  StyledOption,
  StyledText,
  StyledDescription,
  StyledCorrectAnswer,
  StyledCorrectAnswerText,
} from './Styles'

const Option: FC<QuestionOption & TouchableOpacityProps> = ({
  isCorrect,
  isSelected,
  isAnswered,
  text,
  explanation,
  onPress,
}) => {
  const isAnwseredCorrectly = isSelected && isCorrect
  const isExplanationVisible = isSelected && Boolean(explanation)

  const handleSelect = () => {
    Haptics.selectionAsync()
    return onPress(null)
  }

  return (
    <TouchableOpacity onPress={handleSelect} activeOpacity={0.9}>
      <StyledOption isCorrect={isCorrect} isSelected={isSelected}>
        {isAnwseredCorrectly && (
          <StyledCorrectAnswer>
            <StyledCorrectAnswerText variant="caption">
              Correct Answer
            </StyledCorrectAnswerText>
          </StyledCorrectAnswer>
        )}
        {isAnswered && isCorrect && (
          <StyledCorrectAnswer>
            <StyledCorrectAnswerText variant="caption">
              Correct Answer
            </StyledCorrectAnswerText>
          </StyledCorrectAnswer>
        )}
        <StyledText>{text}</StyledText>
        {isExplanationVisible && (
          <StyledDescription>
            <Text variant="body2">{explanation}</Text>
          </StyledDescription>
        )}
      </StyledOption>
    </TouchableOpacity>
  )
}

export default Option
