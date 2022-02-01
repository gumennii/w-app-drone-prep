import styled from 'styled-components/native'

export const StyledHeader = styled.View`
  padding: ${({ theme }) => theme.spacing[2]};
  width: 80%;
`

export const StyledScrollView = styled.ScrollView`
  padding-top: ${({ theme }) => theme.spacing[4]};
  padding-bottom: ${({ theme }) => theme.spacing[9]};
`

export const StyledCategoryContainer = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`
