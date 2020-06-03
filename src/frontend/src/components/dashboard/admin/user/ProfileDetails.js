/* eslint-disable no-multi-str */
/* eslint-disable no-console */
/* eslint no-console: "error" */
import React from "react";
import { Upload, message, Button } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import reqwest from "reqwest";
// import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import EditProfile from "./EditProfile";



class ProfileDetails extends React.Component {
    render() {
    return (
      <>
      <div class="jumbotron p-4 p-md-5 text-dark rounded shadow-sm">
          <Row>
            <Col md="3" className="">
            <div class="text-center">
            <img src="https://res.cloudinary.com/lordefid/image/upload/c_scale,h_100/v1591025399/images_j7kyno.png" class="rounded" alt="..." fluid />
          </div>
            </Col>
            <Col>
            <div>
            </div>
            <div className="profile-title-text"> <strong >Admin Details</strong></div>
            <div class="form-row" controlId="userFirstName">
                    <div class="form-group col-md-4">
                      <label for="inputEmail4">First Name: </label>
                        <input type="text" data="" id="inputFirstName" value="Adam " />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputEmail4">Last Name: </label>
                        <input type="text" data="" id="inputFirstName" value="Oshimiole" />
                    </div>
                    <div class="form-group col-md-4 ">
                      <label for="inputEmail4">Other Name: </label>
                        <input type="text" data="" id="inputFirstName" value="Jagajaga" />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputEmail4">Reg. Date: </label>
                        <input type="text" data="" id="inputFirstName" value="1/06/2020" />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputEmail4">Phone No: </label>
                        <input type="text" data="" id="inputFirstName" value="08045453553" />
                    </div>
                    <div class="form-group col-md-4 ">
                      <label for="inputEmail4">Email:   </label>
                        <input type="text" data="" id="inputFirstName" value="jadajaga@fgn.net" />
                    </div>
                  </div>
                  <Row>
                    <Col md="12">
                      <div class="text-right">
                        <Button variant="success" type="submit" className="btn-block" onClick={this.EditProfile}>
                            <Link to="/admin/EditProfile"> Edit Profile</Link>
                        </Button>
                      </div>
                    </Col>
                  </Row>
            </Col>
          </Row>
        </div>

        <div class="row mb-2">
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 profile-title-text">More Info</strong>
                <Col>
                <div class="form-row" controlId="companyName">
                        <div class="form-group col-md-12">
                          <label for="inputAddress1">Address: </label>
                            <input type="text" data="" id="inputAddress1" value="Allway Boulevard, Lagos Coast" />
                        </div>
                        
                        <div class="form-group col-md-6">
                          <label for="inputState1">State: </label>
                            <input type="text" data="" id="inputState1" value="Lagos State" />
                        </div>
                        
                        <div class="form-group col-md-6">
                          <label for="inputLga">L.G.A: </label>
                            <input type="text" data="" id="inputLga" value="dangotegroup.org" />
                        </div>
                    </div>
                  </Col>
                  

                  <strong class="profile-title-text full">Manage Password</strong>
                  <Row>
                        <div class="form-group col-md-4">
                          <label for="inputEmail4">Old Password: </label>
                            <input type="text" class="" data="" id="inputCompanyPhone" class="form-control" value="" disabled />
                        </div>
                        <div class="form-group col-md-4">
                          <label for="inputEmail4">New Password: </label>
                            <input type="text" class="" data="" id="inputCompanyPhone" class="form-control" value="" disabled />
                        </div>
                        <div class="form-group col-md-4">
                          <label for="inputEmail4">Confirm Password: </label>
                            <input type="text" class="" data="" id="inputCompanyPhone" class="form-control" value="" disabled />
                        </div>
                      
                        {/* <div class="form-group col-md-6">
                          <Form.Check
                            type="checkbox"
                            label="Confirm Change?"
                            className="font-weight-bold terms-text"
                            name="termsOfCondition"/><br></br>
                        </div> */}
                        {/* <div class="form-group col-md-6 text-center">
                        <Button variant="success" type="submit" className="btn-block" onClick={this.upadtePassword}>
                          Update
                        </Button>
                        </div> */}
                    </Row>
                  </div>

            </div>
          </div>
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 profile-title-text">Investor Details</strong>
              <Col>
            <div class="form-row" controlId="companyName">
                    <div class="form-group col-md-12">
                      <label for="inputEmail4">Company Name: </label>
                        <input type="text" data="" id="inputFirstName" value="Dangote Group of Companies" />
                    </div>
                    
                    <div class="form-group col-md-4">
                      <label for="inputEmail4">Incorporation Date: </label>
                        <input type="text" data="" id="inputFirstName" value="1/06/1930" />
                    </div>
                    
                    <div class="form-group col-md-4">
                      <label for="inputEmail4">Email Address:   </label>
                        <input type="text" data="" id="inputCompanyEmail" value="dangotegroup.org" />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputEmail4">Company Phone: </label>
                        <input type="text" data="" id="inputCompanyPhone" value="+1 233 35355" />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputEmail4">RCC No: </label>
                        <input type="text" data="" id="inputFirstName" value="RCC2342543" />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputEmail4">Company ID.: </label>
                        <input type="text" data="" id="inputFirstName" value="Ad234535ED4" />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputEmail4">Company BVN: </label>
                        <input type="text" data="" id="inputFirstName" value="12345678921" />
                    </div>
                    <div class="form-group col-md-12">
                      <label for="inputEmail4">Company Address: </label>
                        <input type="text" data="" id="inputFirstName" value="456 EazyWay, Lagos" />
                        <br></br>
                        <br></br>
                    </div>
                  </div>
                </Col>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ProfileDetails;
