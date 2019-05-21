import React from 'react';
import { NavLink, BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from './mainLogOnPage/components/Login';
import PostMessage from './mainLogOnPage/components/PostMessage'

import styled from 'styled-components';

c
`

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/PostMessage">Admin Access</NavLink>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/PostMessage" component={PostMessage} />
      </div>
    </Router>
  );
}

export default App;
