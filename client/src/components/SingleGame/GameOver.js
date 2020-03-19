import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function GameOver(props) {
  const [open, setOpen] = React.useState(false);


  useEffect(() => {
    if (props.game.status === "ended") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [props.game])

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Game Over"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {props.message === "You won!" ? <h4>You won, congrats!</h4> : <h4>Good game! Play again?</h4>}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.restartGame()} color="primary">Play Again</Button>
          <Link to="/lobby">
          <Button onClick={handleClose} color="primary">Back to Home</Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default GameOver;