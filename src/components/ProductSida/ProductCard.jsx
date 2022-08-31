import "./ProductCard.css";
import { Link } from "react-router-dom";
const ProductCard = ({ title, text }) => {
  return (
    <div className="div_image">
      {" "}
      {/* <ol className="row">
        <li className="col">
          <img src={title} />
         <p>{text}</p> 
        </li>
      </ol> */}
      <div className="">
        <Link to={{ pathname: "/tack" }}>
          <img src={title} />
        </Link>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ProductCard;
