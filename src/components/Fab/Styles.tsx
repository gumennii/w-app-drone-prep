import styled from 'styled-components/native'

export const StyledView = styled.View`
  position: absolute;
  left: ${({ theme }) => theme.spacing[4]};
  right: ${({ theme }) => theme.spacing[4]};
  bottom: ${({ theme }) => theme.spacing[8]};
`
