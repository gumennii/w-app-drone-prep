import styled from 'styled-components/native'

import { Props } from './index'

export const StyledView = styled.View<Props>`
  height: ${({ theme, size }) => theme.spacing[size]};
`
