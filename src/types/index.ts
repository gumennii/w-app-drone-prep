import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type User = {
  history: Session[]
}

export type Session = {
  startedAt: Date
  finishedAt: Date
  activeQuestionIndex: number
  activeQuestionAnswered: boolean
  questions: Question[]

  answers: {
    correct: number
    wrong: number
  }
}

export type Study = {
  title: string
  description: string
  icon: IconProp
  selected?: boolean
}

export type Question = {
  id: string
  group: number
  category: number
  question_text: string
  answers: Answer[]
}

export type Answer = {
  id: number
  correct: boolean
  answer_text: string
  explanation: string
}

export type Group = {
  id: number
  name: string
  description: string
}

export type Category = {
  id: number
  group: number
  description: string
  selected?: boolean
}
