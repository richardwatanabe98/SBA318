const express = require("express");
const path = require('path');
const app = express();
const url = 'http://localhost:5000'
const userRouter = require('./routes/users')

// LISTEN

app.listen(5000, () => {
    console.log(`Server listening at: ${url}`)
})

// Middleware
app.use('/users', userRouter)
app.use(express.json())
app.all("/", (req, res) => {
    console.log("Here")
    res.render("index", { text: "World"})
})

app.get('/users', (req, res) => {
    res.send("User List")
})

app.get('/users/new', (req, res) => {
    res.send("User New Form")
})

// SET view engine
app.set('view engine', 'ejs')




