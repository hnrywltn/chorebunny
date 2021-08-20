import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isBunny, setIsBunny] = useState(false);
  const [bio, setBio] = useState('');
  const [address, setAddress] = useState('');




  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, name, isBunny, bio, address));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateIsBunny = (e) => {
    setIsBunny(e.target.checked);
  };

  const updateBio = (e) => {
    setBio(e.target.value);
  };

  const updateAddress = (e) => {
    setAddress(e.target.value);
  };
//MIGHT BE TRASH!!
  if (user && user.isBunny) {
    return <Redirect to='/chore-type-signup' />;
  }

  if(user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>Name</label>
        <input type='text'
        value={name}
        onChange={updateName} />
      </div>
      <div>
        <label>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Would you like to be Bunny?</label>
        <input
          type='checkbox'
          name='isBunny'
          onChange={updateIsBunny}
          checked={isBunny}
        ></input>
      </div>
      <div>
        <label>Bio</label>
        <textarea
          name='bio'
          onChange={updateBio}
          value={bio}
        ></textarea>
      </div>
      <div>
        <label>Address</label>
        <input
          type='text'
          name='address'
          onChange={updateAddress}
          value={address}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>

      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
