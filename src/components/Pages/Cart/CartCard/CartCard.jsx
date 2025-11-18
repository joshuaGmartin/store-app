import { useContext } from "react";
import { CartContext } from "../../../../App";
import { ChevronUp, ChevronDown } from "lucide-react";
import { addToCart, removeFromCart } from "../../../../modules/handleCart";
import { useNotice } from "../../../SingleElements/Notifications/Notifications";
import styles from "./CartCard.module.css";

function CartCard({ itemData }) {
  const { userCart, setUserCart } = useContext(CartContext);
  const { pushNotice } = useNotice();

  function handleRemoveFromCart() {
    removeFromCart(itemData.id, userCart, setUserCart);
    pushNotice("remove");
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
        <span className={styles["arrow-container"]}>
          <ChevronDown className={styles.arrowIcon} onClick={handleArrowDown} />
        </span>
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
