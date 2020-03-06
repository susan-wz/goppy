import React, { useState, useEffect } from "react";
import { withRouter, useLocation } from "react-router";
import axios from 'axios';

function SingleGame() {
  const gameId = useLocation().pathname.substring(20)
  const [state, setState] = useState({
    game: {}
  })

  useEffect(() => {
    axios.request({
      url: `http://localhost:3001/games/${gameId}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Credentials': true
      },
      withCredentials: true
    }).then(function (response) {
      setState(prev => ({
        ...prev, 
        game: response.data
      }))
    })
      .catch(function (error) {
        console.log(error);
      });  
  }, [])


  return (
    <div>
      <h1>Single Player Game</h1>
    </div>
  );
}

export default SingleGame;
