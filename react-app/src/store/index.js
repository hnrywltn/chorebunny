import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import choreTypeReducer from './choreType';
import usersReducer from './user';
import pricingsReducer from './pricing';
import choresReducer from './chore';

const rootReducer = combineReducers({
  session,
  choreType: choreTypeReducer,
  users: usersReducer,
  pricings: pricingsReducer,
  chores: choresReducer,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
