const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb://localhost:27017/oministack', { useNewUrlParser: true })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use(routes)

app.listen(3333)
