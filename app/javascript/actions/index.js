import axios from 'axios';

export const FETCH_TWEETS = 'FETCH_TWEETS';

export function fetchTweets() {
  // let tweets = $.get('/tweets').done(function(data){
  //   return data;
  // });
  const url = '/tweets';
  // const request = $.get(url).done(function(data){ return data });
  // console.log(request);

  const request = axios.get('/tweets').then(function(response){
    return response;
  })
  console.log(request);
  return {
    type: FETCH_TWEETS,
    payload: request
    // payload: [
    //   {user_id: 1, body: "reduce this baby!"},
    //   {user_id: 2, body: "redux yeah baby!"},
    //   {user_id: 3, body: "reduuuuxxxx bo yeah baby!"}
    // ]
  };
}
