import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from './Elements/Button.js';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import Title from './Elements/Title.js';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { clearState } from "../actions/index.js";

const CenterMain = styled.main`
  display: flex;
  justify-content: center;
`;

const CenterDiv = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0px 14px 28px rgba(0,0,0,0.25), 0px 10px 10px rgba(0,0,0,0.22);
`;

const ButtonDiv = styled.div`
  display: flex;
`;

function Lobby(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearState())
  }, [])

  const handleSinglePlayer = () => {
    axios.post(`/games?gametype_id=1&status=not_started`)
      .then(function (response) {
        history.push(`/single-player-game/${response.data.id}`)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleMultiPlayer = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const createMultiGame = () => {
    axios.post(`/games?gametype_id=1&status=not_started`)
    .then(function (response) {
      axios.post(`/games_players?game_id=${response.data.id}&player_id=1`)
      history.push(`/multi-player-game/${response.data.id}`)
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  return (
    <div>
      <Title />
      <CenterMain>
        <CenterDiv>
          <h2>What's Goppy?</h2>
          <p>{props.gameInfo.description}</p>
          <h2>How to Play</h2>
          <p>{props.gameInfo.tutorial}</p>
          <h2>Play</h2>
          <ButtonDiv>
            <Button text={"Single-Player"} handleClick={handleSinglePlayer} />
            <Button text={"Multi-Player"} handleClick={handleMultiPlayer} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Join Multi-Player Game</MenuItem>
              <MenuItem onClick={createMultiGame}>Create New Multi-Player Game</MenuItem>
            </Menu>
          </ButtonDiv>
        </CenterDiv>
      </CenterMain>
    </div>
  );
}

export default Lobby;
