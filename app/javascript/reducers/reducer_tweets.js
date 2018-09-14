import { FETCH_TWEETS, POST_TWEET } from '../actions/index';

export default function(state = null, action) {

  switch(action.type) {
    case FETCH_TWEETS:
      return action.payload.data;
    case POST_TWEET:
      return ([action.payload.data, ...state]);
  }
  return state;
};
