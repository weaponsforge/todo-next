require('dotenv').config()
const mongoose = require('mongoose')
const db = mongoose.connection

if (db.readyState !== 1) {
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })

  db.on('error', console.error.bind(console, 'connection error: '))
  db.once('open', () => {
    console.log('connected to mongodb')
  })
}

module.exports = db
