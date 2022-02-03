import React, { FC } from 'react'
import { TouchableHighlight, TouchableHighlightProps } from 'react-native'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'

import Icon from '../Icon'
import Text from '../Text'
import theme from '../../theme'
import { Category as CategoryType } from '../../types'

import {
  StyledCategory,
  StyledCategoryMedia,
  StyledCategoryContent,
  StyledBadge,
  StyledBadgeText,
} from './Styles'

export type Props = CategoryType & TouchableHighlightProps

const Category: FC<Props> = ({ description, questions, selected, onPress }) => {
  const icon = selected ? faCheckSquare : faSquare
  const primaryColors = selected
    ? theme.color.common.white
    : theme.color.text.primary

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={theme.background.primary}
    >
      <StyledCategory selected={selected}>
        <StyledCategoryMedia>
          <Icon icon={icon} size={20} color={primaryColors} />
        </StyledCategoryMedia>
        <StyledCategoryContent>
          <Text variant="body2" color={primaryColors}>
            {description}
          </Text>
          <StyledBadge selected={selected}>
            <StyledBadgeText
              weight="bold"
              color="secondary"
              selected={selected}
            >
              {questions}
            </StyledBadgeText>
          </StyledBadge>
        </StyledCategoryContent>
      </StyledCategory>
    </TouchableHighlight>
  )
}

export default Category
