import { combineReducers, createStore } from 'redux';

const DEFAULT_STATE = {};

const monReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch(type) {
  case 'SET_POKEMON':
    return payload;
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  monster: monReducer,
});

const store = createStore(rootReducer);
export default store;
