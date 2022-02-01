import styled from 'styled-components/native'

export const StyledView = styled.View`
  padding-top: ${({ theme }) => theme.spacing[1]};
  padding-right: ${({ theme }) => theme.spacing[1]};
  flex-direction: row;
  align-items: center;
`

export const StyledProgressBar = styled.View`
  background: ${({ theme }) => theme.color.common.white};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  width: 70%;
  height: 5px;
`

export const StyledProgressBarInner = styled.View`
  height: 5px;
  background: ${({ theme }) => theme.color.blue.main};
  border-radius: ${({ theme }) => theme.borderRadius.large};
`

export const StyledActions = styled.View`
  padding-right: ${({ theme }) => theme.spacing[1]};
`

export const StyledContent = styled.View`
  padding-left: ${({ theme }) => theme.spacing[3]};
`
