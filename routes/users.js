//this router is a mini application under the main application and can perform its own function
//every router here will have a /users preceding it,cause of the way we called our app.send in the main app
const express = require("express")
const router = express.Router()

const users = [
    {
        name: "Kyle"
    },
    {
        name: "Sally"
    }
]
router.param("id", (req,res,next,id) => {
    req.user = users[id]
    console.log(id)
    next() 
})

router.get("/", (req,res) => { 
    res.send("Users List")
})

router.get("/new",(req,res) => {
    res.send("User new Form")
})

router.post("/", (req,res) => {
    res.send("Create a new user") //create a new user
})

router
    .route("/:id")
    .get((req,res) => {
    console.log(req.user)
    res.send(`Get user with ID ${req.params.id}`)
})
    .put((req,res) => {
    res.send(`Update user with ID ${req.params.id}`)
})
    .delete((req,res) => {
    res.send(`Delete user with ID ${req.params.id}`)
})



module.exports = router //so that we can be able to use this file, you export it out