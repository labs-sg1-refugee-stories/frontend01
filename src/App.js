import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from './mainLogOnPage/components/Login';
import PostMessage from './mainLogOnPage/components/PostMessage'


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/PostMessage">Admin Access</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/PostMessage" component={PostMessage} />
      </div>
    </Router>
  );
}

export default App;
