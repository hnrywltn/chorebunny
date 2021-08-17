import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import Home from './components/Homepage/Home';
import User from './components/User';
import Splashpage from './components/Splashpage/Splashpage';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
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
        {/* <Route path='/splash' exact={true}>
          <SplashPage />
        </Route> */}
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute> */}
        <ProtectedRoute path='/profile/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/splash' exact={true} >
          <Splashpage />
        </Route>
        <Route path='/' exact={true} >
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
