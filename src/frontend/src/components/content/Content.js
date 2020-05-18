import React from "react";
import { Link } from "react-router-dom";
class Content extends React.Component {
  render() {
    return (
      
      <div className="mainContent">

          {/*  ------- ----   Testimonial display Section  ----------*/}

        <h3>Our Accomplishments</h3>
        
          <div class="row content">
            <div class="col">
              view lists of approved Projects for funding
              <br></br>
              <br></br>
              see eligibility criteria to <Link id="link" to="#">apply</Link>
            </div>
              <div class="col displayCon">
              $140,000 funds available for SMEs from The World bank 
              <br></br>
              <br></br>
              see eligibility criteria to <Link id="md-link" to="#">apply</Link>
            </div>
            <div class="col">
              The Federal Government of Nigeria Through the Central Bank
              has funded twenty three (23) SMEs for the last four months from 
              this platform. 
              <br></br>
              <br></br>
              <br></br>
              <Link id="link" to="#">View list</Link> of benefiting SMEs here 
            </div>
          </div>
          <br></br>
          <hr></hr>
          
          <br></br>
            {/*  ------- ----   -Sponsors Display section************ */}
          <div className="sponsors">
              <img 
                src="https://res.cloudinary.com/lordefid/image/upload/c_scale,h_30/v1589732622/Group_157_rzbgqx.png"
                alt="facebook-logo"
            />
              <img 
                src="https://res.cloudinary.com/lordefid/image/upload/c_scale,h_30/v1589732608/Andella_gmanxz.png"
                alt="andela-logo"
            />
              <img 
                src="https://res.cloudinary.com/lordefid/image/upload/c_scale,h_30/v1589732623/FirstBank_Logo_coyuui.jpg"
                alt="firstbank-logo"
            />
              <img 
                src="https://res.cloudinary.com/lordefid/image/upload/c_scale,h_30/v1589732624/paypal-logo-vector-download-400x400_yy1m3o.jpg"
                alt="paypal-logo"
            />
          </div>

      </div>
    );
  }
}

export default Content;
