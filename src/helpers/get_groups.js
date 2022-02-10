import { data } from './data_categories'

const group = {}
const groups = new Set()

data.forEach(item => {
  const { id, name } = item[0].categoryGroup
  const { description } = item[0]

  group[id] = {
    id,
    name,
    description,
  }

  groups.add(id)
})

console.log('Groups: ', group)
console.log('Groups array: ', [...groups])
