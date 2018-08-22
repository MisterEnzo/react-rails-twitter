import React from "react"

export default class TweetBox extends React.Component {
  state = {
    tweet: ''
  }

  sendTweet = (event) => {
    event.preventDefault();
    this.props.sendTweet(this.state.tweet);
    this.setState({tweet: ''});
  }

  render () {
    return (
      <div>
        <h2>Tweet!</h2>
        <form onSubmit={this.sendTweet}>
          <div className="form-group">
            <label>New Tweet</label>
            <textarea className="form-control form-control-lg"
                      value={this.state.tweet}
                      onChange={event => this.setState({tweet: event.target.value })}
            ></textarea>
          </div>
          <button type='submit' className="btn btn-primary" style={{float: 'right'}}>Submit</button>
        </form>
      </div>
    )
  }
}
