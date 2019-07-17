import { combineReducers } from 'redux';
import postReducer from './postReducer';

// Reducers: 
// - must return any value, except undefined
// - must produce 'state' using 2 arguments: the previous state and a new action
// - must not use anything else than the 2 arguments: reducer is PURE!
// - must not mutate its first state argument: must not add to previous state, but create a new state using the previous
export default combineReducers({ posts: postReducer });
