import React, { FC } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Props as FAProps } from '@fortawesome/react-native-fontawesome'

import { StyledIcon } from './Icon'

export type Props = {
  icon: IconProp
} & FAProps

const Icon: FC<Props> = ({ icon, ...restProps }) => {
  if (!icon) return null

  return <StyledIcon icon={icon} {...restProps} />
}

export default Icon
