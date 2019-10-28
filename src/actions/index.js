 import jsonPlaceholder from '../apis/jsonPlaceholder';
 import _ from 'lodash';

 //For Asynchronous action creators we need to install redux-thunk middleware
 //Redux thunk can return a Plain Object and also a Function

//  export const fetchPosts = async() => {
//     //bad approach, breaking the rules of action creators
//     // Action creators must return a plan Js objects with a type property.
//     // Actions can optionally have a "payload"

//     const response = await jsonPlaceholder.get('/posts');
//      return {
//          type: 'FETCH_POSTS'
//      };
//  }; 

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({type: 'FETCH_POSTS', payload: response.data})
    }
}


// ********** (FIRST OPTION) FIX MULTIPLE API CALLS USING MEMOIZE FROM LODASH ***
// we need to defined a function outside the action creator and memoized outside the action creator one time ***
// export const fetchUser = id => dispatch => {
//     _fetchUser(id, dispatch)
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });

//********* (SECOND OPTION) FIX MULTIPLE API CALLS - create fetchPostsAndUsers action*/

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) =>{
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));
}


// TOTALLY FINE, I CAN DO THIS TOO
//  export const selectPost = () => {
//      return{
//          type: 'SELECT_POST'
//      } 
//  }