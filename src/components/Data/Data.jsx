import React, { useState, useEffect } from "react";
import Products from "../Products/Products";
import PopUpCard from "../PopUpCard/PopUpCard";

const Data = () => {
  const url = "https://fakestoreapi.in/api/products";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData.products || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = data
    .filter((item) => item.category === "audio")
    .map((item) => ({
      name: item.model,
      price: item.price,
      image: item.image,
      brand: item.brand,
      model: item.model,
      discount: item.discount,
      description: item.description,
      color: item.color,
      title: item.title,
    }));

  return (
    <div className="product-container">
      {filteredProducts.map((product, index) => (
        <Products key={index} product={product} />
      ))}
      {/* {filteredProducts.map((product, index) => (
        <PopUpCard key={index} product={product} />
      ))} */}
    </div>
  );
};

export default Data;
