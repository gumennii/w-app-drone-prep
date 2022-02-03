import React from 'react'
import {
  faClock,
  faQuestionCircle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons'

import { Container, Fab, Text, Space, Icon } from '../../components'
import { useNavigation, useQuestions } from '../../hooks'
import { getRandomQuestions } from '../../utils'

import {
  StyledHeader,
  StyledScrollView,
  StyledContent,
  StyledItem,
  StyledBullet,
  StyledCard,
  StyledCardItem,
  StyledCardMedia,
  StyledCardContent,
  StyledCardIconContainer,
} from './Styles'

const Examination = () => {
  const navigation = useNavigation()
  const { dispatch } = useQuestions()

  const handleStart = () => {
    const randomQuestions = getRandomQuestions(60)
    dispatch({ type: 'set_questions', payload: randomQuestions })

    navigation.navigate('Question', { countdown: true })
  }

  return (
    <Container>
      <StyledScrollView>
        <StyledHeader>
          <Text variant="h3" weight="bold" mb={2}>
            Practice FAA Test
          </Text>
          <Text variant="h5">
            This simulation just like the real FAA test with time limit time and
            questions.
          </Text>
        </StyledHeader>

        <StyledContent>
          <StyledItem>
            <StyledBullet />
            <Text>
              You must earn a score of 70% or higher to pass the FAA test.
            </Text>
          </StyledItem>
          <StyledItem>
            <StyledBullet />
            <Text>Carefully read the instructions given with the test.</Text>
          </StyledItem>
          <StyledItem>
            <StyledBullet />
            <Text>If a question is difficult, mark it and return later.</Text>
          </StyledItem>
          <StyledItem>
            <StyledBullet />
            <Text>
              When solving calculation problems, choose the answer that best
              matches your solution.
            </Text>
          </StyledItem>

          <Space size={4} />

          <StyledCard>
            <StyledCardItem>
              <StyledCardMedia>
                <StyledCardIconContainer>
                  <Icon icon={faCheckCircle} size={20} />
                </StyledCardIconContainer>
              </StyledCardMedia>
              <StyledCardContent>
                <Text variant="h5" weight="semiBold">
                  70% Passing Score
                </Text>
              </StyledCardContent>
            </StyledCardItem>

            <Space size={1} />

            <StyledCardItem>
              <StyledCardMedia>
                <StyledCardIconContainer>
                  <Icon icon={faQuestionCircle} size={20} />
                </StyledCardIconContainer>
              </StyledCardMedia>
              <StyledCardContent>
                <Text variant="h5" weight="semiBold">
                  60 multiple-choise questions
                </Text>
              </StyledCardContent>
            </StyledCardItem>

            <Space size={1} />

            <StyledCardItem>
              <StyledCardMedia>
                <StyledCardIconContainer>
                  <Icon icon={faClock} size={20} />
                </StyledCardIconContainer>
              </StyledCardMedia>
              <StyledCardContent>
                <Text variant="h5" weight="semiBold">
                  2 hours to complete
                </Text>
              </StyledCardContent>
            </StyledCardItem>
          </StyledCard>
        </StyledContent>
      </StyledScrollView>

      {true && <Fab title="Start Practice Exam" onPress={handleStart} />}
    </Container>
  )
}

export default Examination
