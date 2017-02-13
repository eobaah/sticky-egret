import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class DeleteButton extends Component {
  render() {
    return (
      <div>
        <form action={`/delete/${this.props.post.id}`} method='POST'>
          <button className="fa fa-trash-o deletePostBtn" type='submit' value='Submit' formMethod='post'> Delete</button>
        </form>
      </div>
    )
  }
}
