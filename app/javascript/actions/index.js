import axios from 'axios';

export const FETCH_TWEETS = 'FETCH_TWEETS';

export function fetchTweets() {
  const url = '/tweets';
  const request = axios.get('/tweets').then(function(response){
    return response;
  })
  return {
    type: FETCH_TWEETS,
    payload: request
  };
}

// create a function sendTweet
// it should send a post request
// then it should return the data
