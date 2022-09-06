import React from 'react';
import '../SocialMediaCard/SocialMedia.css';
import NewProducts from './NewProducts';

const NewProductMenu = ({ newProducts }) => {
  return (
    <div>
      {newProducts.map(({ title, text }, i) => (
        <NewProducts title={title} text={text} key={i} />
      ))}
    </div>
  );
};

export default NewProductMenu;
