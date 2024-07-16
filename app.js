require('dotenv').config();

const express = require('express'),
    path = require("path"),
    router = express.Router(),
    basePath = path.resolve(__dirname)

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