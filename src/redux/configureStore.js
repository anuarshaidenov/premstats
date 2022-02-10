import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import teamsReducer from './teams/teams';
import teamReducer from './team/team';
import standingsReducer from './standings/standings';

const combinedReducers = combineReducers({
  teamsReducer,
  teamReducer,
  standingsReducer,
});

const middlwares = [logger, thunk];

const store = createStore(combinedReducers, applyMiddleware(...middlwares));

export default store;
