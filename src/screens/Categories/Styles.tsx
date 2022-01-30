import styled from 'styled-components/native'

export const StyledHeader = styled.View`
  padding: ${({ theme }) => theme.spacing[2]};
  width: 80%;
`

export const StyledCategories = styled.View`
  padding-top: ${({ theme }) => theme.spacing[4]};
`

export const StyledCategoryContainer = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`
