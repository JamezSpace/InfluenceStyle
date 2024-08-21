const mongoose = require('mongoose')

const user_schema = mongoose.Schema({
    name: String,
    password: String,
    email: String,
    initated_on: {
        type: Date,
        default: () => Date.now()
    }
})

const User = new mongoose.model('user', user_schema)

module.exports = User