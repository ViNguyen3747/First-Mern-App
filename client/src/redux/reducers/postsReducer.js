import * as types from "../actions/actionTypes";

const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case types.FETCH_ALL:
      return action.payload;
    case types.CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default postsReducer;
