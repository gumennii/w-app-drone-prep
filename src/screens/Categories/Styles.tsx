import styled from 'styled-components/native'

export const StyledHeader = styled.View`
  padding: ${({ theme }) => theme.spacing[2]};
  width: 80%;
`

export const StyledCategories = styled.View`
  padding-top: ${({ theme }) => theme.spacing[4]};
`

export const StyledActions = styled.View`
  position: absolute;
  left: ${({ theme }) => theme.spacing[4]};
  right: ${({ theme }) => theme.spacing[4]};
  bottom: ${({ theme }) => theme.spacing[8]};
`
