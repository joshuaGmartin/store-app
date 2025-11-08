import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { CartContext } from "../../../App";
import styles from "./Product.module.css";

function Product() {
  // if id no in itemsData, navigate to error

  const [itemsData, setItemsData] = useState(null);
  const { userCart, setUserCart } = useContext(CartContext);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((jsonData) => {
        setItemsData(jsonData);
      });
  }, []);

  return <>{id}</>;
}

export default Product;
