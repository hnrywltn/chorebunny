// import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
import { getChoreTypes } from '../../store/choreType.js';
import { getUsers } from '../../store/user.js';
import { updateBioThunk } from '../../store/session.js';
import { getPricings, addPricing, deletePricingThunk } from '../../store/pricing.js';
import { getChores } from '../../store/chore.js';
import EditRate from '../EditRate/EditRate.js';
import './profilepage.css';


function Profile() {

  const dispatch = useDispatch();
  // const {id} = useParams();
  const [rate, setRate] = useState('rate per hour');
  const [choreType, setChoreType] = useState(null);


  const choreTypes = useSelector(state => state.choreType);
  const users = useSelector(state => Object.values(state.users));
  const user = useSelector(state => state.session.user);
  const pricings = useSelector(state => Object.values(state.pricings))
  const onePrice = pricings.find(price => price.id)
  const [click, setClick] = useState(0)

  // let isBunny = user.isBunny;
  // const [selected, setSelected] = useState(user.isBunny);
  // console.log("this is selected", selected)

  const pricing = useSelector(state => {
    return state.pricings;
  });
  const chores = useSelector(state => {
    return Object.values(state.chores);
  });

  //* deleting pricing-chore
  const deleteClick = (id, e) => {
    e.preventDefault();
    // console.log("THIS IS ONE ", id)
    dispatch(deletePricingThunk(id))
  }


  useEffect(() => {
    dispatch(getChoreTypes());
    dispatch(getUsers());
    dispatch(getPricings());
    setClick(0);
  }, [dispatch, click]);


  useEffect(() => {
    dispatch(getChores());
  }, [dispatch])
  const usersPricing = pricings?.filter(price => price.userId === user.id);

  const handelclick = () => {
    setClick(1)
    const userInfo = {
      isBunny: true,
    }
    dispatch(updateBioThunk(user.id, userInfo))
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = user.id;
    const choreId = Number(choreType);
    const payload = {
      rate: rate,
      userId: userId,
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
        <div className="choreTableChoreC">
          <div>{user.name}</div>
          <div>Bunny {users[chore?.bunnyId]?.name}</div>
          <div>total: {chore.total}</div>
        </div>
      )
    })

  }

  if (incompleteChores.length) {
    incompleteDom = incompleteChores.map(chore => {
      return (
        <div className="choreTableChoreI">
          <div className="inChor-name">{users[chore?.userId]?.name}</div>
          <div className="inChor-typeAndCat">{choreTypes[chore?.choreId]?.category}: {choreTypes[chore.choreId].chore}</div>
          <div className="inChor-detail">{chore.detail}</div>
          <div className="inChor-bunny">Bunny {users[chore?.bunnyId].name}</div>
          <div className="inChor-total">total: {chore.total}</div>
          <div className="inChorBttns">
            <button>Complete</button>
            <button>Delete</button>
          </div>
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
                {choreTypes[price?.choreId]?.chore}
              </div>

              <div className="bunnyChoreDataRate">
                {`$${price.rate}.00 per hour`}
                <div>
                  <button onClick={e => deleteClick(price.id, e)}>DELETE</button>
                  <EditRate pricing={price}/>
                </div>
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
        {/* <h2 className="choreTable-title">Chores</h2> */}
        <div className="choresInProgress">
          <h3>CHORES IN PROGRESS</h3>
          {incompleteDom}
        </div>

        <div className="choresComplete">
          <h3>CHORES COMPLETE</h3>
          {completeDom}
        </div>
      </div>

      {bunnyDom}


    </div>

  );
}

export default Profile;
