const express = require ('express');
const auth = require ('./controller/Auth');
const siteHandling = require ('./controller/site_handling');
const massive = require ('massive');
require('dotenv').config();
const {CONNECTION_STRING, SERVER_PORT} = process.env;

const app = express (); 

app.use(express.json());

//api endpoints 

//Login
app.post('/login', auth.login);

//Register
app.post('/register',auth.register);

//Landing--GET request to return a craft from given user input
app.get('/landing/:time/:type', siteHandling.getCraft);

//Craft--POST request to favorite an item to profile
app.post('/craft/:user_id/:craft_id', siteHandling.addFav);

//Profile--delete favorited craft card from profile
app.delete('/profile/:craft_id', siteHandling.deleteFav);

//connecting to database using Massive
massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
}).then((dbInstance) => {
  app.set("db", dbInstance);
  console.log("db connected");
});

app.listen(SERVER_PORT , () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
});