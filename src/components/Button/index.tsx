import React, { FC } from 'react'
import { TouchableHighlightProps } from 'react-native'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon'
import { StyledButton, StyledText } from './Styles'

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
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onPress={onPress}
    >
      <StyledText variant={textSize[size]} weight="bold" color="white">
        {title}
      </StyledText>
      <Icon icon={icon} color="white" />
    </StyledButton>
  )
}

export default Button
