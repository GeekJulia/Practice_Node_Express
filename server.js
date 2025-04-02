const express = require('express') // require the express
const app = express() // we create an application to help us set up our entire server

app.set('view engine', 'ejs')

app.get("/",(req,res) =>{ //anytime they navigate to /
    console.log("Here")
    res.render("index", {text : "World"})
})
const userRouter = require ("./routes/users") 
app.use("/users",userRouter)  //anything that starts with /users add all the different routes in the userRouter to it
app.listen(3000, () => {console.log("Server listening on port 3000")}) 