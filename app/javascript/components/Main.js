import React, { Component } from "react"
import HelloWorld from "./HelloWorld"
import TweetBox from "./TweetBox"
import TweetList from "./TweetList"

let mockTweets = [];

export default class Main extends Component {
  state = {tweets: mockTweets}

  sendTweet = (tweet) => {
    $.post('/tweets', { tweet: tweet })
    .done(savedTweet => {
      this.setState(prevState => ({
        tweets: [ savedTweet, ...prevState.tweets ]
      }));
    })
    .fail(error => console.log(error))
  }

  componentDidMount(){
    $.ajax("/tweets")
    .done(data => this.setState({
      tweets: data
    }))
    .fail(error => console.log(error))
  }

  render () {
    return (
      <div className="container">
        <TweetBox sendTweet={this.sendTweet} />
        <TweetList tweets={this.state.tweets} />
      </div>
    );
  }
}
