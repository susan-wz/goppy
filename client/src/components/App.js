import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useApplicationData from '../hooks/useApplicationData';
import Lobby from './Lobby.js';

function App() {
  const { state } = useApplicationData();

  // const routes = links.map((link, index) => {
  //   return (
  //     <Route path={link.path} key={index} >
  //       {link.component}
  //     </Route>
  //   )
  // })


  return (
    <div>
      <h1>goppy</h1>
      <Lobby gameInfo={state.gameInfo} />
    </div>
  );
}

export default App;
