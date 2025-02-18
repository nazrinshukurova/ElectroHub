import React from "react";
import Data from "./components/Data/Data";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import PopUpCard from "./components/PopUpCard/PopUpCard";

const App = () => {
  return (
    <div>
      <Header />
      <Data />
      <Products/>
      {/* <PopUpCard/> */}
    </div>
  );
};

export default App;
