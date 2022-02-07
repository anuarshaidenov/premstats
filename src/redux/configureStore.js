import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import teamsReducer from './teams/teams';

const combinedReducers = combineReducers({
  teamsReducer,
});

const middlwares = [logger, thunk];

const store = createStore(combinedReducers, applyMiddleware(...middlwares));

export default store;
