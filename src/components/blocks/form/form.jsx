import React, { useState, useEffect } from "react";
import {
  Fieldset,
  Legend,
  Ul,
  VisuallyHiddenLabel,
} from "/src/components/styled";
import Price from "/src/components/ui/price/price";
import Checkbox from "/src/components/ui/checkbox/checkbox";
import {
  StyledForm,
  StyledLi,
  StyledField,
  PriceTitle,
  StyledButton,
  StyledLabel,
} from "./styles";

function Form({ products, onChange }) {
  const [address, setAddress] = useState("");
  const [productsList, setProductsList] = useState([]);
  const changeSelectProducts = (evt) => {
    let copy = Object.assign([], productsList);
    if (!evt.target.checked) {
      copy = copy.filter((prod) => prod.id !== Number(evt.target.value));
    } else {
      copy.push(products.find((prod) => prod.id === Number(evt.target.value)));
    }
    setProductsList(copy);
  };
  const price = productsList.reduce(
    (total, product) => total + product.price,
    0
  );
  const isFieldFill = address && productsList.length;
  const handleBuy = () => {
    alert(
      `Спасибо за покупку.
              Вы купили продукты: ${productsList.map(
                (prod) => ` ${prod.name} - ${prod.price} руб.\n`
              )}.
              Цена: ${price} руб.
              Адрес доставки: ${address}.`
    );
  };
  return (
    <StyledForm
      onSubmit={(evt) => {
        evt.preventDefault();
        handleBuy();
      }}
    >
      <Fieldset>
        <fieldset>
          <Legend>Выберите продукты</Legend>
          <Ul>
            {products.map((product) => (
              <StyledLi key={product.id}>
                <StyledLabel htmlFor={product.id}>{product.name}</StyledLabel>
                <Checkbox
                  value={product.id}
                  selectPrice={product.price}
                  onChange={onChange}
                  changeSelectProducts={changeSelectProducts}
                />
              </StyledLi>
            ))}
          </Ul>
        </fieldset>
      </Fieldset>
      <Fieldset>
        <fieldset>
          <Legend>Сделать заказ</Legend>
          <VisuallyHiddenLabel for="address">
            Введите адрес доставки
          </VisuallyHiddenLabel>
          <StyledField
            id={"address"}
            placeholder={"Введите адрес доставки"}
            onChange={(evt) => setAddress(evt.target.value)}
          />
          <div>
            <PriceTitle>Цена</PriceTitle>
            <Price value={price} />
          </div>
          <StyledButton disabled={!isFieldFill} type="submit">
            Купить
          </StyledButton>
        </fieldset>
      </Fieldset>
    </StyledForm>
  );
}

export default Form;
