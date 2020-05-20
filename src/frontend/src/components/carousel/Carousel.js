import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Carousel extends React.Component {
  render() {
    return (
      <Container fluid className="carousel-warpper">
        <Row className="cap">
          <Col md="3" className="">
            <h3>Recent Updates</h3>
          </Col>
          <Col md="9" className="text-right">
            <h5 className="text-primary">Built with your needs in mind, Access your financial leverage everywhere.</h5>
          </Col>
        </Row>

        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          {/* images would be replaced with the desired image */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Transparency</h5>
                <p>This platform provides total transparency and accountability</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/flagged/photo-1560790959-94da781aa017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Team work</h5>
                <p>We have an inclusive working style, all opinions matters.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1570126646281-5ec88111777f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Condusive Working Enviroment</h5>
                <p>Our physical office is Condusive and humane.</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </Container>
    );
  }
}

export default Carousel;
