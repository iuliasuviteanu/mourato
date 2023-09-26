import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.scss";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/carousel1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Shop All</h3>
          <a href="#"> VIEW PRODUCTS</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/carousel4.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Jules Collection</h3>
          <p> Where wabi-sabi minimalism meets Scandinavian comfort.</p>
          <a> SHOP NOW</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/carousel3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="text-center">
          <h3>Hmd Collection</h3>
          <p> Where wabi-sabi minimalism meets Scandinavian comfort.</p>
          <a>SHOW NOW</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default ControlledCarousel;
