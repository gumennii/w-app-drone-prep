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
  StyledBadge,
  StyledBadgeText,
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
  disabled,
  questions,
  onPress,
}) => {
  const { iconName } = icon

  const getPrimaryStyles = () => {
    if (selected) return theme.color.common.white
    if (disabled) return theme.color.text.secondary

    return theme.color.text.primary
  }

  const getSecondaryStyles = () => {
    if (selected) return theme.color.common.white
    if (disabled) return theme.color.text.secondary

    return theme.color.text.secondary
  }

  const handleOnPress = () => {
    if (disabled) return

    return onPress(null)
  }

  return (
    <TouchableHighlight
      onPress={handleOnPress}
      underlayColor={theme.background.primary}
    >
      <StyledSessionType selected={selected} disabled={disabled}>
        <StyledSessionTypeMedia>
          <StyledIconContainer selected={selected} disabled={disabled}>
            <Icon
              icon={icon}
              size={adjustIconSize[iconName] || 20}
              color={getPrimaryStyles()}
            />
            {questions > 0 && (
              <StyledBadge selected={selected}>
                <StyledBadgeText
                  weight="bold"
                  color="secondary"
                  selected={selected}
                >
                  {questions}
                </StyledBadgeText>
              </StyledBadge>
            )}
          </StyledIconContainer>
        </StyledSessionTypeMedia>
        <StyledSessionTypeContent>
          <Text
            variant="h4"
            weight="semiBold"
            mb={2}
            color={getPrimaryStyles()}
          >
            {title}
          </Text>
          <Text variant="body2" color={getSecondaryStyles()}>
            {description}
          </Text>
        </StyledSessionTypeContent>
      </StyledSessionType>
    </TouchableHighlight>
  )
}

export default SessionType
