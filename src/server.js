const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
const home = require('./routes/home/routes')


require('./db/db')

//Models 

require('./db/models/user')

const teste = mongoose.model('users')

app.use('/site',home)



app.listen(process.env.PORT || 3000)