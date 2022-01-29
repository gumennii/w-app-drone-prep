import styled from 'styled-components/native'

import { Props } from './index'

export const StyledCard = styled.View<Props>`
  padding: ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme, variant }) => theme.color[variant].main};
`
