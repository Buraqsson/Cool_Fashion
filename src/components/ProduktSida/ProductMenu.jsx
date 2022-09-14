import ProductCard from './ProductCard';
import './ProductMenu.css';

const ProductMenu = ({ dataBase }) => {
  return (
    <div className='gridContainer'>
      {dataBase.map(({ title, text }, i) => (
        <ProductCard title={title} text={text} key={i} />
      ))}
    </div>
  );
};

export default ProductMenu;
