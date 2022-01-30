import React from 'react'
import { ScrollView } from 'react-native'

import { useNavigation } from '../../hooks'
import { Text, Container, Category, Fab } from '../../components'
import { category_db, categories_ids } from '../../data'

import {
  StyledHeader,
  StyledCategories,
  StyledCategoryContainer,
} from './Styles'

const Categories = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <ScrollView>
        <StyledHeader>
          <Text variant="h3" weight="bold">
            Select specific categories to study and review
          </Text>
        </StyledHeader>
        <StyledCategories>
          {categories_ids.map(id => {
            return (
              <StyledCategoryContainer key={category_db[id].id}>
                <Category title={category_db[id].description} />
              </StyledCategoryContainer>
            )
          })}
        </StyledCategories>
      </ScrollView>

      <Fab title="Continue" onPress={() => navigation.navigate('Question')} />
    </Container>
  )
}

export default Categories
