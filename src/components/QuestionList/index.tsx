import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'

import { useNavigation } from '../../hooks'

import Icon from '../Icon'
import { StyledButton } from './Styles'

const QuestionList: FC = () => {
  const navigate = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => navigate.navigate('Questions')}
      activeOpacity={0.7}
    >
      <StyledButton>
        <Icon icon={faClipboardList} size={16} />
      </StyledButton>
    </TouchableOpacity>
  )
}

export default QuestionList
