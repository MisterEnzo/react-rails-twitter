import React from "react"
import Tweet from "./Tweet"

export default class TweetList extends React.Component {

  render() {
    let tweets = this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />);

    return (
      <div>
        <h2>Tweets</h2>
        <ul>
          {tweets}
        </ul>
      </div>
    )
  }
}