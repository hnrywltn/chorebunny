import './navbar.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

const NavBar = () => {
  return (
    // <nav>
      <div className="navbar">

          <NavLink className="navHome" to='/' exact={true} activeClassName='active'>
            <img src="https://i.imgur.com/99CvsZ0.png" alt="bunny" className="bunnyPic"></img>
          </NavLink>


          <NavLink className="navLogin" to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>


          <NavLink className="navSignup" to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>

        {/* <div className="navUsers">
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </div> */}
        <div className="navLogout">
          <LogoutButton />
        </div>
      </div>
    // </nav>
  );
}

export default NavBar;
