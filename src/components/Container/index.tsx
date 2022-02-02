import React, { FC } from 'react'
import { ImageBackground } from 'react-native'

import { StyledView } from './Styles'
import image from '../../assets/images/bg-drone.png'

const Container: FC = ({ children }) => {
  return (
    <StyledView>
      {/* <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}> */}
      {children}
      {/* </ImageBackground> */}
    </StyledView>
  )
}

export default Container
