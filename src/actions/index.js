 import jsonPlaceholder from '../apis/jsonPlaceholder';

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
export const fetchUser = (id) => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({type: 'FETCH_USER', payload: response.data})
    }
}


// TOTALLY FINE, I CAN DO THIS TOO
//  export const selectPost = () => {
//      return{
//          type: 'SELECT_POST'
//      } 
//  }