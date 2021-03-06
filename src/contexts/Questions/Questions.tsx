import React, { FC, useContext, createContext, useReducer } from 'react'

import { ProviderProps, ContextProps, State, Action } from './Questions.types'

const QuestionStateContext = createContext<ContextProps | undefined>(undefined)

const initialState: State = {
  selectedSessionType: undefined,
  selectedCategories: [],
  questions: [],
  activeQuestionIndex: 0,
  activeQuestionCorrectAnswers: 0,
  activeQuestionIncorrectAnswers: 0,
}

// Reset State
const resetState = (initialState: State) => {
  return initialState
}

// Reducer
const questionsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'set_session_type': {
      return { ...state, selectedSessionType: action.payload }
    }
    case 'set_categories': {
      return { ...state, selectedCategories: action.payload }
    }
    case 'set_active_question_index': {
      return { ...state, activeQuestionIndex: action.payload }
    }
    case 'set_active_question_correct_answers': {
      return { ...state, activeQuestionCorrectAnswers: action.payload }
    }
    case 'set_active_question_incorrect_answers': {
      return { ...state, activeQuestionIncorrectAnswers: action.payload }
    }
    case 'set_questions': {
      return { ...state, questions: action.payload }
    }
    case 'reset': {
      return resetState(initialState)
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`)
    }
  }
}

// Provider
const QuestionsProvider: FC<ProviderProps> = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(
    questionsReducer,
    initialState,
    resetState
  )
  const value = { state, dispatch }

  return (
    <QuestionStateContext.Provider value={value}>
      {children}
    </QuestionStateContext.Provider>
  )
}

// Hook
const useQuestions = (): ContextProps => {
  const context = useContext(QuestionStateContext)

  if (context === undefined) {
    throw new Error('useQuestions must be used within a Question')
  }
  return context
}

export { QuestionsProvider, useQuestions }
