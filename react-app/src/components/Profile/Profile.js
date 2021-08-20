// import React from 'react';
import {useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {getChoreTypes} from '../../store/choreType.js';
import {getUsers} from '../../store/user.js';
import { updateBioThunk } from '../../store/session.js';
import {getPricings, addPricing} from '../../store/pricing.js';
import {getChores} from '../../store/chore.js';
import './profilepage.css';


function Profile() {

  const dispatch = useDispatch();

  const [rate, setRate] = useState('rate per hour');
  const [choreType, setChoreType] = useState(null);

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
  const chores = useSelector(state => {
    return Object.values(state.chores);
  });



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
    dispatch(getChores());
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


  const usersChores = chores?.filter(chore => chore.userId === user.id || chore.bunnyId === user.id);
  const completedChores = usersChores?.filter(chore => chore.userComplete && chore.bunnyComplete);
  const incompleteChores = usersChores?.filter(chore => !chore.userComplete || !chore.bunnyComplete);
  const usersAvaiableChoreTypes = null; //FIXXXXXXXXX and populate drop down menu with this



  console.log('allUserChore', usersChores);
  console.log('complete', completedChores);
  console.log('in progress', incompleteChores);


  let bunnyDom = null;
  let completeDom = null;
  let incompleteDom = null;



  const handleSubmit = async(e) => {
    e.preventDefault();
    const userId = user.id;
    const choreId = Number(choreType);
    const payload = {
      rate: rate,
      userId:userId,
      choreId: choreId
    }
    console.log(choreId)
    await dispatch(addPricing(payload));
    return;
  }





  let pricingForm = (
    <form className="pricingForm" onSubmit={handleSubmit}>
      <div>
        {/* <label>Chore Type</label> */}
        <select
          className="choreType"
          value={choreType}
          onChange={e => setChoreType(e.target.value)}
        >
          {Object.values(choreTypes).map(choreType => {
            return <option key={choreType.id} value={choreType.id}>{`${choreType.category}: ${choreType.chore}`}</option>;
          })}
        </select>
      </div>

      <div>
        <input
          type="number"
          name="rate"
          value={rate}
          placeholder={rate}
          onChange={e => setRate(e.target.value)}
        />
      </div>
      <button className='addPriceButton' type='submit'>ADD</button>
    </form>
  );


  if (completedChores.length) {
    completeDom = completedChores.map(chore => {
      return (
        <div className="chore-complete">
          test
        </div>
      )
    })

  }

  if (incompleteChores.length) {
    incompleteDom = incompleteChores.map(chore => {
      return (
        <div className="chore-incomplete">
          test incomplete
        </div>
      )
    })

  }

  if (user?.isBunny) {
    bunnyDom = (

      <div className="profilepage-pricingTable">
        <h2 className="pricingTable-title">PRICINGS</h2>
        {pricingForm}
        {usersPricing.map((price, i) => {
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
        <h2 className="choreTable-title">Chores</h2>
        <div className="choresInProgress">
          CHORES IN PROGRESS
          {incompleteDom}
        </div>

        <div className="choresComplete">
          CHORES COMPLETE
          {completeDom}
        </div>
      </div>

      {bunnyDom}


    </div>

  );
}
export default Profile;
