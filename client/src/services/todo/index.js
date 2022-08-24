import Todo from './todo'

const TODO = new Todo()

const listTodos = TODO.listTodos.bind(TODO)

export {
  listTodos
}
