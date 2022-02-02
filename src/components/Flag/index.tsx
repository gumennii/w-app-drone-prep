import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

import Icon from '../Icon'
import { useNavigation } from '../../hooks'
import { StyledButton } from './Styles'

const Flag: FC = () => {
  const navigation = useNavigation()

  const handleFlag = () => {
    return navigation.goBack()
  }

  return (
    <TouchableOpacity onPress={handleFlag} activeOpacity={0.7}>
      <StyledButton>
        <Icon icon={faFlag} size={16} />
      </StyledButton>
    </TouchableOpacity>
  )
}

export default Flag
