import React, { Component } from 'react'

export default class DeleteButton extends Component {
  render() {
    return (
      <form action='/delete/id' method='POST'>
        <i className="fa fa-trash-o deletePostBtn" type="submit" value="delete" ></i>
      </form>
    )
  }
}
