import React from "react";
import Hero from "../Hero/Hero";
import ProductMenu from "../ProduktSida/ProductMenu";
import "./Main.css";
<<<<<<< HEAD
=======
import SocialMediaMenu from "../SocialMediaCard/SocialMediaMenu";

>>>>>>> efea3ea72fa41a6a698f63d04e940a9181d537cd
const Main = () => {
  let dataBase = [
    {
      title: "https://via.placeholder.com/240x350",

      text: "New in",
    },
    {
      title: "https://via.placeholder.com/240x350",

      text: "Best Sellers",
    },
    {
      title: "https://via.placeholder.com/240x350",

      text: "Tops",
    },
    {
      title: "https://via.placeholder.com/240x350",

      text: "T-shirts",
    },

    {
      title: "https://via.placeholder.com/240x350",

      text: "Sweatshirts",
    },
    {
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
<<<<<<< HEAD
=======
        <SocialMediaMenu />
>>>>>>> efea3ea72fa41a6a698f63d04e940a9181d537cd
      </div>
    </div>
  );
};

export default Main;
