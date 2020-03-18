import React from 'react';
import { useHistory } from "react-router-dom";
import Button from './Elements/Button.js';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import Title from './Elements/Title.js';
import styled from 'styled-components'

const CenterMain = styled.main`
  margin-top: 8rem;
  display: flex;
  justify-content: center;
`;

const CenterDiv = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function Lobby(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let history = useHistory();

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

  return (
    <div>
      <Title />
      <CenterMain>
        <CenterDiv>
          <h1>Lobby</h1>
          <h2>Description</h2>
          <p>{props.gameInfo.description}</p>
          <h2>Tutorial</h2>
          <p>{props.gameInfo.tutorial}</p>
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
            <MenuItem onClick={handleClose}>Create New Multi-Player Game</MenuItem>
          </Menu>
        </CenterDiv>
      </CenterMain>
    </div>
  );
}

export default Lobby;
