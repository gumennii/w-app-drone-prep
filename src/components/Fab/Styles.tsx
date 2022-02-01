import styled from 'styled-components/native'

export const StyledView = styled.View`
  position: absolute;
  left: ${({ theme }) => theme.spacing[2]};
  right: ${({ theme }) => theme.spacing[2]};
  bottom: ${({ theme }) => theme.spacing[8]};
`
