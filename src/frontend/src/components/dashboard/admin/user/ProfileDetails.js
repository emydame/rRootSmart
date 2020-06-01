/* eslint-disable no-multi-str */
/* eslint-disable no-console */
/* eslint no-console: "error" */
import React from "react";
import { Upload, message, Button } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import reqwest from 'reqwest';
// import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class ProfileDetails extends React.Component {
    state = {
      loading: false,
    };

    handleChange = info => {
      if (info.file.status === 'uploading') {
        this.setState({ loading: true });
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl =>
          this.setState({
            imageUrl,
            loading: false,
          }),
        );
      }
    };

    render() {
      const uploadButton = (
        <div>
          {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div className="ant-upload-text">Upload</div>
        </div>
      );
      const { imageUrl } = this.state;
  
    return (
      <>
      <div class="jumbotron p-4 p-md-5 text-dark rounded shadow-sm">
          <Row>
            <Col md="3" className="orgAvatar">
              <div class="">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
              >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: "100%" }} /> : uploadButton}
              </Upload>
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
                            Edit Profile
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
                  

                  <strong class="profile-title-text">Manage Password</strong>
                  <Row>
                        <div class="form-group col-md-4">
                          <label for="inputEmail4">Old Password: </label>
                            <input type="text" class="" data="" id="inputCompanyPhone" value="" />
                        </div>
                        <div class="form-group col-md-4">
                          <label for="inputEmail4">New Password: </label>
                            <input type="text" class="" data="" id="inputCompanyPhone" value="" />
                        </div>
                        <div class="form-group col-md-4">
                          <label for="inputEmail4">Confirm Password: </label>
                            <input type="text" class="" data="" id="inputCompanyPhone" value="" />
                        </div>
                      
                        <div class="form-group col-md-6">
                          <Form.Check
                            type="checkbox"
                            label="Confirm Change?"
                            className="font-weight-bold terms-text"
                            name="termsOfCondition"/><br></br>
                        </div>
                        <div class="form-group col-md-6 text-center">
                        <Button variant="success" type="submit" className="btn-block" onClick={this.upadtePassword}>
                          Update
                        </Button>
                        </div>
                    </Row>
                  </div>

            </div>
          </div>
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 profile-title-text">Admin Details</strong>
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
