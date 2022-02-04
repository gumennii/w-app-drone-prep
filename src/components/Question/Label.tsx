import React, { FC } from 'react'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'

import { StyledCorrectAnswer, StyledInCorrectAnswer } from './Styles'
import Icon from '../Icon'
import theme from '../../theme'

type Props = {
  isCorrect: boolean
  isAnswered: boolean
}

const Label: FC<Props> = ({ isCorrect, isAnswered }) => {
  if (!isAnswered) return null

  if (isAnswered && isCorrect) {
    return (
      <StyledCorrectAnswer>
        <Icon icon={faCheck} color={theme.color.common.white} size={8} />
      </StyledCorrectAnswer>
    )
  }

  if (isAnswered && !isCorrect) {
    return (
      <StyledInCorrectAnswer>
        <Icon icon={faTimes} color={theme.color.common.white} size={8} />
      </StyledInCorrectAnswer>
    )
  }

  return null
}

export default Label
