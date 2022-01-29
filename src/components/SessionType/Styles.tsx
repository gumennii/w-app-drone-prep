import styled, { css } from 'styled-components/native'

import { Props } from './index'

export const StyledSessionType = styled.View<Props>`
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
`

export const StyledSessionTypeMedia = styled.View<Props>``

export const StyledSessionTypeContent = styled.View<Props>`
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
`
