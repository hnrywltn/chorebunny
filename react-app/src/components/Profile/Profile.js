// import React from 'react';
import {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {getChoreTypes} from '../../store/choreType.js';
import {getUsers} from '../../store/user.js';
import {getPricings} from '../../store/pricing.js';
import {getChores} from '../../store/chore.js';
import './profilepage.css';


function Profile() {

  const dispatch = useDispatch();


  const choreTypes = useSelector(state => {
    return state.choreType;
  });
  const users = useSelector(state => {
    return Object.values(state.users);
  });
  const user = useSelector(state => {
    return state.session.user;
  });
  const pricing = useSelector(state => {
    return Object.values(state.pricings);
  });
  const chores = useSelector(state => {
    return Object.values(state.chores);
  });






  useEffect(() => {
    dispatch(getChoreTypes());
    dispatch(getUsers());
    dispatch(getPricings());
    dispatch(getChores());
  }, [dispatch]);






/////////////////////
  const usersPricing = pricing?.filter(price => price.userId === user.id);



  let bunnyDom = null;

  if (user?.isBunny) {
    bunnyDom = (

      <div className="profilepage-pricingTable">
        <h2 className="pricingTable-title">PRICINGS</h2>
        {usersPricing.map((price, i) => {
          return (
            <>
              <div key={`dataN${i}`} className="bunnyChoreDataName">
                {choreTypes[price.choreId]?.chore}
              </div>

              <div key={`dataR${i}`} className="bunnyChoreDataRate">
                {`$${price.rate}.00 per hour`}
              </div>
            </>
            );
          }
        )}

      <Link className="profilepage-editPricing" href="/chore-type-signup">
        SIGN-UP/EDIT CHORES
      </Link>
      </div>
    )
  }







  return (
    <div className="profilepage">
      {/* <div className="profilepage-picture-container"> */}
        <img className="profilepage-picture" src="https://i.imgur.com/j5d5T4u.jpg" alt="profile" />
      {/* </div> */}

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
        <h2 className="choreTable-title">Chores</h2>
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
