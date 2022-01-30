import React, { FC } from 'react'
import { TouchableHighlight, TouchableHighlightProps } from 'react-native'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'

import Icon from '../Icon'

import Text from '../Text'
import {
  StyledCategory,
  StyledCategoryMedia,
  StyledCategoryContent,
} from './Styles'
import theme from '../../theme'

export type Props = {
  title: string
  selected?: boolean
} & TouchableHighlightProps

const Category: FC<Props> = ({ title, selected }) => {
  const icon = selected ? faCheckSquare : faSquare
  const primaryColors = selected
    ? theme.color.common.white
    : theme.color.text.primary

  return (
    <TouchableHighlight
      onPress={() => alert('Pressed!')}
      underlayColor={theme.background.primary}
    >
      <StyledCategory selected={selected}>
        <StyledCategoryMedia>
          <Icon icon={icon} size={20} color={primaryColors} />
        </StyledCategoryMedia>
        <StyledCategoryContent>
          <Text variant="body2" color={primaryColors}>
            {title}
          </Text>
        </StyledCategoryContent>
      </StyledCategory>
    </TouchableHighlight>
  )
}

export default Category
