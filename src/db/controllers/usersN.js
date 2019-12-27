import mongoose from 'mongoose'
import { conn } from '../db'

export default function newU(name,email,nickname){
    var nuser = mongoose.model('users')

    new nuser({
        name: name,
        email: email,
        nickname: nickname
    }).save().then(() => {
        console.log('User created!')
    })
}
