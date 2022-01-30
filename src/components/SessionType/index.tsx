import React, { FC } from 'react'
import { TouchableHighlight } from 'react-native'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon'

import Text from '../Text'
import {
  StyledSessionType,
  StyledSessionTypeMedia,
  StyledSessionTypeContent,
  StyledIconContainer,
} from './Styles'
import theme from '../../theme'

export type Props = {
  title: string
  description: string
  icon: IconProp
  selected?: boolean
}

const adjustIconSize = {
  flag: 16,
  dice: 22,
}

const SessionType: FC<Props> = ({ title, description, icon, selected }) => {
  const { iconName } = icon

  const primaryColors = selected
    ? theme.color.common.white
    : theme.color.text.primary

  const secondaryColors = selected
    ? theme.color.common.white
    : theme.color.text.secondary

  return (
    <TouchableHighlight
      onPress={() => alert('Pressed!')}
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
