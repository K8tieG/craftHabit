//this page displays the saved crafts a users has favorited
//a user can DELETE these cards from their profile
//render card components
//show all favorites--use get request

import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./Profile.css";
import { FaRegTrashAlt } from "react-icons/fa";

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
        // alert("craft removed");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="returnDiv">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <div className="container">
            {craftCard.map((el, key) => {
              return (
                <div className="mapDiv">
                  <div className="craftImg">
                    <img className="favImg" src={el.craft_img} alt="" />
                  </div>
                  <div className="title">
                    <p>{el.title}</p>
                  </div>
                  <div className="timeRow">
                    <button
                      onClick={(e) => handleClick(key, e)}
                      className="delBtn"
                    >
                      <FaRegTrashAlt className="delFav" />
                    </button>
                    <div className="time">
                      <p>{el.time} min</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
