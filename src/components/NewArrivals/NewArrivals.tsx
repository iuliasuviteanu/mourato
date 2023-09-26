import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./NewArrivals.scss";
const NewArrivals = () => {
  return (
    <div className="new-arrivals page-width">
      <h2>New Arrivals</h2>
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <div>
            <img
              style={{ width: "300px" }}
              src="images/carousel3.jpg"
              alt="new3"
            />
            <p>Price: $999</p>
          </div>
          <div>
            <img
              style={{ width: "300px" }}
              src="images/carousel2.jpg"
              alt="new2"
            />
            <p>Price: $999</p>
          </div>
          <div>
            <img
              style={{ width: "300px" }}
              src="images/carousel2.jpg"
              alt="new2"
            />
            <p>Price: $999</p>
          </div>
          <div>
            <img
              style={{ width: "300px" }}
              src="images/carousel2.jpg"
              alt="new2"
            />
            <p>Price: $999</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img
              style={{ width: "300px" }}
              src="images/carousel1.jpg"
              alt="new3"
            />
            <p>Price: $999</p>
          </div>
          <div>
            <img
              style={{ width: "300px" }}
              src="images/carousel2.jpg"
              alt="new2"
            />
            <p>Price: $999</p>
          </div>
          <div>
            <img
              style={{ width: "300px" }}
              src="images/carousel2.jpg"
              alt="new2"
            />
            <p>Price: $999</p>
          </div>
          <div>
            <img
              style={{ width: "300px" }}
              src="images/carousel2.jpg"
              alt="new2"
            />
            <p>Price: $999</p>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default NewArrivals;
