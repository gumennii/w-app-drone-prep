import React, { FC, useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

import { useQuestions } from '../../hooks'
import {
  getStorageData,
  addStorageArrayValue,
  removeStorageArrayValue,
  KEY_APP_ANSWERS_MARKED,
} from '../../storage'
import { question_db } from '../../data'

import Icon from '../Icon'
import { StyledButton } from './Styles'
import theme from '../../theme'

const Flag: FC = () => {
  const { state } = useQuestions()
  const [isMarked, setIsMarked] = useState<boolean>()

  const { questions, activeQuestionIndex } = state
  const question = question_db[questions[activeQuestionIndex]]

  const isQuestionMarked = async () => {
    const markedQuestionsIds = await getStorageData(KEY_APP_ANSWERS_MARKED)

    if (markedQuestionsIds) {
      const isQuestionMarked = markedQuestionsIds.includes(String(question.id))
      setIsMarked(isQuestionMarked)
    }
  }

  const handleFlag = async () => {
    setIsMarked(!isMarked)
    isMarked
      ? removeStorageArrayValue(KEY_APP_ANSWERS_MARKED, String(question.id))
      : addStorageArrayValue(KEY_APP_ANSWERS_MARKED, String(question.id))
  }

  useEffect(() => {
    isQuestionMarked()
  }, [question])

  return (
    <TouchableOpacity onPress={handleFlag} activeOpacity={0.7}>
      <StyledButton>
        <Icon
          icon={faFlag}
          size={16}
          color={isMarked ? theme.color.blue.main : theme.color.primary.main}
        />
      </StyledButton>
    </TouchableOpacity>
  )
}

export default Flag
