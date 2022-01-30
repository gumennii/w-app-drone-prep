import React, { FC } from 'react'

import Button, { Props as ButtonProps } from '../Button'
import { StyledView } from './Styles'

const Fab: FC<ButtonProps> = ({
  fullWidth = true,
  size = 'large',
  ...restProps
}) => {
  return (
    <StyledView>
      <Button fullWidth={fullWidth} size={size} {...restProps} />
    </StyledView>
  )
}

export default Fab
