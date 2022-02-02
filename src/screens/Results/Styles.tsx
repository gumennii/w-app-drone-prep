import styled from 'styled-components/native'

export const StyledHeader = styled.View`
  padding-top: ${({ theme }) => theme.spacing[8]};
  padding-bottom: ${({ theme }) => theme.spacing[4]};
  padding-left: ${({ theme }) => theme.spacing[6]};
  padding-right: ${({ theme }) => theme.spacing[6]};
`

export const StyledCards = styled.View`
  padding: ${({ theme }) => theme.spacing[4]};
`

export const StyledCanfettiImageView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

export const StyledImageView = styled.View`
  position: absolute;
  right: ${({ theme }) => theme.spacing[4]};
  bottom: ${({ theme }) => theme.spacing[4]};
`
