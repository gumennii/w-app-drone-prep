import { data } from './data_questions'

const question = {}
const question_set = new Set()

data.forEach(item => {
  if (!item.remote_pilot_sb_test) return

  const { id, question_text, answers } = item
  const group = item.code_lookup.categoryGroup.id
  const category = item.code_lookup.id

  const answers_result = answers.map(answer => {
    const { id, answer_text, correct, explanation } = answer
    return {
      id,
      answer_text,
      correct,
      explanation,
    }
  })

  question[id] = {
    id,
    question_text,
    group,
    category,
    answers: answers_result,
  }

  question_set.add(id)
})

console.log('Question', question)
console.log('Questions array: ', [...question_set])
console.log('Questions length: ', [...question_set].length)
