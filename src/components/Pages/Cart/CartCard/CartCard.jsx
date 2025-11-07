import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import { addToCart, removeFromCart } from "../../../../modules/handleCart";
import styles from "./CartCard.module.css";

function CartCard({ itemData, userCart, setUserCart }) {
  // const [quantity, setQuantity] = useState(itemData.count);

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

  function handleRemoveFromCart() {
    removeFromCart(itemData.id, userCart, setUserCart);
  }

  function handleArrowUp() {
    addToCart(itemData, 1, userCart, setUserCart);
  }

  function handleArrowDown() {
    if (itemData.count === 1) return;
    addToCart(itemData, -1, userCart, setUserCart);
  }

  return (
    <div className={styles.card}>
      <img src={itemData.image} />
      <h3>{itemData.title}</h3>
      <span>Subtotal: ${(itemData.price * itemData.count).toFixed(2)}</span>
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
        {/* <span className={styles.quantity}>{quantity}</span> */}
        <span className={styles.quantity}>{itemData.count}</span>
        <span className={styles["arrow-container"]}>
          <ChevronUp onClick={handleArrowUp} />
        </span>
        <button onClick={handleRemoveFromCart}>Remove</button>
      </div>
    </div>
  );
}

export default CartCard;
