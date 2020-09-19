const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', indexRouter)

mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
    console.log('connected')
})

app.listen(3000)