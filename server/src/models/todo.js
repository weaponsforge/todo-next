const mongoose = require('mongoose')
const { Schema } = mongoose

const TodoSchema = new Schema({
  title: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  content: {
    required: true,
    type: String
  }
},
{
  timestamps: true
})

TodoSchema.methods.sayhello = () => {
  console.log('hello!')
}

module.exports = mongoose.model('Todo', TodoSchema)
