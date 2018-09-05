import { FETCH_TWEETS } from '../actions/index';

export default function(state = null, action) {

  switch(action.type) {
    case FETCH_TWEETS:
      // return [{user_id: 1, body: "reduce this baby!"}];
      return action.payload.data
  }
  return state;
};
