import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useApplicationData from '../hooks/useApplicationData';

function App() {
  const { links } = useApplicationData();

  axios.request({
    url: 'http://localhost:3001/users',
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Credentials': true
    },
    withCredentials: true
  }).then(function (response) {
    console.log(response);
  })
    .catch(function (error) {
      console.log(error);
    });

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
