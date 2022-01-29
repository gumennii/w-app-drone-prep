import React, { FC } from 'react'
import { StyledView } from './Styles'

const Container: FC = ({ children }) => {
  return <StyledView>{children}</StyledView>
}

export default Container
