//this page displays the saved crafts a users has favorited
//a user can DELETE these cards from their profile
//render card components
//show all favorites--use get request

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Profile(props) {
  const [craftCard, setCraftCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`/profile/${props.userId}`).then((res) => {
      setCraftCard(res.data);
      setIsLoading(false);
    });
  }, []);

  const handleClick = (key) => {
    console.log(craftCard[key]);
    axios
      .delete(`/profile/${craftCard[key].craft_id}/${props.userId}`)
      .then((res) => {
        setCraftCard(res.data);
        alert("craft removed");
      });
  };

  return (
    <div className="returnDiv">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="falsDiv">
          {craftCard.map((el, key) => {
            return (
              <div className="mapDiv">
                <div className="title">
                  <p>{el.title}</p>
                </div>
                <div className="craftImg">
                  <img src={el.craft_img} alt="" />
                </div>
                <div className="time">
                  <p>{el.time}</p>
                </div>
                <button onClick={(e) => handleClick(key, e)} className="favBtn">
                  Remove Favorite
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
