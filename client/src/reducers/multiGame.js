const multiGameReducer = (state = 0, action) => {
  switch (action.type) {
    case 'UPDATE GAME':
      return state;
    case 'UPDATE ROUND':
      return state;
    default: 
      return state;
  }
};

export default multiGameReducer;