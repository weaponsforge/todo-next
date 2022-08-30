require('dotenv').config()
require('./utils/db')

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const rateLimit = require('express-rate-limit')
const app = express()
const PORT = process.env.PORT || 3001

const { corsOptions } = require('./utils/cors_options')
const controllers = require('./controllers')

const limiter = rateLimit({
  windowMs: process.env.API_WINDOW_MS_MINUTES * 60 * 1000, // in minutes
  max: process.env.API_RATE_LIMIT, // limit each IP to API_RATE_LIMIT requests per windowMs
  message: 'Too many requests from this IP. Please try again after 15 minutes.'
})

// Initialize the express app
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

if (process.env.ALLOW_CORS === '1') {
  app.use(cors(corsOptions))
}

app.use('/api', limiter, controllers)

app.get('*', (req, res) => {
  return res.status(200).send('Welcome to the Todo API')
})

app.use((err, req, res, next) => {
  return res.status(500).send(err.message)
})

if (process.env.DEPLOYMENT_PLATFORM !== 'vercel') {
  app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
  })
}

module.exports = app
