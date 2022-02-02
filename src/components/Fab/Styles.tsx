import styled from 'styled-components/native'

export const StyledView = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  padding-right: ${({ theme }) => theme.spacing[4]};
  padding-left: ${({ theme }) => theme.spacing[4]};
  bottom: ${({ theme }) => theme.spacing[4]};
`
