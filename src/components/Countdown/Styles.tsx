import styled from 'styled-components/native'

export const StyledView = styled.View`
  flex-direction: row;
  align-self: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  background-color: ${({ theme }) => theme.color.yellow.main};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing[2]};
`
