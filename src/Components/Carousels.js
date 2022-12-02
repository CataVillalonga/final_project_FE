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
          src="https://images.unsplash.com/photo-1607196707151-2db8b71294ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y296eSUyMGNocmlzdG1hc3xlbnwwfHwwfHw%3D&w=1000&q=80"
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