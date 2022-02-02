import styled, { css } from 'styled-components/native'

export const StyledRandomCard = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[1]};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.color.common.white};
  border: 1px solid ${({ theme }) => theme.color.grey.light};
  width: 60px;
  height: 60px;

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.color.blue.main};
      border: 1px solid ${({ theme }) => theme.color.blue.main};
    `}
`

export const StyledRandomCardContent = styled.View``
