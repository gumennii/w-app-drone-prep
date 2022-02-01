import React, { FC } from 'react'
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
  text,
  explanation,
  onPress,
}) => {
  const isAnwseredCorrectly = isSelected && isCorrect

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <StyledOption isCorrect={isCorrect} isSelected={isSelected}>
        {isAnwseredCorrectly && (
          <StyledCorrectAnswer>
            <StyledCorrectAnswerText variant="caption">
              Correct Answer
            </StyledCorrectAnswerText>
          </StyledCorrectAnswer>
        )}
        <StyledText>{text}</StyledText>
        {isSelected && explanation && (
          <StyledDescription>
            <Text variant="body2">{explanation}</Text>
          </StyledDescription>
        )}
      </StyledOption>
    </TouchableOpacity>
  )
}

export default Option
