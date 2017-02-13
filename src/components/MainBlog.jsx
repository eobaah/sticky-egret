import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

import DeleteButton from './Buttons/DeleteButton.jsx'
import ModalCreatePost from './ModalCreatePost.jsx'
import ModalEditPost from './ModalEditPost.jsx'


export default class MainBlog extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    const post = this.props.post
    return (
        <div className="mainBlog">
          <ModalCreatePost id="createPostModal" />
          <div className="postContainer">
            <div className="postHeader" id="blogEntryid">
              <h2>{post.title}</h2>
              <p>{post.post_date}</p>
            </div>
            <div className="imageContainer">
              <img src={post.image_url} />
            </div>
            <div className="textBody">
              <p> {post.blog_entry} </p>
            </div>
            <div className="tagContainer">
              <p> {post.tags} </p>
            </div>
            <div className="buttonControls">
              <DeleteButton className="deleteButton" post={post}/>
              <ModalEditPost id="editPostModal" post={post}/>
            </div>
          </div>
        </div>
    )
  }

}
