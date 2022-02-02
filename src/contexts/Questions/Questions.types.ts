import { ReactNode } from 'react'

export type State = {
  selectedSessionType?: number
  selectedCategories?: number[]
  questions: string[]
  activeQuestionIndex: number
  activeQuestionCorrectAnswers: number
  activeQuestionIncorrectAnswers: number
}

export type Action =
  | { type: 'set_session_type'; payload: number }
  | { type: 'set_categories'; payload: number[] }
  | { type: 'set_active_question_index'; payload: number }
  | { type: 'set_active_question_correct_answers'; payload: number }
  | { type: 'set_active_question_incorrect_answers'; payload: number }
  | { type: 'set_questions'; payload: string[] }
  | { type: 'reset' }

export type Dispatch = (action: Action) => void

export type ProviderProps = {
  children: ReactNode
}

export type ContextProps = {
  state: State
  dispatch: Dispatch
}
