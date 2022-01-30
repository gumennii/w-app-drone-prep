import { ReactNode } from 'react'

export type State = {
  questions: any
  isSupportCenter: boolean
}

export type ProviderProps = {
  children: ReactNode
}

export type ContextProps = {
  state: State
}
