const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
})

const Users = module.exports = mongoose.model('user',UserSchema)