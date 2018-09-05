import React from "react";
import { connect } from 'react-redux';

import Tweet from "../components/Tweet";

class TweetList extends React.Component {

  render() {
    const tweets = this.props.tweets
    // let tweets = this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />);
    if (!tweets){
      return <div>Loading..</div>
    }
    const renderTweets = tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />);

    return (
      <div>
        <h2>Tweets</h2>
        <ul>
          {renderTweets}
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
