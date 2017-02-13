import React, { Component } from 'react'
import Modal from './Modal.jsx'

export default class ModalEditPost extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      title: this.props.post.title,
      author: this.props.post.author,
      snippet: this.props.post.snippet,
      blog_entry: this.props.post.blog_entry,
      image_url: this.props.post.image_url,
      tags: this.props.post.tags
     }
  }

  updateInput( event ){
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    let post = this.props.post
    return (
      <div>
      <i className="fa fa-pencil-square-o editButton" onClick={() => this.openModal()}> Edit</i>
      <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
      <div id="openModal2">
        <div className="modalPost" >
          <a onClick={() => this.closeModal()}> X </a>
          <form action={`/edit/${post.id}`} method='POST'>
            <div onChange={this.updateInput.bind(this)} className="formFields">
              <label> Title </label>
              <input className="createInput" type='text' name='title' value={this.state.title}></input>
              <label> Author </label>
              <input className="createInput" type='text' name='author' value={this.state.author} />
              <label> Caption </label>
              <textarea className="createInput" rows='4' name='snippet' value={this.state.snippet}></textarea>
              <label> Content </label>
              <textarea className="createInput" rows='4' name='blog_entry' value={this.state.blog_entry}></textarea>
              <label> Image </label>
              <input className="createInput" type='text' name='image_url' value={this.state.image_url} />
              <label> Tags </label>
              <input className="createInput" type='text' name='tags' value={this.state.tags} />
              <button type='submit' value='Submit' formMethod='post'></button>
            </div>
          </form>
        </div>
      </div>
      <p><button onClick={() => this.closeModal()}> Close </button></p>
    </Modal>
    </div>
    )
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

}
