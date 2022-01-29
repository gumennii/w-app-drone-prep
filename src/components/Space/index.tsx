import React, { FC } from 'react'
import { StyledView } from './Space'

export type Props = {
  size: number
}

const Space: FC<Props> = ({ size }) => {
  return <StyledView size={size} />
}

export default Space
