const express = require("express");
const app = express();
const url = 'http://localhost:5000'

// LISTEN

app.listen(5000, () => {
    console.log(`Server listening at: ${url}`)
})

// Middleware
app.use(express.json())

app.all("/", (req, res) => {
    res.send('RESTful API Assignment')
})

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

