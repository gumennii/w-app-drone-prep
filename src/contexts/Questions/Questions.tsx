import React, { FC, useContext, useState, createContext } from 'react'

import { ProviderProps, ContextProps } from './Questions.types'

const QuestionStateContext = createContext<ContextProps | undefined>(undefined)

// Provider
const QuestionsProvider: FC<ProviderProps> = ({ children }: ProviderProps) => {
  const [state] = useState()

  const value = { state }

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
