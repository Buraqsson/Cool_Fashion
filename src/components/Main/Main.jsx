import React from 'react';
import Hero from '../Hero/Hero';
import ProductMenu from '../ProduktSida/ProductMenu';
import './Main.css';
import SocialMediaMenu from '../SocialMediaCard/SocialMediaMenu';
import NewProductMenu from '../NewProducts/NewProductMenu';

const Main = ({ newProducts }) => {
  let dataBase = [
    {
      title: 'https://via.placeholder.com/240x350?text=ProductCard',

      text: 'New in',
    },
    {
      title: 'https://via.placeholder.com/240x350?text=ProductCard',

      text: 'Best Sellers',
    },
    {
      title: 'https://via.placeholder.com/240x350?text=ProductCard',

      text: 'Tops',
    },
    {
      title: 'https://via.placeholder.com/240x350?text=ProductCard',

      text: 'T-shirts',
    },

    {
      title: 'https://via.placeholder.com/240x350?text=ProductCard',

      text: 'Sweatshirts',
    },
  ];

  let socialMediaDataBase = [
    {
      title: 'https://via.placeholder.com/240x350',
    },
    {
      title: 'https://via.placeholder.com/240x350',
    },
  ];

  console.log(newProducts);
  return (
    <div>
      <Hero />
      <div>
        <ProductMenu dataBase={dataBase} />
        <NewProductMenu newProducts={newProducts} />
        <SocialMediaMenu />
      </div>
    </div>
  );
};

export default Main;
