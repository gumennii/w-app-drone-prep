import styled from 'styled-components/native'

export const StyledView = styled.View`
  flex: 1;
  justify-content: flex-start;
`

export const StyledHeader = styled.View`
  padding-top: ${({ theme }) => theme.spacing[8]};
  padding-bottom: ${({ theme }) => theme.spacing[4]};
  padding-left: ${({ theme }) => theme.spacing[6]};
  padding-right: ${({ theme }) => theme.spacing[6]};
`

export const StyledOptions = styled.View`
  padding: ${({ theme }) => theme.spacing[4]};
  padding-bottom: 100px;
`
