import Todo from './todo'

const TODO = new Todo()

const listTodos = TODO.listTodos.bind(TODO)
const getTodo = TODO.getTodo.bind(TODO)

export {
  listTodos,
  getTodo
}
