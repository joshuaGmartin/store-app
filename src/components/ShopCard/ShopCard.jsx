import { useState } from "react";
import { addToCart } from "../../modules/handleCart";
import styles from "./ShopCard.module.css";

function ShopCard({ itemData, userCart, setUserCart }) {
  const [quantity, setQuantity] = useState(1);

  function handleOnChange(e) {
    const val = e.target.value;

    if (val === "") {
      setQuantity(val);
      return;
    } else if (isNaN(val)) return;
    else if (val < 1) return;
    else setQuantity(val);
  }

  function handleAddToCart() {
    if (quantity === "") {
      console.error("must enter quantity");
      return;
    }

    addToCart(itemData, quantity, userCart, setUserCart);
  }

  return (
    <div className={styles.card}>
      <img src={itemData.image} />
      <h3>{itemData.title}</h3>
      <p>{itemData.description}</p>
      <div>
        <label htmlFor={itemData.id}>
          Quantity:{" "}
          <input
            id={itemData.id}
            type="text"
            value={quantity}
            onChange={(e) => handleOnChange(e)}
          />
        </label>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ShopCard;
