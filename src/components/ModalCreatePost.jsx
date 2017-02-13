import React, { Component } from 'react'
import Modal from './Modal.jsx'

export default class ModalCreatePost extends Component {

  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  render() {
    return (
      <div>
      <i className="fa fa-pencil-square-o" onClick={() => this.openModal()} />
      <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
      <div id="openModal1">
        <div className="modalPost">
          <a onClick={() => this.closeModal()}> X </a>
          <form action='/create' method='POST'>
            <div className="formFields">
              <label> Title </label>
              <input className="createInput" type='text' name='title' placeholder='Title for your post' />
              <label> Author </label>
              <input className="createInput" type='text' name='author' placeholder='Who are you?' />
              <label> Caption </label>
              <textarea className="createInput" rows='4' name='snippet' placeholder='Short summary'></textarea>
              <label> Content </label>
              <textarea className="createInput" rows='4' name='blog_entry' placeholder='Enter blog post'></textarea>
              <label> Image </label>
              <input className="createInput" type='text' name='image_url' placeholder='Enter image url' />
              <label> Tags </label>
              <input className="createInput" type='text' name='tags' placeholder='tags' />
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
