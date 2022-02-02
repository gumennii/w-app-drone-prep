import { sampleSize } from 'lodash'
import { question_db, questions_ids } from '../data'

export const getFilteredQuestions = (selectedCategories: number[]) => {
  return Object.keys(question_db).filter(id =>
    selectedCategories.includes(question_db[id].category)
  )
}

export const getRandomQuestions = (n: number) => {
  return sampleSize(questions_ids, n)
}
