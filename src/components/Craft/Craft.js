//this component will display a card for each craft that is generated based on the user inputs of time and craft type. 
//it will display a card that has the craft, supplies, and instructions.
//a user will be able to favorite the card to their profile 
// POST to favorite? 


import React from 'react';

export default function craft() {

  axios.post('/craft/:id')
  .then((res) =>{

  });
 

  return (
    <div>
      <p>I'm a craft card </p>
    </div>
  );
}
