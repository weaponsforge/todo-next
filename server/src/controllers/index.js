const { Router } = require('express')
const router = new Router()

const Todo = require('./todo')

router.post('/todo', Todo.createTodo)
router.patch('/todo', Todo.updateTodo)
router.delete('/todo', Todo.deleteTodo)
router.get('/todo/:id', Todo.getTodo)
router.get('/todos', Todo.listTodos)

module.exports = router
