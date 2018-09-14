import axios from 'axios';

// action for fetching tweets from api
export const FETCH_TWEETS = 'FETCH_TWEETS';

export function fetchTweets() {
  const url = '/tweets';
  const request = axios.get(url).then(function(response){
    return response;
  })
  return {
    type: FETCH_TWEETS,
    payload: request
  };
}

// action for posting a new tweet to api
export const POST_TWEET = 'POST_TWEET';

export function sendTweet(tweet){
  const url = '/tweets';
  const request = axios.post(url, {
    tweet: tweet
  })
  .then(function(response){
    return response;
  })
  .catch(function(error){
    console.log(error);
  })
  return {
    type: POST_TWEET,
    payload: request
  }
}
