import React from "react"

export default class TweetBox extends React.Component {
  render () {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Whats up?</label>
            <textarea className="form-control form-control-lg"></textarea>
          </div>
          <button type='submit' className="btn btn-primary" style={{float: 'right'}}>Submit</button>
        </form>
      </div>
    )
  }
}
