//users can select a time amount from a dropdown menu
//users can select a craft type from a dropdown menu
//users can click start craft button to spin up new craft

//axios request to create craft on user submit
    //send time and craft saved as variables to backend

//POST request to grab req values from req obj save to DB
//make a query to the database add time and craft and will auto increment id
//then res.data

import React, {useState} from 'react';
import axios from 'axios';
import Craft from '../Craft/Craft';
import "./Landing.css"


export default function Landing(props) {
  const [time, setTime] = useState("");
  const [type, setType] = useState("");
  const [isCraft, setIsCraft] = useState(false);
  const [craftCard, setCraftCard] = useState([]);
  let handleClick = () => {
    
    axios
    .get(`/landing/${time}/${type}`)
    .then((res) => {
      setIsCraft(true);
      setCraftCard(res.data);
    });

  };
  
    return (
      <div>
        {isCraft ? (
          <div className="craft">
            <Craft craftCard={craftCard} userId={props.userId} />
          </div>
        ) : (
          <div className="getCraft">
            <h1 className="pageTitle">GET CREATIVE</h1>
            <div className="inputs">
              <label> Choose amount of time </label>
              <select
                id="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="10">10 minutes </option>
                <option value="15">15 minutes</option>
                <option value="20">20 minutes</option>
                <option value="25">25 minutes</option>
                <option value="30">30 minutes</option>
                <option value="35">35 minutes</option>
              </select>
              <label> Choose a craft type </label>
              <select
                id="type"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="origami">origami</option>
                <option value="drawing">drawing</option>
                <option value="embroidery">embroidery</option>
                <option value="yarn">yarn</option>
                <option value="macrame">macrame</option>
                <option value="crochet">crochet</option>
                <option value="jewelry">jewelry</option>
              </select>
              <button onClick={handleClick} className="craftBtn">
                Get Crafting
              </button>
            </div>
          </div>
        )}
      </div>
    );
};
