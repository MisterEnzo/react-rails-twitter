import React, { Component } from "react"
import HelloWorld from "./HelloWorld"
import TweetBox from "./TweetBox"
import TweetList from "./TweetList"

let mockTweets = [
  {id: 1, author: "Enz", body: "first tweet"},
  {id: 2, author: "Enz", body: "second tweet"},
  {id: 3, author: "Enz", body: "third tweet"}
];

export default class Main extends Component {
  render () {
    return (
      <div className="container">
        <HelloWorld greeting="Hi pogi!" />
        <TweetBox />
        <TweetList tweets={mockTweets} />
      </div>
    );
  }
}
