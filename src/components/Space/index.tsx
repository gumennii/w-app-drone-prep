import React, { FC } from 'react'
import { StyledView } from './Styles'

export type Props = {
  size: number
}

const Space: FC<Props> = ({ size }) => {
  return <StyledView size={size} />
}

export default Space
