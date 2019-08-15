let express = require('express')
let app = express()
let massive = require('massive')
require('dotenv').config()

let { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env

app.use(express.json())

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))