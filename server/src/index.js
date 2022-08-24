require('dotenv').config()
require('./utils/db')

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
const PORT = process.env.PORT || 3001

const { corsOptions } = require('./utils/cors_options')
const controllers = require('./controllers')

// Initialize the express app
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

if (process.env.ALLOW_CORS === '1') {
  app.use(cors(corsOptions))
}

app.use('/api', controllers)

app.get('*', (req, res) => {
  return res.status(200).send('Welcome to the Todo API')
})

app.use((err, req, res, next) => {
  return res.status(500).send(err.message)
})

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})
