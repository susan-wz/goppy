import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import useApplicationData from '../hooks/useApplicationData';
import Logo from './Elements/Logo.js';

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
      <Logo />
      <Router>
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
