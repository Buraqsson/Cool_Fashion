import ProductCard from "./ProductCard";

const Categories = ({ dataBase }) => {
  return (
    <div className="gridContainer">
      {dataBase.map(({ title, text }, i) => (
        <ProductCard title={title} text={text} key={i} />
      ))}
    </div>
  );
};

export default Categories;
