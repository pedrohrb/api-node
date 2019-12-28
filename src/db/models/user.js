const mongoose = require('mongoose')
require('../db')

const UsersSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    nickname: {
        type: String,
        require: true
    },
    postTitle: {
        type: String,
        require: true
    },
    post: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('users',UsersSchema)