import styled from 'styled-components/native'

export const StyledHeader = styled.View`
  padding-top: ${({ theme }) => theme.spacing[2]};
  padding-left: ${({ theme }) => theme.spacing[6]};
  padding-right: ${({ theme }) => theme.spacing[6]};
  width: 80%;
`

export const StyledScrollView = styled.ScrollView``

export const StyledCards = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing[4]};
  padding-bottom: 100px;
`

export const CardColumn = styled.View`
  padding-right: ${({ theme }) => theme.spacing[2]};
  padding-bottom: ${({ theme }) => theme.spacing[2]};
`
