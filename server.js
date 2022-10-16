// set up your server code
// set express to a variable
// require our dependencies
const express = require("express")

// initalize the express app 
const app = express()

// define some routes and responses to those routes
app.get('/', function (req, res) {
    res.send('I am working')
})

// get route 
 app.get('/getroute', (req, res) => {
    res.send("Welcome to the Gitpub App!");
 })

 // tell express to listen for requests from the browser (client) 
 // make sure that this is located at bottom of code 
app.listen(3000, () => {
    console.log('listening');
})