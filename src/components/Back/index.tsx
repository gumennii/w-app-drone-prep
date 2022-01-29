import React, { FC } from 'react'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import { useNavigation } from '../../hooks'
import { StyledButton, StyledIcon } from './Styles'

const Back: FC = () => {
  const navigation = useNavigation()

  return (
    <StyledButton onPress={() => navigation.goBack()}>
      <StyledIcon icon={faAngleLeft} size={24} />
    </StyledButton>
  )
}

export default Back
