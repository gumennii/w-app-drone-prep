import React, { FC } from 'react'

import Text from '../Text'
import { useQuestions } from '../../hooks'

import {
  StyledView,
  StyledProgressBar,
  StyledProgressBarInner,
  StyledContent,
} from './Styles'

const Progress: FC = () => {
  const { state } = useQuestions()
  const { questions, activeQuestionIndex } = state

  const w = `${(100 / questions.length) * (activeQuestionIndex + 1)}%`
  const label = `${activeQuestionIndex + 1} / ${questions.length}`

  return (
    <StyledView>
      <StyledProgressBar>
        <StyledProgressBarInner style={{ width: w }}></StyledProgressBarInner>
      </StyledProgressBar>
      <StyledContent>
        <Text variant="body2" weight="bold">
          {label}
        </Text>
      </StyledContent>
    </StyledView>
  )
}

export default Progress
