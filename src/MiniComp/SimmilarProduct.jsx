import axios from "axios";
import React, { useState, useEffect } from "react";
import { url } from "../Address";
import PopulerProductComp from "../Screens/Home/MiniComp/Products/PopulerProductComp";


function SimmilarProduct() {
  const { baseUrl, route, getAllProduct } = url;

  const [products, setProducts] = useState([]);

  // get all product
  const allProduct = async () => {
    await axios
      .get(baseUrl + route + getAllProduct)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //render in every compose
  useEffect(() => {
    allProduct();
  }, []);
  return <PopulerProductComp data={products} />;
}

export default SimmilarProduct;
