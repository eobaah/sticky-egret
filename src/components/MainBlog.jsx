import React, { Component } from 'react'
import CreateButton from './Buttons/CreateButton.jsx'
import EditButton from './Buttons/EditButton.jsx'
import DeleteButton from './Buttons/DeleteButton.jsx'
import ModalCreatePost from './ModalCreatePost.jsx'
import ModalEditPost from './ModalEditPost.jsx'
import { Modal, Button } from 'elemental'

export default class MainBlog extends Component {
  render() {
    return (
        <div className="mainBlog">
          <h1>title</h1>
          <p> Welcome </p>
          <CreateButton className="createPostButton"/>
          <ModalCreatePost />
          <div className="postContainer">
            <div className="postHeader" id="blogEntryid">
              <h2> title </h2>
              <p> normalizeDate(post_date)</p>
            </div>
            <div className="textBody">
              <p> blog_entry </p>
            </div>
            <div className="imageContainer">
              <img src="http://matthewepierce.com/wp-content/uploads/2015/10/democrats.jpg" />
            </div>
            <div className="tagContainer">
              <p> tags </p>
              <p> comments </p>
            </div>
            <div className="buttonControls">
              <EditButton className="editButton" />
              <DeleteButton className="deleteButton" />
            </div>
            <ModalEditPost id="editPostModal"/>
          </div>
        </div>
    )
  }
}
