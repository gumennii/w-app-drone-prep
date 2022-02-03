import React from 'react'
import * as Haptics from 'expo-haptics'
import { View } from 'react-native'

import { useNavigation, useQuestions } from '../../hooks'
import { Text, Container, Category, Fab, Space } from '../../components'
import { category_db, categories_ids } from '../../data'
import { setStorageObjectData } from '../../storage'
import { getFilteredQuestions } from '../../utils'

import { StyledHeader, StyledScrollView, StyledCategories } from './Styles'

const Categories = () => {
  const navigation = useNavigation()

  const { state, dispatch } = useQuestions()
  const { selectedCategories } = state

  const handleSelected = (id: number) => {
    Haptics.selectionAsync()
    if (selectedCategories.includes(id)) {
      const filtered = selectedCategories.filter(el => el !== id)
      dispatch({ type: 'set_categories', payload: filtered })
    } else {
      dispatch({ type: 'set_categories', payload: [...selectedCategories, id] })
    }
  }

  const handleContinue = () => {
    const filteredQuestions = getFilteredQuestions(selectedCategories)
    dispatch({ type: 'set_questions', payload: filteredQuestions })
    setStorageObjectData('questions', filteredQuestions)

    navigation.navigate('Question')
  }

  return (
    <Container>
      <StyledScrollView>
        <StyledHeader>
          <Text variant="h3" weight="bold">
            Select specific categories to study and review
          </Text>
        </StyledHeader>

        <StyledCategories>
          {categories_ids.map(item => {
            const { id, description, questions, group } = category_db[item]
            return (
              <View key={id}>
                <Category
                  id={id}
                  group={group}
                  description={description}
                  questions={questions}
                  selected={selectedCategories.includes(id)}
                  onPress={() => handleSelected(id)}
                />
                <Space size={1} />
              </View>
            )
          })}
        </StyledCategories>
      </StyledScrollView>

      {selectedCategories.length > 0 && (
        <Fab title="Continue" onPress={() => handleContinue()} />
      )}
    </Container>
  )
}

export default Categories
