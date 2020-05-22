import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Carousel extends React.Component {
  render() {
    return (
        <div class="">
            {/* <div class="row">
              <div class="col-md-4">
                  <div class="body-text">
                    <h3>Recent Updates</h3>
                  </div>
              </div>
              <div class="col-md-8">
                  <div class="body-text">
                  <h5 className="text-primary">Built with your needs in mind, Access your financial leverage everywhere.</h5>
                  </div>
              </div>
          </div> */}

              <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                  <img src="https://res.cloudinary.com/lordefid/image/upload/v1589989860/carousel-3_j2auen.jpg" class="d-block w-100" alt="..."/>
                    <div class="container">
                      <div class="carousel-caption text-left">
                        <h1>Financial Leverage.</h1>
                  <p>We are ever ready to give you advice and guidance on acquiring and maximizing   funds to 
                  attain that business growth you have always dreamt about. We are your your instrument to a better financial prospect. 
                  </p>
                  <p><a class="btn btn-lg btn-primary" href="#" role="button">Read more</a></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2015/11/01/19/44/money-1017463_1280.jpg" class="d-block w-100" alt="..."/>
              <div class="container">
                <div class="carousel-caption">
                  <h1>We Build Bridges</h1>
                  <p>eaZSME builds bridges that connects businesses directly with a network of investors providing them with access to fast and flexible growth capital.</p>
                  <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
            <img src="https://res.cloudinary.com/lordefid/image/upload/c_scale,f_auto,h_757/v1589989872/carousel-1_e7h7w8.jpg" class="d-block w-100" alt="..."/>
              <div class="container">
                <div class="carousel-caption text-right">
                  <h1>One more for good measure.</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        </div>
    );
  }
}

export default Carousel;
