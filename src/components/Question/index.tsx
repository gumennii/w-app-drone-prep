import React, { FC } from 'react'
import * as Haptics from 'expo-haptics'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import {
  StyledQuestion,
  StyledText,
  StyledNumber,
  StyledBadgeText,
} from './Styles'
import Label from './Label'

type Props = {
  index: number
  isCorrect: boolean
  isAnswered: boolean
  question_text: string
}

const Question: FC<Props & TouchableOpacityProps> = ({
  index,
  isCorrect,
  isAnswered,
  question_text,
  onPress,
}) => {
  const handleSelect = () => {
    Haptics.selectionAsync()
    return onPress(null)
  }

  return (
    <TouchableOpacity onPress={handleSelect} activeOpacity={0.9}>
      <StyledQuestion isCorrect={isCorrect} isAnswered={isAnswered}>
        <Label isCorrect={isCorrect} isAnswered={isAnswered} />
        <StyledNumber>
          <StyledBadgeText weight="bold" color="secondary">
            {index}
          </StyledBadgeText>
        </StyledNumber>
        <StyledText variant="body2">{question_text}</StyledText>
      </StyledQuestion>
    </TouchableOpacity>
  )
}

export default Question
