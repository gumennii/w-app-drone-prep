import React, { FC } from 'react'
import * as Haptics from 'expo-haptics'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import Text from '../Text'
import { QuestionOption } from '../../types'
import { StyledOption, StyledText, StyledDescription } from './Styles'
import Label from './Label'

const Option: FC<QuestionOption & TouchableOpacityProps> = ({
  isCorrect,
  isSelected,
  isAnswered,
  text,
  explanation,
  onPress,
}) => {
  const isExplanationVisible = isSelected && Boolean(explanation)

  const handleSelect = () => {
    Haptics.selectionAsync()
    return onPress(null)
  }

  return (
    <TouchableOpacity onPress={handleSelect} activeOpacity={0.9}>
      <StyledOption
        isCorrect={isCorrect}
        isAnswered={isAnswered}
        isSelected={isSelected}
      >
        <Label
          isSelected={isSelected}
          isCorrect={isCorrect}
          isAnswered={isAnswered}
        />
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
