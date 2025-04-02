//this router is a mini application under the main application and can perform its own function
const express = require("express")
const router = express.Router()

router.get("/", (req,res) => { //we can next routes inside of a parent component where no matter it will always start with /users
    res.send("Users List")
})

router.get("/new",(req,res) => {
    res.send("User new Form")
})

module.exports = router