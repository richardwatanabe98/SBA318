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
app.use('users', userRouter)

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

// ROUTES
// Endpoint route
// app.route('/name_of_your_endpoint')
//     .all((req, res, next) => {
//     })

// GET Route
//     .get((req, res, next) => {

//     })

// // POST route
//     .post((req, res, next) => {

//     })

// // DELETE route
//     .delete((req, res, next) => {

//     })

// Error handling

// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(404)
//     res.json({error:`Resource not found. [US]`})

// })

