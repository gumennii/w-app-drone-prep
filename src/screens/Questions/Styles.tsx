import styled from 'styled-components/native'

export const StyledView = styled.View`
  flex: 1;
  justify-content: flex-start;
`

export const StyledHeader = styled.View`
  padding-top: ${({ theme }) => theme.spacing[2]};
  padding-left: ${({ theme }) => theme.spacing[6]};
  padding-right: ${({ theme }) => theme.spacing[6]};
  padding-bottom: ${({ theme }) => theme.spacing[2]};
  width: 90%;
`

export const StyledQuestions = styled.View`
  padding: ${({ theme }) => theme.spacing[4]};
`
