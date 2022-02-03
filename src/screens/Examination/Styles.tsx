import styled from 'styled-components/native'

export const StyledHeader = styled.View`
  padding-top: ${({ theme }) => theme.spacing[2]};
  padding-left: ${({ theme }) => theme.spacing[6]};
  padding-right: ${({ theme }) => theme.spacing[6]};
`

export const StyledScrollView = styled.ScrollView``

export const StyledContent = styled.View`
  padding: ${({ theme }) => theme.spacing[6]};
  padding-bottom: 100px;
`

export const StyledItem = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  margin-right: ${({ theme }) => theme.spacing[8]};
`

export const StyledBullet = styled.View`
  width: ${({ theme }) => theme.spacing[2]};
  height: ${({ theme }) => theme.spacing[2]};
  margin-right: ${({ theme }) => theme.spacing[3]};
  margin-top: 6px;
  background-color: ${({ theme }) => theme.color.yellow.main};
  border-radius: ${({ theme }) => theme.borderRadius.large};
`

export const StyledCard = styled.View`
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.color.common.white};
  border: 1px solid ${({ theme }) => theme.color.grey.light};
`

export const StyledCardItem = styled.View`
  flex-direction: row;
`

export const StyledCardMedia = styled.View``

export const StyledCardContent = styled.View`
  padding-top: ${({ theme }) => theme.spacing[2]};
  padding-left: ${({ theme }) => theme.spacing[3]};
  padding-bottom: ${({ theme }) => theme.spacing[3]};
  margin-right: 48px;
`

export const StyledCardIconContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing[10]};
  height: ${({ theme }) => theme.spacing[10]};
  background-color: ${({ theme }) => theme.color.yellow.main};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`
