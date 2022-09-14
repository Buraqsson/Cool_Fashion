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
<<<<<<< HEAD
    /* {
      title: "https://via.placeholder.com/240x350",

      text: "Skirts",
    },
    {
      title: "https://via.placeholder.com/240x350",

      text: "Jeans & Trousers",
    },
    {
      title: "https://via.placeholder.com/240x350",

      text: "Coats & Jackets",
    },
    {
      title: "https://via.placeholder.com/240x350",

      text: "Shoes",
    },
    {
      title: "https://via.placeholder.com/240x350",

      text: "Accessories",
    },*/
=======
>>>>>>> eb03b7b74805796d75eb3bf56fdde7e6e220694d
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
<<<<<<< HEAD
=======
        <NewProductMenu newProducts={newProducts} />
>>>>>>> eb03b7b74805796d75eb3bf56fdde7e6e220694d
        <SocialMediaMenu />
        >>>>>>> efea3ea72fa41a6a698f63d04e940a9181d537cd
      </div>
    </div>
  );
};

export default Main;
