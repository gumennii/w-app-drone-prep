import styled from 'styled-components/native'

import { Props } from './index'

export const StyledText = styled.Text<Props>`
  font-size: ${({ theme, variant }) => theme.typography.size[variant]};
  font-family: ${({ theme, weight }) => theme.typography.weight[weight]};
  line-height: ${({ theme, variant }) => theme.typography.lineHeight[variant]};
  color: ${({ theme, color }) => theme.typography.color[color] || color};
  margin-bottom: ${({ theme, mb }) => (mb ? theme.spacing[mb] : 0)};
`
