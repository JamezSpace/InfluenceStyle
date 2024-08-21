const User = require('./model/user');

require('dotenv').config();

const express = require('express'),
    path = require("path"),
    router = express.Router(),
    basePath = path.resolve(__dirname),
    { connect_to_db, new_blog, all_blogs } = require('./model/operations')

const app = express()

app.use(router)
app.use(express.static("views"))
app.set('view engine', 'ejs')

app.listen(process.env.port, () => {
    console.log("Server running on port", process.env.port);
})

router.get('/', (req, res) => {
    res.render('index')
    // res.sendFile(path.join(basePath, "views/index.html"))
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/admin', (req, res) => {
    res.render('admin')
})

router.get('/admin/new-blog', (req, res) => {
    res.render('new-blog')
})

router.get('/blogs', connect_to_db, async (req, res) => {
    const blogs = await all_blogs()

    res.status(200).json({blogs : blogs})
})

// created admin user programmatically

// router.get('/users', connect_to_db, async (req, res) => {
//     try {
//         const admin = await User.create({ 
//             name: 'theishdeveloper',
//             password : 'test',
//             email : 'test'
//         })

//         console.log(admin);        
//     } catch (err) {
//         console.error(err)
//     }
// })