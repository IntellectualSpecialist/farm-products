import React from "react";
import Products from "/src/components/blocks/products/products";

function BuyPage({ products }) {
  return (
    <>
      <Products products={products} />
    </>
  );
}

export default BuyPage;
