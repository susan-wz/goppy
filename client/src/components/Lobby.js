import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Button from './Elements/Button.js';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Lobby(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleSinglePlayer = () => {
    // not sure if I even need this
  }

  const handleMultiPlayer = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <h1>Lobby</h1>
      <h2>Description</h2>
      <p>{props.gameInfo.description}</p>
      <h2>Tutorial</h2>
      <p>{props.gameInfo.tutorial}</p>
      <Link to='/single-player-game'>
        <Button text={"Single-Player"} handleClick={handleSinglePlayer} />
      </Link>
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
    </div>
  );
}

export default Lobby;
