const TodoSchema = require('../../models/todo')

// Javascript client wrapper for the Todo mongoose Schema
class Todo {
  /**
   * Create and save a new Todo item to mongodb
   * @param {Object} params - Todo item fields and values
   * @param {String} params.title - Todo title
   * @param {String} params.description - Todo description
   * @param {String} params.content - Todo text content
   * @returns {Object} Todo
   */
  async createtodo (params) {
    const { title, description, content } = params

    try {
      const todo = new TodoSchema({
        title,
        description,
        content
      })

      return await todo.save()
    } catch (err) {
      throw new Error(err.message)
    }
  }

  /**
   * Update an existing Todo item and save updates to mongodb
   * @param {String} id - Todo item ID
   * @returns {Object} Updated Todo
   */
  async updatetodo (params) {
    const keys = ['id', 'title', 'description', 'content']

    const data = keys.reduce((acc, item) => {
      if (params[item] !== undefined) {
        acc[item] = params[item]
      }

      return acc
    }, {})

    try {
      const result = await TodoSchema.findOneAndUpdate(
        { _id: data.id },
        data,
        { returnOriginal: false }
      )

      return result
    } catch (err) {
      throw new Error(err.message)
    }
  }

  /**
   * Delete a Todo item from mongodb
   * @param {String} id - Todo item ID
   * @returns {Object} deleted Todo item
   */
  async deletetodo (id) {
    try {
      return await TodoSchema.findByIdAndDelete(id)
    } catch (err) {
      throw new Error(err.message)
    }
  }

  /**
   * Retrieve a Todo item from mongodb
   * @param {String} id - Todo item ID
   * @returns {Object} Todo item
   */
  async gettodo (id) {
    try {
      return await TodoSchema.findById(id)
    } catch (err) {
      throw new Error(err.message)
    }
  }

  /**
   * Retrieve all Todos from mongodb
   * @returns {Object[]} Todo items
   */
  async listtodos () {
    // return await TodoSchema.find()
    return TodoSchema.find()
  }
}

module.exports = Todo
