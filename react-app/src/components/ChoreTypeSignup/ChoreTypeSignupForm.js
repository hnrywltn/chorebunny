import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import {getChoreTypes} from '../../store/choreType.js';
import {getPricings} from '../../store/pricing.js';


function ChoreTypeSignupForm() {
const dispatch  = useDispatch();
//bring in chore types, pricings, session


const choreTypes = useSelector(state => {
  return Object.values(state.choreType);
});

const user = useSelector(state => {
  return state.session.user;
});

useEffect(() => {
  dispatch(getChoreTypes());
  dispatch(getPricings());
}, [dispatch]);















return user.name



}


export default ChoreTypeSignupForm;
