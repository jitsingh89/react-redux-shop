import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import { Product } from "./Product";

export const ProductListing = () => {
  const products = useSelector((state) => state);
  const disptch = useDispatch();
  const fetchProducts = async () => {
    const url = "https://fakestoreapi.com/products";
    const response = await axios
      .get(url)
      .catch((err) => console.log("Err", err));
    disptch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products : ", products);

  return (
    <div className="ui grid container">
      {!products ? "Loading..." : <Product />}
    </div>
  );
};
