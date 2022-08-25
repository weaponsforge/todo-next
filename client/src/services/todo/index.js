import Todo from './todo'

const TODO = new Todo()

const listTodos = TODO.listTodos.bind(TODO)
const getTodo = TODO.getTodo.bind(TODO)
const createTodo = TODO.createTodo.bind(TODO)
const deleteTodo = TODO.deleteTodo.bind(TODO)

export {
  listTodos,
  getTodo,
  createTodo,
  deleteTodo
}
