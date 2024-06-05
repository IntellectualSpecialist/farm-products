import React, { useState } from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import featuresList from "/src/mocks/features-list";
import products from "/src/mocks/products";
import { GlobalStyle } from "./styles.js";
import { AppRoute } from "/src/const";
import MainPage from "/src/components/pages/main-page/main-page";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={featuresList} />} />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<BuyPage products={products} />}
            />
            <Route
              path="*"
              element={<h1>Ошибка 404. Страница не существует.</h1>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
