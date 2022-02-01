import React, { FC, useRef, useEffect } from 'react'
import { Animated } from 'react-native'

import Button, { Props as ButtonProps } from '../Button'
import { StyledView } from './Styles'

const Fab: FC<ButtonProps> = ({
  fullWidth = true,
  size = 'large',
  ...restProps
}) => {
  const translation = useRef(new Animated.Value(100)).current

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }, [])

  return (
    <Animated.View style={{ transform: [{ translateY: translation }] }}>
      <StyledView>
        <Button fullWidth={fullWidth} size={size} {...restProps} />
      </StyledView>
    </Animated.View>
  )
}

export default Fab
