//this page displays the saved crafts a users has favorited 
//a user can DELETE these cards from their profile 
//render card components 

import React from 'react';
import axios from 'axios';

export default function profile() {

    axios.delete('/profile/:id').then((res) => {});
 
    return (
        <div>
            <p>profile comp</p>
        </div>
    )
};
