import styled from 'styled-components/native'

import Text from '../Text'

export const StyledQuestion = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding: ${({ theme }) => theme.spacing[3]};
  background-color: ${({ theme }) => theme.color.common.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid ${({ theme }) => theme.color.grey.light};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`

export const StyledText = styled(Text)`
  padding-right: ${({ theme }) => theme.spacing[2]};
  margin-right: ${({ theme }) => theme.spacing[8]};
`

export const StyledCorrectAnswer = styled.View`
  position: absolute;
  width: ${({ theme }) => theme.spacing[4]};
  height: ${({ theme }) => theme.spacing[4]};
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: ${({ theme }) => theme.color.green.main};
  right: ${({ theme }) => theme.spacing[2]};
  top: ${({ theme }) => theme.spacing[2]};
`

export const StyledInCorrectAnswer = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing[4]};
  height: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: ${({ theme }) => theme.color.error.main};
  right: ${({ theme }) => theme.spacing[2]};
  top: ${({ theme }) => theme.spacing[2]};
`

export const StyledNumber = styled.View`
  align-items: center;
  justify-content: center;
  width: 20px;
  padding: 0 ${({ theme }) => theme.spacing[1]};
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-right: ${({ theme }) => theme.spacing[2]};
`

export const StyledBadgeText = styled(Text)`
  font-size: 10px;
`
