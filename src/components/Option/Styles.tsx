import styled, { css } from 'styled-components/native'

import Text from '../Text'

export const StyledOption = styled.View`
  padding: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.color.common.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 2px solid ${({ theme }) => theme.color.grey.light};

  ${({ isCorrect, isSelected }) =>
    isCorrect &&
    isSelected &&
    css`
      border: 2px solid ${({ theme }) => theme.color.green.main};
      background-color: ${({ theme }) => theme.color.green.light};
    `}

  ${({ isCorrect, isSelected }) =>
    !isCorrect &&
    isSelected &&
    css`
      border: 2px solid ${({ theme }) => theme.color.error.main};
      background-color: ${({ theme }) => theme.color.error.light};
    `}
`

export const StyledText = styled(Text)`
  padding-right: ${({ theme }) => theme.spacing[2]};
`

export const StyledCorrectAnswer = styled.View`
  position: absolute;
  padding: 2px 4px;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.green.main};
  top: ${({ theme }) => `-${theme.spacing[3]}`};
  left: ${({ theme }) => theme.spacing[2]};
`

export const StyledCorrectAnswerText = styled(Text)`
  color: ${({ theme }) => theme.color.common.white};
`

export const StyledDescription = styled.View`
  padding-top: ${({ theme }) => theme.spacing[2]};
`
