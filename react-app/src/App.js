import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import Home from './components/Homepage/Home';
// import User from './components/User';
import Profile from './components/Profile/Profile';
import ChoreTypeSignupForm from './components/ChoreTypeSignup/ChoreTypeSignupForm';
import Splashpage from './components/Splashpage/Splashpage';
import { authenticate } from './store/session';
import ChoreForm from './components/ChoreForm/ChoreForm';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
      //MIGHT NEED TO COMMENT THE REST OF THIS USEEFFECT OUT!
      //NOW I REMEBER _ WE COMMENTED THIS OUT BECAUSE WE WERE JUST FETCHING
      // let result = await fetch('/api/users/1', {
      //   method: 'PATCH',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     "address": "demo street, demo city, DM",
      //     "bio": "Hello, I am the demo user",
      //     "email": "demo@aa.io",
      //     "isBunny": true,
      //     "id": 1,
      //     "name": "Demo User",
      //     "username": "demo"
      //   })
      // })

  //TESTING TRASH!!!!!
      // let results = await fetch('/api/chores', {
      //   method: 'post',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     "bunnyId": 1,
      //     "userId": 2,
      //     "choreId": 10,
      //     "address": '1234 testing street',
      //     "detail": 'testing testing testing ',
      //     "total": 45,

      //   })
      // })
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>

        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/profile' exact={true} >
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path='/chore-type-signup' exact={true} >
          <ChoreTypeSignupForm />
        </ProtectedRoute>
        <Route path='/splash' exact={true} >
          <Splashpage />
        </Route>
        <Route path='/' exact={true} >
          <Home />
        </Route>
        <Route path='/choreForm'>
          <ChoreForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
