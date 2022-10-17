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

const drinks = [
    {
      name: 'cruddy mary',
      price: 132,
      image: 'https://i.imgur.com/Va5iIw5.jpg',
    },
    {
      name: 'index on the beach',
      price: 68,
      image: 'https://i.imgur.com/XV2aPa2.jpg',
    },
    {
      name: 'hack & coke',
      price: 1,
      image: 'https://i.imgur.com/rLOXFRI.jpg',
    },
    {
      name: 'whiskey-value pair',
      price: 11,
      image: 'https://i.imgur.com/a7rmkoS.jpg',
    },
    {
      name: '404 horsemen',
      price: 202,
      image: 'https://i.imgur.com/FLucOLr.jpg',
    },
    {
      name: 'if stateMint julep',
      price: 2,
      image: 'https://i.imgur.com/yaoK0Dg.jpg',
    },
    {
      name: 'APIPA',
      price: 43,
      image: 'https://i.imgur.com/qAhA7pi.jpg',
    },
    {
      name: 'node to joy',
      price: 56,
      image: 'https://i.imgur.com/MbVdwZz.jpg',
    },
  ];

// get route 
 app.get('/getroute', (req, res) => {
    res.send("it works!");
 })

 // drinks route 
 app.get('/drinks', (req, res) => {
    res.render('index.ejs', {
        drinks: drinks,
    });
 })

 // show route 
 app.get('/drinks/:id', (req, res) => {
    res.send(req.params.id);
 })


 // tell express to listen for requests from the browser (client) 
 // make sure that this is located at bottom of code 
app.listen(3000, () => {
    console.log('listening');
})