import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Icon from '../Icon'
import { useNavigation } from '../../hooks'
import { StyledButton } from './Styles'

const Close: FC = () => {
  const navigation = useNavigation()

  const handleClose = () => {
    return navigation.navigate('Home')
  }

  return (
    <TouchableOpacity onPress={handleClose} activeOpacity={0.7}>
      <StyledButton>
        <Icon icon={faTimes} size={20} />
      </StyledButton>
    </TouchableOpacity>
  )
}

export default Close
