import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class Dialogbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

  render() {
    let open = () => this.setState({show: true})
    let close = () => this.setState({show: false})
    return (
      <div className="dialog-box">
        <Button
          bsStyle="primary"
          className="button__name"
          onClick={open}
        >
          {this.props.name}
        </Button>

        <Modal show={this.state.show} onHide={close}>
          <Modal.Header closeButton>
            <Modal.Title className="modal__title">{this.props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.children}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close} className="button__cancel">Cancel</Button>
            <Button onClick={this.props.function} className="button__save">Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Dialogbox;
