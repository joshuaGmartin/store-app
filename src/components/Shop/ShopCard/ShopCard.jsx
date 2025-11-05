import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import { addToCart } from "../../../modules/handleCart";
import styles from "./ShopCard.module.css";

function ShopCard({ itemData, userCart, setUserCart }) {
  const [quantity, setQuantity] = useState(1);

  // Deciding against manual input
  // function handleOnChange(e) {
  //   const val = e.target.value;

  //   if (val === "") {
  //     setQuantity(val);
  //     return;
  //   } else if (isNaN(val)) return;
  //   else if (val < 1) return;
  //   else setQuantity(val);
  // }

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

  return (
    <div className={styles.card}>
      <img src={itemData.image} />
      <h3>{itemData.title}</h3>
      <p>{itemData.description}</p>
      <p>${itemData.price.toFixed(2)}</p>
      <div>
        {/* Deciding against manual input */}
        {/* <label htmlFor={itemData.id}>
          Quantity:{" "}
          <input
            id={itemData.id}
            type="text"
            value={quantity}
            onChange={(e) => handleOnChange(e)}
          />
        </label> */}
        <span className={styles["arrow-container"]}>
          <ChevronDown className={styles.arrowIcon} onClick={handleArrowDown} />
        </span>
        <span className={styles.quantity}>{quantity}</span>
        <span className={styles["arrow-container"]}>
          <ChevronUp onClick={handleArrowUp} />
        </span>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ShopCard;
