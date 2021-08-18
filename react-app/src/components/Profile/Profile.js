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


  useEffect(() => {
    dispatch(getChoreTypes());
    dispatch(getUsers());
  }, [dispatch]);





  return (
    <>
      Hello from profile!
    </>
  );
}
export default Profile;
