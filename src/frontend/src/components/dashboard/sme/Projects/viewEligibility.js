import React from "react";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Redirect } from "react-router";
import "../../../../styles/modal.css";

class EligibilityCreteria extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null
      //show : false
    };
  }

  render() {
    return (
      <>
        <Modal>
          <Modal.Header>

          </Modal.Header>
          <Modal.Body>

          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default EligibilityCreteria;
