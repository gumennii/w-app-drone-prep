import React, { FC } from 'react'
import { TextProps } from 'react-native'

import { StyledText } from './Styles'

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'caption'
type Weight = 'regular' | 'medium' | 'semiBold' | 'bold'
type Color = 'primary' | 'secondary' | 'yellow' | 'blue' | 'white' | string

export type Props = {
  variant?: Variant
  weight?: Weight
  color?: Color
  mb?: number // Margin Bottom
} & TextProps

const Text: FC<Props> = ({
  variant = 'body1',
  weight = 'regular',
  color = 'primary',
  ...restProps
}) => {
  return (
    <StyledText
      variant={variant}
      weight={weight}
      color={color}
      {...restProps}
    />
  )
}

export default Text
