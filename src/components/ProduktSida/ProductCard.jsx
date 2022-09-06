import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ title, text }) => {
  return (
    <Link to={{ pathname: `/productPage/${text}` }} target="_parent">
      <div className="div_image">
        {/* <div className=""> */}
        <img src={title} />
        <p>{text}</p>
        {/* </div> */}
      </div>
    </Link>
  );
};

export default ProductCard;
