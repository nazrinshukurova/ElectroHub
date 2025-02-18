import React from "react";
import Data from "./components/Data/Data";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import PopUpCard from "./components/PopUpCard/PopUpCard";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Data />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
