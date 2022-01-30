import styled from 'styled-components/native'

export const StyledCard = styled.View`
  padding: ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme, variant }) => theme.color[variant].main};
`
