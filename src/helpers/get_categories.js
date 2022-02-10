import { data } from './data_categories'

const category = {}
const categories = new Set()

data.forEach(item => {
  const { id, description } = item[0]
  const group = item[0].categoryGroup.id

  category[id] = {
    id,
    description,
    group,
    questions: item[1],
  }
  categories.add(id)
})

console.log('Category: ', category)
console.log('Categories array: ', [...categories])
