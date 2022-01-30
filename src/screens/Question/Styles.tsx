import styled from 'styled-components/native'

export const StyledHeader = styled.View`
  padding-top: ${({ theme }) => theme.spacing[2]};
  padding-left: ${({ theme }) => theme.spacing[4]};
  padding-right: ${({ theme }) => theme.spacing[4]};
  padding-bottom: ${({ theme }) => theme.spacing[4]};
`

export const StyledOptions = styled.View`
  padding-top: ${({ theme }) => theme.spacing[4]};
`
