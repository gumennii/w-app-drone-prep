import styled from 'styled-components/native'

export const StyledHeader = styled.View`
  padding-left: ${({ theme }) => theme.spacing[6]};
  padding-right: ${({ theme }) => theme.spacing[6]};
  padding-bottom: ${({ theme }) => theme.spacing[4]};
`

export const StyledCards = styled.View`
  padding: ${({ theme }) => theme.spacing[4]};
`

export const StyledImageView = styled.View`
  position: absolute;
  right: ${({ theme }) => theme.spacing[4]};
  bottom: ${({ theme }) => theme.spacing[4]};
`
