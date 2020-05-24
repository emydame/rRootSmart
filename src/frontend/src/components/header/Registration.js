/* eslint-disable quotes */
/*eslint quotes: ["error", "double"]*/
/*eslint-env es6*/
/* eslint-disable no-console */
/* eslint no-console: "error" */

import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../../styles/modal.css";
import { Redirect } from "react-router";
import { Link } from "react-router";

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null
    };

    this.closeRegistration = this.closeRegistration.bind(this);
    this.submitRegistration = this.submitRegistration.bind(this);
    this.mapStateToLGA = this.mapStateToLGA.bind(this);
    this.mapLGAToTown = this.mapLGAToTown.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  closeRegistration() {
    this.props.closeModal();
  }

  submitRegistration(event) {
    this.props.register(event);
  }

  mapStateToLGA(event) {
    console.log(this.props);
    this.props.mapStateToLga(event);
  }

  mapLGAToTown(event) {
    this.props.mapLGAToTown(this);
  }

  handleBlur(event) {
    this.props.handleBlur(event);
  }

  handleConfirmPasswordChange(event) {
    this.props.handleConfirmPasswordChange(event);
  }

  handlePasswordChange(event) {
    this.props.handlePasswordChange(event);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <>
        {/** Registration Modal */}
        <Modal
          size="xl"
          show={this.props.showModal}
          onHide={this.closeRegistration}
          dialogClassName="modal-90w"
          aria-labelledby="registration"
          bsPrefix="modal"
        >
          <Modal.Header closeButton bsPrefix="modal-header">
            <Modal.Title id="registration" className="text-light">
              Registration
            </Modal.Title>
          </Modal.Header>
          <Modal.Body bsPrefix="modal-body">
            <Form name="registration">
              <Form.Text className="text-danger h4 d-none" bsPrefix="form-text">
                Fields mark * are required
              </Form.Text>

              <Row>
                <Col>
                  <Form.Group controlId="formBasicText1">
                    <Form.Label className="font-weight-bold">
                      First Name<sup className="text-danger">*</sup>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" required name="firstName" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicText2">
                    <Form.Label className="font-weight-bold">
                      Last Name<sup className="text-danger">*</sup>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" required name="lastName" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="formBasicText3">
                    <Form.Label className="font-weight-bold">Other Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter other name" name="otherName" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicSelect">
                    <Form.Label className="font-weight-bold">
                      Select Type<sup className="text-danger">*</sup>
                    </Form.Label>
                    <Form.Control as="select" required name="type">
                      <option value="sme">SME</option>
                      <option value="investor">Investor</option>
                      <option value="regulator">Regulator</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="formBasicText4">
                    <Form.Label className="font-weight-bold">
                      Name Of Organization<sup className="text-danger">*</sup>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Name of Organization" required name="orgName" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicEmail2">
                    <Form.Label className="font-weight-bold">
                      Email address<sup className="text-danger">*</sup>
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required name="email" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="formBasicPassword2">
                    <Form.Text className="text-warning font-weight-bold">
                      Password including numbers, special characters is advised
                    </Form.Text>
                    <Form.Label className="font-weight-bold">
                      Password<sup className="text-danger">*</sup>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={this.handlePasswordChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicPassword3">
                    <Form.Label className="font-weight-bold">Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
                      name="confirmPassword"
                      onChange={this.handleConfirmPasswordChange}
                      onBlur={this.handleBlur}
                    />
                    <Form.Text
                      className="text-danger font-weight-bold d-none h5"
                      bsPrefix="form-text"
                      ref={this.confPassword}
                    >
                      Password doesnt match
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="formBasicCAC">
                    <Form.Label className="font-weight-bold">
                      CAC Number<sup className="text-danger">*</sup>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter CAC Number" name="cac" required />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group controlId="formBasicPhoneNum">
                    <Form.Label className="font-weight-bold">
                      Phone Number<sup className="text-danger">*</sup>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone Number" name="phoneNumber" required />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Text className="font-weight-bold h4 text-light">Business Address</Form.Text>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <Form.Group controlId="formBasicSelect2">
                    <Form.Label className="font-weight-bold">
                      Select State<sup className="text-danger">*</sup>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      required
                      ref={this.props._state}
                      onChange={this.mapStateToLGA}
                      name="state"
                    >
                      <option value="Abia">Abia</option>
                      <option value="Abuja">Abuja</option>
                      <option value="Adamawa">Adamawa</option>
                      <option value="Akwa Ibom">Akwa Ibom</option>
                      <option value="Anambra">Anambra</option>
                      <option value="Bauchi">Bauchi</option>
                      <option value="Bayelsa">Bayelsa</option>
                      <option value="Benue">Benue</option>
                      <option value="Borno">Borno</option>
                      <option value="Cross River">Cross River</option>
                      <option value="Delta">Delta</option>
                      <option value="Ebonyi">Ebonyi</option>
                      <option value="Enugu">Enugu</option>
                      <option value="Edo">Edo</option>
                      <option value="Ekiti">Ekiti</option>
                      <option value="Gombe">Gombe</option>
                      <option value="Imo">Imo</option>
                      <option value="Jigawa">Jigawa</option>
                      <option value="Kaduna">Kaduna</option>
                      <option value="Kano">Kano</option>
                      <option value="Katsina">Katsina</option>
                      <option value="Kebbi">Kebbi</option>
                      <option value="Kogi">Kogi</option>
                      <option value="Kebbi">Kebbi</option>
                      <option value="Lagos">Lagos</option>
                      <option value="Nasarawa">Nasarawa</option>
                      <option value="Niger">Niger</option>
                      <option value="Ogun">Ogun</option>
                      <option value="Ondo">Ondo</option>
                      <option value="Osun">Osun</option>
                      <option value="Oyo">Oyo</option>
                      <option value="Plateau">Plateau</option>
                      <option value="Rivers">Rivers</option>
                      <option value="Taraba">Taraba</option>
                      <option value="Yobe">Yobe</option>
                      <option value="Zamfara">Zamfara</option>
                    </Form.Control>
                  </Form.Group>
                </Col>

                <Col md="3">
                  <Form.Group controlId="formBasicSelect3">
                    <Form.Label className="font-weight-bold">
                      LGA<sup className="text-danger">*</sup>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      required
                      ref={this.props.lga}
                      onChange={this.mapLGAToTown}
                      name="lga"
                    ></Form.Control>
                  </Form.Group>
                </Col>

                <Col md="3">
                  <Form.Group controlId="formBasicSelect4">
                    <Form.Label className="font-weight-bold">
                      Town/Village<sup className="text-danger">*</sup>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      required
                      ref={this.props.town}
                      onChange={this.mapLGAToTown}
                      name="town"
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="formBasicPostal">
                    <Form.Label className="font-weight-bold">Postal Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone Number" name="phoneNumber" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicLandmark">
                    <Form.Label className="font-weight-bold">Nearest Landmark</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone Number" name="landmark" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="font-weight-bold">
                      Address<sup className="text-danger">*</sup>
                    </Form.Label>
                    <Form.Control as="textarea" rows="7" cols="" required name="address" />
                  </Form.Group>
                </Col>

                <Col md="auto">
                  <Form.Group controlId="exampleForm.Date">
                    <Form.Label className="font-weight-bold">
                      Date Registered<sup className="text-danger">*</sup>
                    </Form.Label>
                    <Form.Control type="date" required name="dateRegistered" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md="auto">{/**Implemet terms and conditon later */}</Col>
                <Col>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Agreed to terms and condition?"
                      className="font-weight-bold"
                      name="termsOfCondition"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Button variant="success" type="submit" className="btn-block" onClick={this.submitRegistration}>
                    Register
                  </Button>
                </Col>
                <Col>
                  <Button type="submit" variant="danger" onClick={this.closeRegistration} className="btn-block">
                    Cancel
                  </Button>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Registration;
