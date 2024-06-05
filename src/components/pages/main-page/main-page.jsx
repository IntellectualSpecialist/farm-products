import React from "react";
import About from "/src/components/blocks/about/about";
import Features from "/src/components/blocks/features/features";
// import "./styles.css";

function MainPage({features}) {
  return (
    <>
      <About />
      <Features features={features}/>
    </>
  );
}

export default MainPage;
