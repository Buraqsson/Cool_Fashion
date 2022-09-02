import React from "react";
import Hero from "../Hero/Hero";
import ProductMenu from "../ProduktSida/ProductMenu";
import "./Main.css";
import SocialMediaMenu from "../SocialMediaCard/SocialMediaMenu";

const Main = () => {
  let dataBase = [
    {
      title: "https://via.placeholder.com/240x350?text=ProductCard",

      text: "New in",
    },
    {
      title: "https://via.placeholder.com/240x350?text=ProductCard",

      text: "Best Sellers",
    },
    {
      title: "https://via.placeholder.com/240x350?text=ProductCard",

      text: "Tops",
    },
    {
      title: "https://via.placeholder.com/240x350?text=ProductCard",

      text: "T-shirts",
    },

    {
      title: "https://via.placeholder.com/240x350?text=ProductCard",

      text: "Sweatshirts",
    },
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
  ];

  let socialMediaDataBase = [
    {
      title: "https://via.placeholder.com/240x350",
    },
    {
      title: "https://via.placeholder.com/240x350",
    },
  ];

  return (
    <div>
      <Hero />
      <div>
        <ProductMenu dataBase={dataBase} />
        
        <SocialMediaMenu />
      </div>
    </div>
  );
};

export default Main;
