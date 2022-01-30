import styled, { css } from 'styled-components/native'

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
  margin-right: 48px;
`
