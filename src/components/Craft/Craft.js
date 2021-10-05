//this component will display a card for each craft that is generated based on the user inputs of time and craft type. 
//it will display a card that has the craft, supplies, and instructions.
//a user will be able to favorite the card to their profile 
// POST to favorite? 

//for styling cards https://betterprogramming.pub/build-a-reusable-responsive-card-component-with-styled-components-3ca14933f7e5

import React from 'react';
import axios from 'axios';

export default function Craft(props) {
  
  const handleClick = () =>{

    axios
    .post(`/craft/${props.userId}/${props.craftCard.craft_id}`)
    .then((res) =>{
     alert("favorite added");
    });
  };
 
  return (
    <div>
      {console.log(props)};
      <h1>{props.craftCard.title}</h1>
      <div className="craftImg">
        <img src={props.craftCard.craft_img} alt="" />
      </div>
      <div className="materials">
        <p>
          Materials: {props.craftCard.materials}
        </p>
      </div>
      <div className="tools">
        <p>Tools: {props.craftCard.tools}</p>
      </div>
      <div className="instructions">
        <p>Instructions: {props.craftCard.instructions}</p>
      </div>
      <button onClick={handleClick} className="favBtn">Favorite</button>
    </div>
  );
}

