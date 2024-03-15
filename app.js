const express = require("express");

const app = express();


const url = `http://localhost:3000/api`

// Middleware
// let Express know what kind of data to expect
app.use(express.json())

app.all("/", (req, res) => {
    res.status(403);
    res.json({error: `Public API endpoints are available at: ${url}`})
})

// ROUTES
// Endpoint route
app.route('/name_of_your_endpoint')
    .all((req, res, next) => {
    })

// GET Route
    .get((req, res, next) => {

    })

// POST route
    .post((req, res, next) => {

    })

// DELETE route
    .delete((req, res, next) => {

    })

// Error handling

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(404)
    res.json({error:`Resource not found. [US]`})

})

// GO / LISTEN

app.listen(3000, () => {
    console.log(`Server listening at: ${url}`)
})