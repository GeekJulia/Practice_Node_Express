//this router is a mini application under the main application and can perform its own function
//every router here will have a /users preceding it,cause of the way we called our app.use in the main app
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
    console.log(req.query.name) //the name represents the name that was given in the searchbar as in name=Kyle
    res.send("Users List")
})

router.get("/new",(req,res) => {
    // res.send("User new Form")
    res.render("users/new", {firstName : "Test"})
})

router.post("/", (req,res) => { //this is the post request that goes to /users
    const isValid = false
    if(isValid){
        users.push({firstName : req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
        res.send("Welcome to our website")
    }
    else{
        console.log("Error")
        res.render("/users/new",{firstName: req.body.firstName}) //because it cant pass the name should still remain
    }
    // res.send("Hi")
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