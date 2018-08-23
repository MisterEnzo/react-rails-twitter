import React from "react"

export default class Tweet extends React.Component {
  render () {
    return (
      <li>
        <i className="fa fa-user-circle"></i>
        <span>{this.props.user}</span>
        <p>{this.props.body}</p>
      </li>
    )
  }
}
