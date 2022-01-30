import styled from 'styled-components/native'

import Text from '../Text'

export const StyledTouchableOpacity = styled.TouchableOpacity``

export const StyledButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: ${({ fullWidth }) => (fullWidth ? 'auto' : 'flex-start')};

  padding: ${({ theme, size }) => theme.button.padding[size]};
  background-color: ${({ theme, variant }) => theme.color[variant].main};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`

export const StyledText = styled(Text)`
  padding-right: ${({ theme }) => theme.spacing[2]};
`
