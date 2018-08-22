import React, { Component } from "react"
import HelloWorld from "./HelloWorld"
import TweetBox from "./TweetBox"
import TweetList from "./TweetList"

let mockTweets = [];

export default class Main extends Component {
  state = {tweets: mockTweets}

  sendTweet = (tweet) => {
    this.setState(prevState => ({
      tweets: [ {id: 0, author: "guest", body: tweet}, ...prevState.tweets]
    }))
  }

  render () {
    return (
      <div className="container">
        <HelloWorld greeting="Hi pogi!" />
        <TweetBox sendTweet={this.sendTweet} />
        <TweetList tweets={this.state.tweets} />
      </div>
    );
  }
}
