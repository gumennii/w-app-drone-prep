import React, { FC } from 'react'

import {
  StyledCorrectAnswer,
  StyledInCorrectAnswer,
  StyledCorrectAnswerText,
} from './Styles'

type Props = {
  isAnswered: boolean
  isCorrect: boolean
  isSelected: boolean
}

const Label: FC<Props> = ({ isAnswered, isCorrect, isSelected }) => {
  if (!isAnswered) return null

  if (isSelected && isCorrect) {
    return (
      <StyledCorrectAnswer>
        <StyledCorrectAnswerText variant="caption">
          Your Answer
        </StyledCorrectAnswerText>
      </StyledCorrectAnswer>
    )
  }

  if (isAnswered && isCorrect) {
    return (
      <StyledCorrectAnswer>
        <StyledCorrectAnswerText variant="caption">
          Correct Answer
        </StyledCorrectAnswerText>
      </StyledCorrectAnswer>
    )
  }

  if (!isCorrect && isSelected) {
    return (
      <StyledInCorrectAnswer>
        <StyledCorrectAnswerText variant="caption">
          Your Answer
        </StyledCorrectAnswerText>
      </StyledInCorrectAnswer>
    )
  }

  return null
}

export default Label
