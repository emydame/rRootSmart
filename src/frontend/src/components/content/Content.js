import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Content extends React.Component {
  render() {
    return (
      <Container>
          <div class="album py-5 bg-light">
          <div class="container">
            <h3>Our Achievements</h3><br></br>
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm contents">
                  <div class="card-body">
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm content">
                  <div class="card-body">
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm contents">
                  <div class="card-body">
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
              <div class="container conSponsors">
                <div class="row">
                <div class="col-md-2 sponsors-text"> Official Sponsors</div>
                  <div class="col-md-2">
                      <img
                        src="https://res.cloudinary.com/lordefid/image/upload/c_scale,h_30/v1589732624/paypal-logo-vector-download-400x400_yy1m3o.jpg"
                        alt="paypal-logo"
                      />
                  </div>
                  <div class="col-md-2">
                      <img
                        src="https://res.cloudinary.com/lordefid/image/upload/c_scale,h_30/v1589732623/FirstBank_Logo_coyuui.jpg"
                        alt="firstbank-logo"
                      />
                  </div>
                  <div class="col-md-2">
                      <div class="">
                      <img
                      src="https://res.cloudinary.com/lordefid/image/upload/c_scale,h_30/v1589732608/Andella_gmanxz.png"
                      alt="andela-logo"
                    />
                      </div>
                  </div>
                  <div class="col-md-2">
                      <img
                      src="https://res.cloudinary.com/lordefid/image/upload/c_scale,h_30/v1589732622/Group_157_rzbgqx.png"
                      alt="facebook-logo"
                      />
                </div>
                <div class="col-md-2"></div>
              </div>
          </div>
        </Container>
      
    );
  }
}

export default Content;
