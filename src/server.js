import express from 'express'
import mongoose  from 'mongoose'
const app = express()
import cors from 'cors'
app.use(express.json())
app.use(cors())
import home from './routes/home/routes'

import conn from './db/db'

//Models 

import './db/models/user'


const teste = mongoose.model('users')

app.use('/site',home)



app.listen(process.env.PORT || 3000)