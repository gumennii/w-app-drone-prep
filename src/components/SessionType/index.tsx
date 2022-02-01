import React, { FC } from 'react'
import { TouchableHighlight, TouchableHighlightProps } from 'react-native'

import { Study as StudyType } from '../../types'
import Icon from '../Icon'
import Text from '../Text'
import theme from '../../theme'

import {
  StyledSessionType,
  StyledSessionTypeMedia,
  StyledSessionTypeContent,
  StyledIconContainer,
} from './Styles'

export type Props = StudyType & TouchableHighlightProps

const adjustIconSize = {
  flag: 16,
  dice: 22,
}

const SessionType: FC<Props> = ({
  title,
  description,
  icon,
  selected,
  onPress,
}) => {
  const { iconName } = icon

  const primaryColors = selected
    ? theme.color.common.white
    : theme.color.text.primary

  const secondaryColors = selected
    ? theme.color.common.white
    : theme.color.text.secondary

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={theme.background.primary}
    >
      <StyledSessionType selected={selected}>
        <StyledSessionTypeMedia>
          <StyledIconContainer selected={selected}>
            <Icon
              icon={icon}
              size={adjustIconSize[iconName] || 20}
              color={primaryColors}
            />
          </StyledIconContainer>
        </StyledSessionTypeMedia>
        <StyledSessionTypeContent>
          <Text variant="h4" weight="semiBold" mb={2} color={primaryColors}>
            {title}
          </Text>
          <Text variant="body2" color={secondaryColors}>
            {description}
          </Text>
        </StyledSessionTypeContent>
      </StyledSessionType>
    </TouchableHighlight>
  )
}

export default SessionType
