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
  questionsAmount: number
}

export type Topic = {
  id: string
  title: string
  description: string
  questionsAmount: number
}

export type Question = {
  id: string
  category: Category
  topic: Topic
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
