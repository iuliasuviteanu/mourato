import { FaInstagram } from "react-icons/fa";
import "./ImageBox.scss";

interface ImageBoxProps {
  imageUrl: string;
  instagramLink: string;
}
const ImageBox: React.FC<ImageBoxProps> = ({
  imageUrl,
  instagramLink,
}: ImageBoxProps) => {
  return (
    <div className="image-box page-width">
      <div className="image-box-img">
        <a href={instagramLink} target="_blank">
          <img src={imageUrl} alt="instagram 1" />
        </a>
      </div>
      <div className="image-box-icon">
        <FaInstagram />
      </div>
    </div>
  );
};

export default ImageBox;
