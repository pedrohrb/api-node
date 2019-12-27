const mongoose = require('mongoose')
require('../db')

module.exports = function newU(name,email,nickname){
    var nuser = mongoose.model('users')

    new nuser({
        name: name,
        email: email,
        nickname: nickname
    }).save().then(() => {
        console.log('User created!')
    })
}
