import React, { FC } from 'react'
import { StyledCard } from './Styles'

export type Props = {
  variant?: 'blue' | 'yellow'
}

const Card: FC<Props> = ({ children, variant = 'white' }) => {
  return <StyledCard variant={variant}>{children}</StyledCard>
}

export default Card
