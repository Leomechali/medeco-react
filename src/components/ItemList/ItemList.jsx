import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="d-flex justify-content-between align-items-center flex-wrap p-3">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
