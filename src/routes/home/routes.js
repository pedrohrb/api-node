import express from 'express'
const home = express.Router()
import mongoose from 'mongoose'
import conn from '../../db/db'
import '../../db/models/user'

import newU from '../../db/controllers/usersN'

const Users = mongoose.model('users')

home.get('/',(req,res) => {
    res.json({ status: 'Ok' })
})
home.get('/users',async (req,res) => {
    const users = await Users.find()

    return res.json(users)
})
home.get('/oneuser/:id',async (req,res) => {
    const user = await Users.findById(req.params.id)

    return res.json(user)
})
home.post('/adduser',async (req,res) => {
    const adduser = await Users.create(req.body)

    return res.json(adduser)
})
home.get('/delete/:id',async (req,res) => {
    await Users.findByIdAndRemove(req.params.id)

    return res.json('User deleted')
})

export default home