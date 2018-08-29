import React from "react";
import { connect } from 'react-redux';

import Tweet from "../components/Tweet";

class TweetList extends React.Component {
  render() {
    let tweets = this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />);

    return (
      <div>
        <h2>Tweets</h2>
        <ul>
          {tweets}
        </ul>
      </div>
    );
  };
}

function mapStateToProps(state){
  return {
    tweets: state.tweets
  };
}

export default connect(mapStateToProps)(TweetList);
