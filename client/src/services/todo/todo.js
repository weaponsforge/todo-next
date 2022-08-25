import axios from 'axios'

class Todo {
  constructor () {
    this.BASE_API_URL = process.env.BASE_API_URL
  }

  async listTodos () {
    const result = await axios.get(`${this.BASE_API_URL}/todos`)
    return result.data
  }

  async getTodo (id) {
    const result = await axios.get(`${this.BASE_API_URL}/todo/${id}`)
    return result.data
  }

  async createTodo (todo) {
    const result = await axios({
      data: todo,
      url: `${this.BASE_API_URL}/todo`,
      method: 'POST'
    })

    return result.data
  }
}

export default Todo
