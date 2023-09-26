import ProductGridCollection from "./ProductGridCollection";
import "./ProductGrid.scss";

const ProductGrid = () => {
  return (
    <div className="product-grid-container">
      <h2>Shop by room</h2>
      <div className="product-grid">
        <ProductGridCollection
          imageSrc={"carousel1.jpg"}
          title={"Kitchen + Dining"}
        />
        <ProductGridCollection
          imageSrc={"carousel2.jpg"}
          title={"Living Room"}
        />
        <ProductGridCollection imageSrc={"carousel3.jpg"} title={"Bedroom"} />
      </div>
    </div>
  );
};

export default ProductGrid;
