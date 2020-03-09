import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';

export default function CardButton(props) {

  return (
    <ButtonBase
      key={props.index}
      onClick={props.handleClick}
    >
      <img
        src={props.src}
        alt={"cards"}
        height={"100"}
      />
    </ButtonBase>
  );
}