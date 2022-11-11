import React from "react";

const ProductInfo = ({ name, price, description }) => {
  return (
    <div>
      <p className="name">{name}</p>
      <p className="price">{price}</p>
      <p>{description}</p>
    </div>
  );
};

export default ProductInfo;
