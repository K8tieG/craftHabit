//this page displays the saved crafts a users has favorited 
//a user can DELETE these cards from their profile 
//render card components 




//show all favorites--use get request 

import React from 'react';
import axios from 'axios';

export default function Profile() {

const handleClick = () => {
  axios
  .delete('/profile/craft_id')
  .then((res) => {});
};
 
    return (
      <div>
        <h1>Title</h1>
        <div className="craftImg">
          <p>craft image</p>
        </div>
        <div className="time">
          <p>time</p>
        </div>
        <button onClick={handleClick} className="favBtn">
          un-Favorite
        </button>
      </div>
    );
};
