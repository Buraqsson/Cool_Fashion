import React from 'react';
import ProductCard from '../ProduktSida/ProductCard';
import '../ProduktSida/ProductMenu.css';
// import '../ProduktSida/ProductCard.css';
// import NewProducts from './NewProducts';

// const NewProductMenu = ({ newProducts }) => {
//   return (
//     <div>
//       {newProducts.map(({ title, text }, i) => (
//         <NewProducts title={title} text={text} key={i} />
//       ))}
//     </div>
//   );
// };

// export default NewProductMenu;

const NewProductMenu = ({ newProducts }) => {
  return (
    <div>
      <h2>New Arrivals</h2>
      <div className='gridContainer'>
        {newProducts.map(({ title, text }, i) => (
          <ProductCard title={title} text={'New ' + text + ++i} key={i} />
        ))}
      </div>
    </div>
  );
};

export default NewProductMenu;
