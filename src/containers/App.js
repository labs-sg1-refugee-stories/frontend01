import React, { Component } from 'react';
import MessageBoardPage from './MessageBoard.Page';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import '../App.css';
import AdminLogin from './AdminLogin';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path='/messages' component={MessageBoardPage}/>
          <Route path='/adminLogin' component={AdminLogin}/>
        </div>
      </Router>
    );
  }
}

export default App;