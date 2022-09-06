import React from "react";
import Categories from "../components/Categories/Categories";

const ProductPage = ({ dataBase }) => {
  return (
    <div>
      <h2>Products</h2>
      <Categories dataBase={dataBase} />
    </div>
  );
};

export default ProductPage;
