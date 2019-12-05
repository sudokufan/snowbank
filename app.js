const express = require('express')
const app = express()
const routes = require('./Config/routes')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

routes(app)

module.exports = app
