import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Redirect } from "react-router";
import "../../styles/modal.css";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        redirect: null
    };
    this.handleAbout = this.handleAbout.bind(this);
    this.closeAbout = this.closeAbout.bind(this);
  }

  handleAbout() {
    this.setState({ about: true });
  }

  closeAbout() {
    this.props.closeModal();
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <>
        {/*** About Modal */}
        <Modal
          size="md"
          show={this.props.showModal}
          onHide={this.closeAbout}
          dialogClassName="modal-90w"
          aria-labelledby="login"
          bsPrefix="modal"
        >
          <Modal.Header closeButton bsPrefix="modal-header">
            <Row>
              <Col className="text-center pr-1">
                <Modal.Title id="login" className="text-light">
                  About eazSME
                </Modal.Title>
              </Col>
            </Row>
          </Modal.Header>
          <Modal.Body bsPrefix="modal-body">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit enim architecto placeat. Expedita
                assumenda porro voluptatibus illum cum, quasi, deserunt repellendus optio labore libero facilis
                consequatur alias placeat itaque iste.
              </p>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default About;
