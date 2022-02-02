import React, { FC } from 'react'
import { TouchableHighlight, TouchableHighlightProps } from 'react-native'

import Text from '../Text'
import theme from '../../theme'

import { StyledRandomCard, StyledRandomCardContent } from './Styles'

export type Props = {
  title: number
  selected: boolean
} & TouchableHighlightProps

const CardRandom: FC<Props> = ({ title, selected, onPress }) => {
  const primaryColors = selected
    ? theme.color.common.white
    : theme.color.text.primary

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={theme.background.primary}
    >
      <StyledRandomCard selected={selected}>
        <StyledRandomCardContent>
          <Text
            variant="h4"
            weight="semiBold"
            color={primaryColors}
            style={{ lineHeight: 25 }}
          >
            {title}
          </Text>
        </StyledRandomCardContent>
      </StyledRandomCard>
    </TouchableHighlight>
  )
}

export default CardRandom
