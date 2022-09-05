import './ProductCard.css';
const ProductCard = ({ title, text }) => {
  return (
    <div className='div_image'>
      <a href='/'>
        <img src={title} />
        <p>{text}</p>
      </a>
    </div>
  );
};

export default ProductCard;
