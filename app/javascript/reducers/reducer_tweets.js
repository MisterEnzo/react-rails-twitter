import { FETCH_TWEETS } from '../actions/index';

export default function(state = null, action) {

  switch(action.type) {
    case FETCH_TWEETS:
      return action.payload.data

    // add another case that will accept send_tweet case
    // the case should return [ action.payload.data, ...state ]
  }
  return state;
};
