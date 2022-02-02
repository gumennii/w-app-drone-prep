import styled from 'styled-components/native'

export const StyledHeader = styled.View`
  padding-top: ${({ theme }) => theme.spacing[2]};
  padding-left: ${({ theme }) => theme.spacing[6]};
  padding-right: ${({ theme }) => theme.spacing[6]};
  width: 80%;
`

export const StyledScrollView = styled.ScrollView``

export const StyledCategories = styled.View`
  padding: ${({ theme }) => theme.spacing[4]};
  padding-bottom: 100px;
`
