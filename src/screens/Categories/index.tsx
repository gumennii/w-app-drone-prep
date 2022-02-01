import React from 'react'
import { View } from 'react-native'

import { useNavigation, useQuestions } from '../../hooks'
import { Text, Container, Category, Fab, Space } from '../../components'
import { category_db, categories_ids } from '../../data'

import { StyledHeader, StyledScrollView } from './Styles'

const Categories = () => {
  const navigation = useNavigation()

  const { state, dispatch } = useQuestions()
  const { selectedCategories } = state

  const handleSelected = (id: number) => {
    if (selectedCategories.includes(id)) {
      const filtered = selectedCategories.filter(el => el !== id)
      dispatch({ type: 'set_categories', payload: filtered })
    } else {
      dispatch({ type: 'set_categories', payload: [...selectedCategories, id] })
    }
  }

  const handleContinue = () => {
    dispatch({ type: 'set_questions' })
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

        {categories_ids.map(item => {
          const { id, description, group } = category_db[item]
          return (
            <View key={id}>
              <Category
                id={id}
                group={group}
                description={description}
                selected={selectedCategories.includes(id)}
                onPress={() => handleSelected(id)}
              />
              <Space size={1} />
            </View>
          )
        })}
      </StyledScrollView>

      {selectedCategories.length > 0 && (
        <Fab title="Continue" onPress={() => handleContinue()} />
      )}
    </Container>
  )
}

export default Categories
