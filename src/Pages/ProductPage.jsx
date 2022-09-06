import React from "react";
import Categories from "../components/Categories/Categories";

const ProductPage = ({ dataBase }) => {
  return (
    <div>
      <h1>Products</h1>
      <Categories dataBase={dataBase} />
    </div>
  );
};

export default ProductPage;
