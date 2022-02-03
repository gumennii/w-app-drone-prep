import styled from 'styled-components/native'

export const StyledView = styled.View`
  height: ${({ theme, size }) => theme.spacing[size]};
`
