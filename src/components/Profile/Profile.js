//this page displays the saved crafts a users has favorited 
//a user can DELETE these cards from their profile 
//render card components 




//show all favorites--use get request 

import React, {useState} from 'react';
import axios from 'axios';

export default function Profile(props) {
const [userId, setUserId] = useState("")

const handleClick = () => {

  axios
    .get(`/profile/${userId}`)
    .delete("/profile/craft_id")
    .then((res) => {
        setUserId(res.data);

    });
};


    return (
      <div>
          <h1>Profile Component</h1>
        <div className="title">
        <p>title</p>
        </div>
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
