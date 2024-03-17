const express = require("express")
const router = express.Router()
module.exports = router

router.get("/", (req, res) => {
    res.send("User List")
})

router.get("/users/new", (req, res) => {
    res.send("User New Form")
})