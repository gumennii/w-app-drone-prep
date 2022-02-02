import React, { useEffect, useState } from 'react'
import * as Haptics from 'expo-haptics'

import { useNavigation, useQuestions } from '../../hooks'
import { Text, Container, Fab, CardRandom } from '../../components'
import {
  getStorageSingleValue,
  setStorageSingleValue,
  KEY_APP_RANDOM_NUMBER,
} from '../../storage'
import { getRandomQuestions } from '../../utils'

import {
  StyledHeader,
  StyledScrollView,
  StyledCards,
  CardColumn,
} from './Styles'

const randomValues = [
  1, 2, 3, 5, 7, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100,
]

const Random = () => {
  const navigation = useNavigation()
  const { dispatch } = useQuestions()
  const [selected, setSelected] = useState<number>()

  const handleSelected = (value: number) => {
    Haptics.selectionAsync()
    setStorageSingleValue(KEY_APP_RANDOM_NUMBER, String(value))
    setSelected(value)
  }

  const handleContinue = () => {
    const randomQuestions = getRandomQuestions(selected)
    dispatch({ type: 'set_questions', payload: randomQuestions })

    navigation.navigate('Question')
  }

  const getStorage = async () => {
    const randomNumber = await getStorageSingleValue(KEY_APP_RANDOM_NUMBER)

    setSelected(Number(randomNumber))
  }

  useEffect(() => {
    getStorage()
  }, [])

  return (
    <Container>
      <StyledScrollView>
        <StyledHeader>
          <Text variant="h3" weight="bold">
            How many questions you want to study?
          </Text>
        </StyledHeader>

        <StyledCards>
          {randomValues.map(value => {
            return (
              <CardColumn key={value}>
                <CardRandom
                  title={value}
                  onPress={() => handleSelected(value)}
                  selected={selected === value}
                />
              </CardColumn>
            )
          })}
        </StyledCards>
      </StyledScrollView>

      {selected > 0 && (
        <Fab title="Continue" onPress={() => handleContinue()} />
      )}
    </Container>
  )
}

export default Random
