import { FETCH_TWEETS } from '../actions/index';

export default function(state = null, action) {

  switch(action.type) {
    case FETCH_TWEETS:
      return action.payload.data
  }
  return state;
};
