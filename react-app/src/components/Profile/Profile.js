// import React from 'react';
import {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {getChoreTypes} from '../../store/choreType.js';
import {getUsers} from '../../store/user.js';
import {getPricings} from '../../store/pricing.js';
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

  console.log(user.isBunny);





  useEffect(() => {
    dispatch(getChoreTypes());
    dispatch(getUsers());
    dispatch(getPricings());
  }, [dispatch]);






/////////////////////
  const usersPricing = pricing?.filter(price => price.userId === user.id);



  let bunnyDom = null;

  if (user?.isBunny) {
    bunnyDom = (
      <div className="profilepage-pricingTable">
        <h2>PRICING TABLE</h2>
        {usersPricing.map(price => {
          return (
            <>
              <div className="bunnyChoreDataName">
                {choreTypes[price.choreId]?.chore}
              </div>

              <div className="bunnyChoreDataRate">
                {`$${price.rate}.00 per hour`}
              </div>
            </>
            );
          }
        )}

      <Link to="/chore-type-signup">
        SIGN-UP/EDIT CHORES
      </Link>
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
