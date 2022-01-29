import React from 'react'

import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { useNavigation } from '../../hooks'
import { Button, Text, Card, Space } from '../../components'
import { StyledViewCards } from './Styles'

const Cards = () => {
  const navigation = useNavigation()

  return (
    <StyledViewCards>
      <Card variant="blue">
        <Text variant="h3" weight="bold" color="white" mb={2}>
          New Study Session
        </Text>
        <Text color="snow" mb={6}>
          Start preparing for your FAA knowledge test by creating custom study
          sessions and learning the questions.
        </Text>
        <Button
          title="Go to Session!"
          icon={faAngleRight}
          onPress={() => navigation.navigate('SessionTypes')}
        />
      </Card>
      <Space size={2} />
      <Card variant="yellow">
        <Text variant="h3" weight="bold" color="primary" mb={2}>
          FAA Practice Test
        </Text>
        <Text color="secondary" mb={6}>
          Use this mode to take a simulated exam, with the time limit and mix of
          questions just like the real FAA test.
        </Text>
        <Button
          title="Go to Practice Test"
          icon={faAngleRight}
          onPress={() => navigation.navigate('Examination')}
        />
      </Card>
    </StyledViewCards>
  )
}

export default Cards
