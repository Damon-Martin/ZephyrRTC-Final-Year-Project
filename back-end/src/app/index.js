// This is micro-service is for passing chats, friend lists all as json. It's rendered on the next js server side.

const express = require('express')
const app = express()
const port = 3000

app.get('/api/v1', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Running on localhost:${port}`)
})