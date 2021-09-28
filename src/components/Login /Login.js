//users can create or login to their account
//can enter email
//can enter password 
//can click login button
//POST request to login 

// login requires:
// - Login html and Logout html.
// - Routes to handle the login/logout.
// - Session to store the user_id etc for logged in user.
// - Database querying to confirm user is registered user.
// - Registration to create new user. (Optional, perhaps after MVP.)

import React from 'react';
import axios from 'axios';

export default function login() {

    axios.post("/login")
    .then((res) =>{
    });
    //button for submit on click

    return (
        <div>
           <h1>login component</h1>
           
        </div>
    )
};
