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

// set up your database 

const drinks = require('./models/drinks')
const foods = require('./models/foods')
    

// get route 
 app.get('/getroute', (req, res) => {
    res.send("it works!");
 })

 // index route 
 app.get('/drinks', (req, res) => {
    res.render('drinksindex.ejs', {
        drinks: drinks,
    });
 })
 app.get('/foods', (req, res) => {
    res.render('foodsindex.ejs', {
        foods: foods,
    })
 })

 // show route 
 app.get('/drinks/:id', (req, res) => {
    // res.send(req.params.id)
    res.render('drinksshow.ejs', {
        drinks: drinks[req.params.id],
    });
 })
 app.get('/foods/:id', (req, res) => {
    res.render('foodshow.ejs', {
        foods: foods[req.params.id], 
    })
 })


 // tell express to listen for requests from the browser (client) 
 // make sure that this is located at bottom of code 
app.listen(3000, () => {
    console.log('your server is running');
})