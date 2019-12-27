const express = require('express')
const home = express.Router()
const mongoose = require('mongoose')
require('../../db/db')
require('../../db/models/user')

const newU = require('../../db/controllers/usersN')

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

module.exports = home