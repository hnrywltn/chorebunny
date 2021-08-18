import './navbar.css'
import React from 'react';
import  ReactDOM  from 'react-dom';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import DemoUser from '../Demo/Index';

const NavBar = ({ isLoaded }) => {
  const user = useSelector((state)=> state.session.user);

  let sessionlinks;
  if(user){
    sessionlinks = (
      <div className="navbar">
        <NavLink className="navHome" to='/' exact={true} activeClassName='active'>
          <img src="https://i.imgur.com/99CvsZ0.png" alt="bunny" className="bunnyPic"></img>
        </NavLink>
        <div className="navLogout">
          <LogoutButton />
        </div>
      </div>
    )
  } else {
    sessionlinks = (
      <div className="navbar">
        <NavLink className="navHome" to='/splash' exact={true} activeClassName='active'>
          <img src="https://i.imgur.com/99CvsZ0.png" alt="bunny" className="bunnyPic"></img>
        </NavLink>
        <NavLink className="navLogin" to='/login' exact={true} activeClassName='active'>Login</NavLink>
        <NavLink className="navSignup" to='/sign-up' exact={true} activeClassName='active'>Sign Up</NavLink>
        <div className="navDemo">
          <DemoUser />
        </div>
      </div>
    )
  }
  return (
    <>
      {sessionlinks}
    </>
  )
}
export default NavBar;

//   return (
//     // <nav>
//       <div className="navbar">

//           <NavLink className="navHome" to='/' exact={true} activeClassName='active'>
//             <img src="https://i.imgur.com/99CvsZ0.png" alt="bunny" className="bunnyPic"></img>
//           </NavLink>


//           <NavLink className="navLogin" to='/login' exact={true} activeClassName='active'>
//             Login
//           </NavLink>


//           <NavLink className="navSignup" to='/sign-up' exact={true} activeClassName='active'>
//             Sign Up
//           </NavLink>

//         {/* <div className="navUsers">
//           <NavLink to='/users' exact={true} activeClassName='active'>
//             Users
//           </NavLink>
//         </div> */}
//         <div className="navLogout">
//           <LogoutButton />
//         </div>
//       </div>
//     // </nav>
//   );
// }

