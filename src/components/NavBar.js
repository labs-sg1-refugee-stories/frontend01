import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <div className="NavBar">
      <NavLink 
        className="NavLink"
        to="/"
        exact
      >
        Home
      </NavLink>
      <NavLink 
        className="NavLink" 
        to="/messages"
        exact
      >
        Message Board
      </NavLink>
      <NavLink 
        className="NavLink"
        to="/messages/new"
        exact
      >
        New Message
      </NavLink>

      <NavLink 
        className="NavLink"
        to="/AdminLogin"
        exact
      >
        Admin Acce
      </NavLink>
      
      <NavLink
      className="NavLink"
      to="/AdminContainer"
      exact
      >
      Admin Page
      </NavLink>

      </div>
     


    
  );
}

export default NavBar;
