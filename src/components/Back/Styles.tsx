import styled from 'styled-components/native'

import { Pressable } from '../Button/Pressable'
import Icon from '../Icon'
import theme from '../../theme'

export const StyledButton = styled(Pressable).attrs(() => ({
  pressStyle: {
    color: theme.color.primary.dark,
  },
}))`
  display: flex;
  align-items: center;
  align-self: flex-start;
  justify-content: center;
  color: ${theme.color.primary.main};
  padding-top: ${theme.spacing[1]};
  padding-right: ${theme.spacing[1]};
  border-radius: ${theme.borderRadius.large};
`

export const StyledIcon = styled(Icon)``
