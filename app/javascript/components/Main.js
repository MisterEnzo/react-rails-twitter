import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";

import HelloWorld from "./HelloWorld";
import TweetBox from "./TweetBox";
import TweetList from "../containers/TweetList";

import { fetchTweets } from "../actions/index";

class Main extends Component {

  sendTweet = (tweet) => {
    axios.post('/tweets', {
      tweet: tweet
    })
    .then(function (response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })

    // this.setState(prevState => ({
    //   tweets: [ {id: 0, author: "guest", body: tweet}, ...prevState.tweets]
    // }))
  }

  componentDidMount(){
    this.props.fetchTweets();
  }

  render () {
    return (
      <div className="container">
        <TweetBox sendTweet={this.sendTweet} />
        <TweetList />
        <div id="tweet_data"><p>tweets</p></div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTweets }, dispatch);
}

export default connect(null, mapDispatchToProps)(Main);
