import jsonPlaceholder from '../apis/jsonPlaceholder';

//thunk just lets us get server data async by simply returning a function that creates an action object
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};
