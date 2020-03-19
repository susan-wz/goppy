import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import useApplicationData from '../hooks/useApplicationData';
import Logo from './Elements/Logo.js';
import './App.css';

function App() {
  const { state, links } = useApplicationData();

  const routes = links.map((link, index) => {
    return (
      <Route path={link.path} key={index} >
        {link.component}
      </Route>
    )
  })

  return (
    <div>
      <Router>
        <Logo />
        <Switch>
          <Route exact path="/">
            <Redirect to="/lobby" />
          </Route>
          {routes}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
