const mongoose = require('mongoose')
const Blog = require('./blog')

async function connect_to_db(req, res, next) {
    try {
        await mongoose.connect(process.env.conn_string)

        console.log('Connected to db successfully');        
    } catch (e) {
        console.log(e);
    }

    next()
}

async function new_blog(user_title, user_content) {
    try {
        await Blog.create({title : user_title, content : user_content,  })
    } catch(e) {
        console.error(e.mesage)
    }
}

async function all_blogs() {
    try{ 
        const blogs = await Blog.find()
        return blogs
    } catch(e) {
        console.log(e.message)
    }
}
module.exports = { connect_to_db, new_blog, all_blogs }