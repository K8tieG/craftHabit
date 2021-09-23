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
//what about signup? 

//Landing--POST request to return a craft from given user input
app.post('/landing/', siteHandling.createCraft);

//Craft--favorite an item to profile
//or is it a PUT because it's creating a favorite
app.post('/craft/:id', siteHandling.addFav);

//Profile--delete favorited craft card from profile
app.delete('/profile/:id', siteHandling.deleteFav);

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