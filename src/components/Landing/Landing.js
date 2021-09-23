//this is the home page.
//users can select a time amount from a dropdown menu
//users can select a craft type from a dropdown menu
//users can click start craft button to spin up new craft

//axios request to create craft on user submit
    //send time and craft saved as variables to backend

//POST request to grab req values from req obj save to DB
//make a query to the database add time and craft and will auto increment id
//then res.data

import React from 'react';
import axios from 'axios';

export default function landing() {

    axios.post("landing/:id").then((res) => {});

    return (
        <div>
            <p>This is my home/landing page</p>
            
        </div>
    )
};
