const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

const postsRoutes = require('./routes/posts')

//Middlewares
app.use(cors())

//needed to get the data in json format.
app.use(bodyParser.json())

app.use('/posts', postsRoutes)

app.get('/', (req, res) => {
    res.send('Homepage')
})

mongoose.connect(process.env.DB_DETAILS, { useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Connected to DB')
})


app.listen(3000)