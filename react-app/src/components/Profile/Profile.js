// import React from 'react';
import {useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {getChoreTypes} from '../../store/choreType.js';
import {getUsers} from '../../store/user.js';
import {getPricings} from '../../store/pricing.js';
import { updateBioThunk } from '../../store/session.js';
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

  const [click, setClick] = useState(0)
  
  let isBunny = user.isBunny;
  // const [selected, setSelected] = useState(user.isBunny); 
  // console.log("this is selected", selected)
  
  const pricing = useSelector(state => {
    return Object.values(state.pricings);
  });

  console.log('===============>>>>>',user.isBunny);



  // const edit = (e) => {
  //   e.preventDefault()
  //   const userInfo = {
  //     isBunny: true,
  //   }
  //   // console.log(selected)
  //   dispatch(updateBioThunk(user.id))
  // }

  useEffect(() => {
    dispatch(getChoreTypes());
    dispatch(getUsers());
    dispatch(getPricings());
    setClick(0);
  }, [dispatch, click]);

/////////////////////
  const usersPricing = pricing?.filter(price => price.userId === user.id);

  
  const handelclick = () => {
    setClick(1)
    const userInfo = {
      isBunny: true,
    }
    dispatch(updateBioThunk(user.id, userInfo ))
  }
  
  let bunnyDom = null;

  if (user?.isBunny) {
    bunnyDom = (
      <div className="profilepage-pricingTable">
        <h2 className="pricingTable-title">PRICINGS</h2>
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
      {/* this is when the user IS A BUNNY- isBunny === true */}
      {user.isBunny === false && 
      <div className="profilepage-isBunny">
        {/* <form onSubmit={edit}>
          <label>Become a Bunny?</label>
            <input type="checkbox" onClick={() => {
              isBunny = true}} />
              <button type="submit">submit</button>
        </form> */}
              <button onClick={handelclick}>Become a bunny</button>
      </div>
      }
      
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
