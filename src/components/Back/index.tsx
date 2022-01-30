import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import Icon from '../Icon'
import { useNavigation } from '../../hooks'
import { StyledButton } from './Styles'

const Back: FC = () => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
      <StyledButton>
        <Icon icon={faAngleLeft} size={24} />
      </StyledButton>
    </TouchableOpacity>
  )
}

export default Back
