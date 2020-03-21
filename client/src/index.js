import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import { createStore } from 'redux';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3001';

// STORE

// ACTION

// REDUCER - describe how your actions transform state

// DISPATCH - this is what sends the action to the reducer

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();