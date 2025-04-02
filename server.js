const express = require('express') // require the express
const app = express() // we create an application to help us set up our entire server

app.set('view engine', 'ejs')

app.get("/",(req,res) =>{ //anytime they navigate to /
    console.log("Here")
    res.render("index", {text : "World"})
})
const userRouter = require ("./routes/user") 
app.use("/users",userRouter) 
app.listen(3000) 