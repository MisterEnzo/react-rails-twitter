import React from "react"

export default class Tweet extends React.Component {
  render () {
    return (
      <li>
        <img src={this.props.gravatar} />
        <span>{this.props.name}</span>
        <time>{moment(this.props.created_at).fromNow()}</time>
        <p>{this.props.body}</p>
      </li>
    )
  }
}
