const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb://localhost:27017/oministack', { useNewUrlParser: true })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(3333)
