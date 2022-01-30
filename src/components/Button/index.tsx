import React, { FC } from 'react'
import { TouchableHighlightProps } from 'react-native'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import Icon from '../Icon'
import { StyledTouchableOpacity, StyledButton, StyledText } from './Styles'

type Variant = 'primary' | 'secondary'
type Size = 'small' | 'medium' | 'large'

export type Props = {
  title: string
  size?: Size
  variant?: Variant
  fullWidth?: boolean
  icon?: IconProp
} & TouchableHighlightProps

const textSize = {
  small: 'h5',
  large: 'h4',
}

const Button: FC<Props> = ({
  variant = 'primary',
  size = 'medium',
  icon,
  title,
  fullWidth,
  onPress,
}) => {
  return (
    <StyledTouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <StyledButton variant={variant} size={size} fullWidth={fullWidth}>
        <StyledText variant={textSize[size]} weight="bold" color="white">
          {title}
        </StyledText>
        <Icon icon={icon} color="white" />
      </StyledButton>
    </StyledTouchableOpacity>
  )
}

export default Button
