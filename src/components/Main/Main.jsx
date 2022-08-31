import React from 'react';
import Hero from '../Hero/Hero';
import ProductMenu from "../ProduktSida/ProductMenu";
import './Main.css';
const Main = () => {

  let dataBase = [
    {
      title: "https://via.placeholder.com/240x350",

      text: "New in",
    },
    {
      title: "https://via.placeholder.com/240x350",

      text: "Best Sellers",
    },{
      title: "https://via.placeholder.com/240x350",

      text: "Tops",
    },{
      title: "https://via.placeholder.com/240x350",

      text: "T-shirts",
    },
    
    {
      title: "https://via.placeholder.com/240x350",

      text: "Sweatshirts",
    }, {
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
    },
  ];

  return (
    <div>
      <Hero />
      <div>
       <ProductMenu dataBase={dataBase} />
      </div>
      
    </div>
  );
};

export default Main;
