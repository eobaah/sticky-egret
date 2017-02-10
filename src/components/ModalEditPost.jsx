import React, { Component } from 'react'

export default class ModalEditPost extends Component {
  render() {
    return (
      <div id="openModal2" className="modalDialog">
        <div className="modalPost">
          <a className="close" href='close' title='Close'> X </a>
          <form action="/edit/:id" method='POST'>
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
    )
  }
}
