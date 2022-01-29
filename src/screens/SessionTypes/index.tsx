import React from 'react'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faBomb } from '@fortawesome/free-solid-svg-icons'

import { Button, Text, Container, SessionType, Space } from '../../components'

import { useNavigation } from '../../hooks'
import { StyledHeader, StyledCategories, StyledActions } from './Styles'

const SessionTypes = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <StyledHeader>
        <Text variant="h3" weight="bold">
          What type of session would you like to start?
        </Text>
      </StyledHeader>
      <StyledCategories>
        <SessionType
          title="Specific Categories"
          description="Create a custom session by selecting specific categories of questions to study."
          icon={faClipboardList}
          selected={true}
        />
        <Space size={2} />
        <SessionType
          title="Random Questions"
          description="Creates a new study session from a random selection of questions."
          icon={faDice}
        />
        <Space size={2} />
        <SessionType
          title="Marked Questions"
          description="Creates a new study session from questions that have been previously marked in either a study or test session."
          icon={faFlag}
        />
        <Space size={2} />
        <SessionType
          title="Questions Answered Wrong"
          description="Creates a new study session from questions that have been previously marked in either a study or test session."
          icon={faBomb}
        />
      </StyledCategories>

      <StyledActions>
        <Button
          title="Continue"
          size="large"
          fullWidth
          onPress={() => navigation.navigate('Categories')}
        />
      </StyledActions>
    </Container>
  )
}

export default SessionTypes
