import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

import Icon from '../Icon'
import { useNavigation } from '../../hooks'
import { StyledButton } from './Styles'

const Flag: FC = () => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
      <StyledButton>
        <Icon icon={faFlag} size={18} />
      </StyledButton>
    </TouchableOpacity>
  )
}

export default Flag
