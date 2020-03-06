import React from 'react';
import Button from './Elements/Button.js';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Lobby(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleSinglePlayer = () => {
    console.log("single player clicked!")
  }

  const handleMultiPlayer = (event) => {
    console.log("multi player clicked!")
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
    </div>
  );
}

export default Lobby;
