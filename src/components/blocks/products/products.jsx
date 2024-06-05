import React, { useState, useRef } from "react";
import { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import ProductsList from "/src/components/ui/products-list/products-list";
import Form from "/src/components/blocks/form/form";
import { StyledSection } from "./styles.js";
import { VisuallyHiddenLabel } from "/src/components/styled";

function Products({ products }) {
  const swiperRef = useRef(null);
  const toSlide = (number) => {
    swiperRef.current.swiper.slideTo(number);
  };
  return (
    <StyledSection>
      <VisuallyHiddenLabel as="h1">Покупка продуктов</VisuallyHiddenLabel>
      {products?.length ? (
        <>
          <Form
            gridStart={1}
            gridEnd={2}
            products={products}
            onChange={(evt) =>
              evt.target.checked && toSlide(Number(evt.target.value))
            }
          />
          <ProductsList
            ref={swiperRef}
            products={products}
            gridStart={2}
            gridEnd={4}
          />{" "}
        </>
      ) : (
        <h1>Продукты были слишком вкусные и их разобрали.</h1>
      )}
    </StyledSection>
  );
}

export default Products;
