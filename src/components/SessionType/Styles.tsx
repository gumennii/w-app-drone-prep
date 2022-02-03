import styled, { css } from 'styled-components/native'

import Text from '../Text'

export const StyledSessionType = styled.View`
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.color.common.white};
  border: 1px solid ${({ theme }) => theme.color.grey.light};

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.color.blue.main};
      border: 1px solid ${({ theme }) => theme.color.blue.main};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.7;
      background-color: ${({ theme }) => theme.color.common.white};
    `}
`

export const StyledSessionTypeMedia = styled.View``

export const StyledSessionTypeContent = styled.View`
  padding-top: ${({ theme }) => theme.spacing[3]};
  padding-left: ${({ theme }) => theme.spacing[3]};
  padding-bottom: ${({ theme }) => theme.spacing[2]};
  margin-right: 48px;
`

export const StyledIconContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing[10]};
  height: ${({ theme }) => theme.spacing[10]};
  background-color: ${({ theme }) => theme.color.blue.lightest};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.color.blue.dark};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.8;
      background-color: ${({ theme }) => theme.background.primary};
    `}
`

export const StyledBadge = styled.View`
  position: absolute;
  right: -8px;
  top: -4px;
  align-items: center;
  justify-content: center;
  width: 20px;
  padding: 0 ${({ theme }) => theme.spacing[1]};
  background-color: ${({ theme }) => theme.color.blue.lightest};
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
