import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router";
import { CartContext } from "../../../App";
import ContinueShoppingBtn from "../../SingleElements/ContinueShoppingBtn/ContinueShoppingBtn";
import { addToCart } from "../../../modules/handleCart";
import styles from "./Product.module.css";

function Product() {
  // if id no in itemData, navigate to error

  const [itemData, setItemData] = useState(null);
  const { userCart, setUserCart } = useContext(CartContext);
  const { itemID } = useParams();
  const [quantity, setQuantity] = useState(1);

  function handleAddToCart() {
    if (quantity === "") {
      console.error("must enter quantity");
      return;
    }

    addToCart(itemData, quantity, userCart, setUserCart);
  }

  function handleArrowUp() {
    setQuantity((prev) => prev + 1);
  }

  function handleArrowDown() {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemID}`)
      .then((response) => response.json())
      .then((jsonData) => {
        setItemData(jsonData);
      });
  }, []);

  return (
    <>
      {itemData ? (
        <div className={styles.card}>
          <img src={itemData.image} />
          <h3>{itemData.title}</h3>
          <p>{itemData.description}</p>
          <p>{itemData.category}</p>
          <p>{itemData.rating.count}</p>
          <p>{itemData.rating.rate}</p>
          <p>${itemData.price.toFixed(2)}</p>
          <div>
            <span className={styles["arrow-container"]}>
              <ChevronDown
                className={styles.arrowIcon}
                onClick={handleArrowDown}
              />
            </span>
            <span className={styles.quantity}>{quantity}</span>
            <span className={styles["arrow-container"]}>
              <ChevronUp onClick={handleArrowUp} />
            </span>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
          <ContinueShoppingBtn />
        </div>
      ) : (
        "loading..."
      )}
    </>
  );
}

export default Product;
