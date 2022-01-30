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
  onPress,
}) => {
  const isAnwseredCorrectly = isSelected && isCorrect

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <StyledOption isCorrect={isCorrect} isSelected={isSelected}>
        <StyledText>{text}</StyledText>
        {isSelected && (
          <StyledDescription>
            <Text variant="body2">
              While calculation of performance is not covered in FAR 107, the
              remote pilot in command is directly responsible for and is the
              final authority as to the operation of the small unmanned aircraft
              system. The remote PIC is responsible for preflight of the
              aircraft.
            </Text>
          </StyledDescription>
        )}
        {isAnwseredCorrectly && (
          <StyledCorrectAnswer>
            <StyledCorrectAnswerText variant="body2">
              Correct Answer
            </StyledCorrectAnswerText>
          </StyledCorrectAnswer>
        )}
      </StyledOption>
    </TouchableOpacity>
  )
}

export default Option
