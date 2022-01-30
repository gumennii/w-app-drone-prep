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

export type Category = {
  id: string
  title: string
  description: string
  topic: string
}

export type Question = {
  id: string
  category: Category
  text: string
  description: string
  options: QuestionOption[]
}

export type QuestionOption = {
  isCorrect?: boolean
  isSelected?: boolean
  value: string
  text: string
}
