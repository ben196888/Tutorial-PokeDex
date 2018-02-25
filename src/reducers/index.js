import { combineReducers, createStore } from 'redux';

const DEFAULT_STATE = {};

const monReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
    default:
        return state;
    }
};

const rootReducer = combineReducers({
    monster: monReducer,
});

const store = createStore(rootReducer);
export default store;
