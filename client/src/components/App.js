import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useApplicationData from '../hooks/useApplicationData';

function App() {
  const { state, links } = useApplicationData();

  console.log(state)

  const routes = links.map((link, index) => {
    return (
      <Route path={link.path} key={index} >
        {link.component}
      </Route>
    )
  })


  return (
    <div>
      <h1>goppy</h1>
      <Router>
        <Switch>
          {routes}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
