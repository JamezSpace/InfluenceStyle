const mongoose = require('mongoose')

// defining the schema
const blog_schema = new mongoose.Schema({
    title : String,
    content : String,
    creation_date : {
        type : Date,
        default : () => Date.now()
    },
    updated_at : Date
})

// creating and linking to the model
const Blog = mongoose.model('blogs', blog_schema)

module.exports = Blog