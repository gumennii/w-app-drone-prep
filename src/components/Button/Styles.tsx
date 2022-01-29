import styled from 'styled-components/native'

import { Pressable } from './Pressable'
import Text from '../Text'

export const StyledButton = styled(Pressable).attrs(({ theme, variant }) => ({
  pressStyle: {
    backgroundColor: theme.color[variant].dark,
  },
}))`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  align-self: ${({ fullWidth }) => (fullWidth ? 'auto' : 'flex-start')};
  justify-content: center;
  padding: ${({ theme, size }) => theme.button.padding[size]};
  background-color: ${({ theme, variant }) => theme.color[variant].main};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`

export const StyledText = styled(Text)`
  padding-right: ${({ theme }) => theme.spacing[2]};
`
