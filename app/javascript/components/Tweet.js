import React from "react";
import moment from "moment";

export default class Tweet extends React.Component {
  render () {
    function formattedDate(date){
      return moment(date).fromNow();
    }
    return (
      <li>
        <span>{this.props.name}</span>
        <p className='time'>{formattedDate(this.props.created_at)}</p>
        <p>{this.props.body}</p>
      </li>
    )
  }
}
