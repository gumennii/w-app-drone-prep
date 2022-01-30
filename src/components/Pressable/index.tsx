import React from 'react'

import {
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native'

export type PressableProps = {
  style?: StyleProp<ViewStyle> // override to standard ViewStyle
  pressStyle?: ViewStyle // optional style object for when pressed
} & RNPressableProps

type MergePressableStylesFn = (
  style?: StyleProp<ViewStyle>,
  pressStyle?: ViewStyle
) => RNPressableProps['style']

const mergePressableStyles: MergePressableStylesFn = (style, pressStyle) => {
  if (!pressStyle) {
    return style
  }

  if (!style) {
    return ({ pressed }) => (pressed ? pressStyle : undefined)
  }

  return ({ pressed }) => (pressed ? [style, pressStyle] : style)
}

const Pressable: React.FC<PressableProps> = ({
  style,
  pressStyle,
  ...props
}) => <RNPressable style={mergePressableStyles(style, pressStyle)} {...props} />

export default Pressable
