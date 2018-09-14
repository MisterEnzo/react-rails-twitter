import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";

import HelloWorld from "./HelloWorld";
import TweetBox from "./TweetBox";
import TweetList from "../containers/TweetList";

import { fetchTweets } from "../actions/index";
import { sendTweet } from "../actions/index";

class Main extends Component {
  componentDidMount(){
    this.props.fetchTweets();
  }

  render () {
    return (
      <div className="container">
        <TweetBox sendTweet={this.props.sendTweet} />
        <TweetList />
        <div id="tweet_data"><p>tweets</p></div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTweets, sendTweet }, dispatch);
}

export default connect(null, mapDispatchToProps)(Main);
