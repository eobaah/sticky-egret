import React, { Component } from 'react'
import { Modal, Button } from 'elemental'

export default class CreateButton extends Component {
  render() {
    return (
        <a>
          <i className="fa fa-pencil-square-o" href='openModal1' onClick={this.toggleModal}></i>
        </a>
    )
  }
}
