import React from "react";
import Tabs from "/src/components/ui/tabs/tabs";
import Description from "/src/components/ui/description/description";
import Specifications from "/src/components/ui/specifications/specifications";
import { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { CardWrapper, Image, InfoWrapper, StyledTitle } from "./styles.js";

function ProductCard({ product }) {
  const tabs = [
    {
      title: "Описание",
      content: (
        <Description
          text={product.description}
          price={product.price}
          weight={product.weight}
        />
      ),
    },
    {
      title: "Характеристики",
      content: <Specifications specifications={product.specifications} />,
    },
    {
      title: "Свойства",
      content: <Specifications specifications={product.structure} />,
    },
  ];
  return (
    <CardWrapper>
      <Image src={product.image} width="248" height="248" alt="Фото товара" />
      <InfoWrapper>
        <StyledTitle level={TitleLevel.H2} size={TitleSize.small}>
          {product.name}
        </StyledTitle>
        <Tabs tabs={tabs} />
      </InfoWrapper>
    </CardWrapper>
  );
}

export default ProductCard;
