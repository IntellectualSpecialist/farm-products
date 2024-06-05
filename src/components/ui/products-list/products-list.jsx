import React, { forwardRef } from "react";
import SwiperCore, { Scrollbar, Mousewheel } from "swiper/core";
import "swiper/swiper.scss";
import "swiper/css/scrollbar";
import ProductCard from "/src/components/ui/product-card/product-card";
import { StyledSwiper, StyleSlide } from "./styles";

SwiperCore.use([Scrollbar, Mousewheel]);

const ProductsList = forwardRef(({ products, gridStart, gridEnd }, ref) => {
  return (
    <StyledSwiper
      ref={ref}
      direction={"vertical"}
      slidesPerView={"auto"}
      spaceBetween={12}
      mousewheel={true}
      scrollbar={{ draggable: true }}
      freeMode
      watchSlidesProgress
      gridStart={gridStart}
      gridEnd={gridEnd}
    >
      {products.map((product) => (
        <StyleSlide key={product.id}>
          <ProductCard product={product} />
        </StyleSlide>
      ))}
    </StyledSwiper>
  );
});

export default ProductsList;
