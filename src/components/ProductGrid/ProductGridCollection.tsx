import "./ProductGridCollection.scss";

interface ProductGridCollectionProps {
  imageSrc: string;
  title: string;
}
const ProductGridCollection: React.FC<ProductGridCollectionProps> = ({
  imageSrc,
  title,
}: ProductGridCollectionProps) => {
  return (
    <div className="product-grid-collection">
      <div className="product-grid-image">
        <img src={`images/${imageSrc}`} alt=" description" />
      </div>
      <div className="product-grid-collection-title">
        <a href="#">{title}</a>
      </div>
    </div>
  );
};

export default ProductGridCollection;
