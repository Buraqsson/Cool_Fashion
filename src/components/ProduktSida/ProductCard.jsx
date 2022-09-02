import "./ProductCard.css";
const ProductCard = ({ title, text }) => {
  return (
    
    <div className="div_image">
        {/* <div className=""> */}
          <img src={title} />
          <p>{text}</p> 
        {/* </div> */}

    </div>
  );
};

export default ProductCard;

