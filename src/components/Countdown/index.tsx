import React, { FC, useEffect, useState } from 'react'
import { faClock } from '@fortawesome/free-solid-svg-icons'

import Text from '../Text'
import Icon from '../Icon'
import { StyledView } from './Styles'

const Countdown: FC = () => {
  const [[hrs, mins, secs], setTime] = useState([2, 0, 0])

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) reset()
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59])
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59])
    } else {
      setTime([hrs, mins, secs - 1])
    }
  }

  const reset = () => {
    return setTime([parseInt(hrs), parseInt(mins), parseInt(secs)])
  }

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000)
    return () => clearInterval(timerId)
  })

  return (
    <StyledView>
      <Icon icon={faClock} style={{ marginRight: 5 }} />
      <Text variant="caption" weight="semiBold">{`${hrs
        .toString()
        .padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs
        .toString()
        .padStart(2, '0')}`}</Text>
    </StyledView>
  )
}

export default Countdown
