import styled from 'styled-components/native'

export const StyledButton = styled.View`
  color: ${({ theme }) => theme.color.primary.main};
  padding-top: ${({ theme }) => theme.spacing[1]};
  padding-right: ${({ theme }) => theme.spacing[1]};
`
