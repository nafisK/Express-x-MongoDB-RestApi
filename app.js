const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors)
const mongoose = require('mongoose')
require('dotenv/config')

// Imported Routes
const postsRoute = require('./routes/posts.js')

app.use('/posts', postsRoute)

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Connect to MongoDB
mongoose.connect(
  process.env.DB_CONNECTION_INITIAL +
    process.env.DB_USER +
    ':' +
    process.env.DB_PASSWORD +
    process.env.DB_CONNECTION_END,
  () => {
    console.log('Connected to MongoDB!')
  }
)

PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
