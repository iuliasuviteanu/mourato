import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import ControlledCarousel from "./components/Carousel/Carousel";
import Header from "./Header/Header";
import ColumnGrid from "./components/Grid/ColumnGrid";
import { AiOutlineCar } from "react-icons/ai";
import { TfiPackage } from "react-icons/tfi";
import { MdOutlineDesignServices } from "react-icons/md";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import ImageBox from "./components/ImageBox/ImageBox";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <ControlledCarousel />
        <div className="grid-container page-width">
          <ColumnGrid
            icon={<AiOutlineCar />}
            title={"White Glove Delivery"}
            description={
              "Safely delivered to your room of choice by our white glove assembly team, with packaging removed for your convenience"
            }
          />
          <ColumnGrid
            icon={<TfiPackage />}
            title={"Fast Shipping"}
            description={
              "Our in-stock pieces are delivered in 2-4 weeks so you can quickly make your house a home."
            }
          />
          <ColumnGrid
            icon={<MdOutlineDesignServices />}
            title={"White Glove Delivery"}
            description={
              "Safely delivered to your room of choice by our white glove assembly team, with packaging removed for your convenience"
            }
          />
        </div>
        <div className="page-width">
          <ProductGrid />
        </div>
        <NewArrivals />
        <div className="insta-container">
          <div className="insta-container-info">
            <h2>
              Follow us on Instagram
              <a href="https://www.instagram.com/mourato.shop/">
                @mourato.shop
              </a>
            </h2>
          </div>
          <div className="insta-container-images">
            <ImageBox
              instagramLink="https://www.instagram.com/mourato.shop/"
              imageUrl="images/instagram1.jpeg"
            />
            <ImageBox
              instagramLink="https://www.instagram.com/mourato.shop/"
              imageUrl="images/instagram2.jpeg"
            />
            <ImageBox
              instagramLink="https://www.instagram.com/mourato.shop/"
              imageUrl="images/instagram3.jpeg"
            />
            <ImageBox
              instagramLink="https://www.instagram.com/mourato.shop/"
              imageUrl="images/instagram4.jpeg"
            />
            <ImageBox
              instagramLink="https://www.instagram.com/mourato.shop/"
              imageUrl="images/instagram5.jpeg"
            />
            <ImageBox
              instagramLink="https://www.instagram.com/mourato.shop/"
              imageUrl="images/instagram3.jpeg"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
