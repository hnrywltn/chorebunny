// import React from 'react';
import {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {getChoreTypes} from '../../store/choreType.js';
import {getUsers} from '../../store/user.js';
import './profilepage.css';


function Profile() {

  const dispatch = useDispatch();


  const choreTypes = useSelector(state => {
    return Object.values(state.choreType);
  });
  const users = useSelector(state => {
    return Object.values(state.users);
  });
  const user = useSelector(state => {
    return state.session.user;
  });

  console.log(user.isBunny);





  useEffect(() => {
    dispatch(getChoreTypes());
    dispatch(getUsers());
  }, [dispatch]);




  let bunnyDom = null;

  if (user?.isBunny) {
    bunnyDom = (
      <div className="profilepage-pricingTable">
         <h1>PRICING TABLE</h1>
{/* bring in pricings!!!!!!! and loop through - maybe before this conditional */}
      </div>
    )
  }







  return (
    <div className="profilepage">


      <div className="profilepage-name">
        {user.name}
      </div>

      <div className="profilepage-username">
        {user.username}
      </div>

      <div className="profilepage-email">
        {user.email}
      </div>


      <div className="profilepage-bio">
        {user.bio}
      </div>

      <div className="profilepage-chores">
        <div className="choresInProgress">
          CHORES IN PROGRESS
        </div>

        <div className="choresComplete">
          CHORES COMPLETE
        </div>
      </div>

      {bunnyDom}


    </div>

  );
}
export default Profile;
