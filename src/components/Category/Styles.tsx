import styled, { css } from 'styled-components/native'

import Text from '../Text'

export const StyledCategory = styled.View`
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.color.common.white};
  border: 1px solid ${({ theme }) => theme.color.grey.light};

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.color.blue.main};
      border: 1px solid ${({ theme }) => theme.color.blue.main};
    `}
`

export const StyledCategoryMedia = styled.View``

export const StyledCategoryContent = styled.View`
  padding-left: ${({ theme }) => theme.spacing[2]};
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`

export const StyledBadge = styled.View`
  position: absolute;
  right: 0;
  align-items: center;
  justify-content: center;
  width: 20px;
  padding: 0 ${({ theme }) => theme.spacing[1]};
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.color.blue.dark};
    `}
`

export const StyledBadgeText = styled(Text)`
  font-size: 10px;

  ${({ selected }) =>
    selected &&
    css`
      color: ${({ theme }) => theme.color.common.white};
    `}
`
