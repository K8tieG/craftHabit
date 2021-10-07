//this component will display a card for each craft that is generated based on the user inputs of time and craft type. 
//it will display a card that has the craft, supplies, and instructions.
//a user will be able to favorite the card to their profile 
// POST to favorite? 

//for styling cards https://betterprogramming.pub/build-a-reusable-responsive-card-component-with-styled-components-3ca14933f7e5

import React from 'react';
import axios from 'axios';
import { AiOutlineHeart , AiFillHeart } from 'react-icons/ai';
import "./Craft.css";

export default function Craft(props) {
  
  const handleClick = () => {  

    axios
    .post(`/craft/${props.userId}/${props.craftCard.craft_id}`)
    .then((res) =>{
     alert("favorite added");
     console.log(props.userId)
    });
  };
 
  return (
    <div className="craftBox">
      <div className="craftImg">
        <img src={props.craftCard.craft_img} alt="" />
      </div>
      <div className="title">
        <h1>{props.craftCard.title}</h1>
      </div>
      <div className="materials">
        <h2>Materials:</h2>
        <p>{props.craftCard.materials}</p>
      </div>
      <div className="tools">
        <h2>Tools:</h2>
        <p>{props.craftCard.tools}</p>
      </div>
      <div className="instructions">
        <h2>Instructions:</h2>
        <p>{props.craftCard.instructions}</p>
      </div>
      <button onClick={handleClick} className="favBtn">
        <AiOutlineHeart className="favHeart" /> Favorite
      </button>
    </div>
  );
}

