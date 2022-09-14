const ProductCard = ({ title, text, key }) => {
  return (
    <div className='div_image'>
      <img src={title} />
      <p>{text}</p>
    </div>
  );
};

export default ProductCard;
