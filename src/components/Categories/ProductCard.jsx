const ProductCard = ({ text, title }) => {
  return (
    <div className="div_image">
      <img src={title} />
      <p>{text}</p>
    </div>
  );
};

export default ProductCard;
