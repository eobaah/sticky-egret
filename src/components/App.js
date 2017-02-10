import React, { Component } from 'react'
import NavBar from './NavBar.jsx'
import MainBlog from './MainBlog.jsx'
import Sidebar from './Sidebar.jsx'
import { Modal, Button } from 'elemental'


export default class App extends Component {
  render() {
    return (
      <div className="topContainer">
        <NavBar />
        <div className="blogContainer">
          <MainBlog className="mainBlog" />
          <Sidebar />
          <Button onClick={this.toggleModal}>Launch Modal</Button>
          <Modal isOpen={this.state.modalIsOpen} onCancel={this.toggleModal} backdropClosesModal>
            <ModalHeader text="Lots of text to show scroll behavior" showCloseButton onClose={this.toggleModal} />
            <ModalBody>[...]</ModalBody>
            <ModalFooter>
              <Button type="primary" onClick={this.toggleModal}>Close modal</Button>
              <Button type="link-cancel" onClick={this.toggleModal}>Also closes modal</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    )
  }
}
