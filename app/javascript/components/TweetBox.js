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
        <form onSubmit={this.sendTweet}>
          <div className="form-group">
            <label>Whats up?</label>
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
