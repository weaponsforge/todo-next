const { Router } = require('express')
const router = new Router()

const Todo = require('./todo')

// Create a new Todo
router.post('/todo', Todo.createTodo)

// Update an existing Todo by ID
router.patch('/todo', Todo.updateTodo)

// Delete a Tod item by ID
router.delete('/todo/:id', Todo.deleteTodo)

// Retrieve the data of a Todo item
router.get('/todo/:id', Todo.getTodo)

// Retrive all Todo items
router.get('/todos', Todo.listTodos)

module.exports = router
