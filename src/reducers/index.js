import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

// a reducer MUST return any value besides undefined
// Reducers must be a pure functions 

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});