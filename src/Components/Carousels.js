import React from "react";
import {Carousel} from "react-bootstrap";
import '../styles/carusel.css'

function Carousels() {
  return (
    <section className="carousel-container">
    <Carousel className="Carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/5779177/pexels-photo-5779177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Christmas Dining</h3>
          <p>Get ready for the perfect Christmas family night.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1879061/pexels-photo-1879061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Cozy bedrooms</h3>
          <p>Winter is here, get the perfect winter decor for this cold and dark season.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/5859863/pexels-photo-5859863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Christmas Spirit.</h3>
          <p>Bring the Magic of Christmas to your living room.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  );
}

export default Carousels