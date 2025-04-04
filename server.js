const express = require('express') // require the express
const app = express() // we create an application to help us set up our entire server

app.set('view engine', 'ejs')
app.use(express.static("public")) 
app.use(express.urlencoded({extended : true}))
app.use(express.json())
//testing
const userRouter = require ("./routes/users") 

app.use("/users",userRouter)  //anything that starts with /users add all the different routes in the userRouter to it

function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000, () => {console.log("Server listening on port 3000")}) 