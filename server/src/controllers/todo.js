const Todo = require('../classes/todo')

// Create a new Todo document
module.exports.createTodo = async (req, res, next) => {
  const { title, description, content } = req.body

  try {
    const doc = await Todo.createtodo({
      title,
      description,
      content
    })

    return res.status(200).send(doc)
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

// Update an existing Todo document
module.exports.updateTodo = async (req, res, next) => {
  const { id, title, description, content } = req.body

  try {
    const doc = await Todo.updatetodo({
      id,
      title,
      description,
      content
    })

    if (doc === null || doc === undefined) {
      return res.status(500).send('Did not find a matching document.')
    }

    return res.status(200).send(doc)
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

// Delete a Todo document
module.exports.deleteTodo = async (req, res, next) => {
  const { id } = req.body

  try {
    const doc = await Todo.deletetodo(id)
    return res.status(200).send(doc)
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

// Fetch a Todo item by ID
module.exports.getTodo = async (req, res, next) => {
  const { id } = req.params

  try {
    const doc = await Todo.gettodo(id)

    if (doc === null || doc === undefined) {
      return res.status(500).send('Did not find a matching document.')
    }

    return res.status(200).send(doc)
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

// Fetch and list all available Todos
module.exports.listTodos = async (req, res, next) => {
  try {
    const todos = await Todo.listtodos()
    return res.status(200).send(todos)
  } catch (err) {
    return res.status(500).send(err.message)
  }
}
