import mongoose from 'mongoose'
import { conn } from '../db'

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
    }
})

export default mongoose.model('users',UsersSchema)