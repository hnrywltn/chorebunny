import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    window.location.replace('/splash')
  };

  return <button className="logoutBttn" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
