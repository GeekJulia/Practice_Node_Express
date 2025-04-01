const express = require('express') // require the express
const app = express() // we create an application to help us set up our entire server

app.set('view engine', 'ejs')
//to make it actually run
//the application is listening on port 3000 for a bunch of request
app.get("/",(req,res) =>{ //anytime they navigate to /
    console.log("Here")
    res.render("index")
})
app.listen(3000)