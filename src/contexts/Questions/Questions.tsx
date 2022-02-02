import React, { FC, useContext, createContext, useReducer } from 'react'

import { ProviderProps, ContextProps, State, Action } from './Questions.types'
import { question_db } from '../../data'

const QuestionStateContext = createContext<ContextProps | undefined>(undefined)

const initialState: State = {
  selectedSessionType: undefined,
  selectedCategories: [],
  questions: [],
  activeQuestionIndex: 0,
}

// Reset State
const resetState = (initialState: State) => {
  return initialState
}

const filterQuestions = selectedCategories => {
  return Object.keys(question_db).filter(id =>
    selectedCategories.includes(question_db[id].category)
  )
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
    case 'set_questions': {
      const filteredQuestions = filterQuestions(state.selectedCategories)
      return { ...state, questions: filteredQuestions }
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
