import { useContext } from "react";
import { CartContext } from "../../../../App";
import { ChevronUp, ChevronDown, Trash2 } from "lucide-react";
import { addToCart, removeFromCart } from "../../../../modules/handleCart";
import { useNotice } from "../../../SingleElements/Notifications/Notifications";
import styles from "./CartCard.module.css";
import { Link } from "react-router";

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
      <Link className={styles.imgWrapper} to={"/product/" + itemData.id}>
        <img src={itemData.image} />
      </Link>
      <div className={styles.rightSection}>
        <div className={styles.topRightSection}>
          <Link className={styles.titleWrapper} to={"/product/" + itemData.id}>
            <h3>{itemData.title}</h3>
          </Link>
          <p className={styles.price}>${itemData.price.toFixed(2)}</p>
        </div>
        <div className={styles.bottomRightSection}>
          <span>Subtotal: ${(itemData.price * itemData.count).toFixed(2)}</span>
          <div className={styles.arrowsAndTrash}>
            {/* Deciding against manual input */}
            <div className={styles.arrows}>
              <span className={styles["arrow-container"]}>
                <ChevronDown
                  className={styles.arrowIcon}
                  onClick={handleArrowDown}
                />
              </span>
              <span className={styles.quantity}>{itemData.count}</span>
              <span className={styles["arrow-container"]}>
                <ChevronUp onClick={handleArrowUp} />
              </span>
            </div>
            <Trash2
              onClick={handleRemoveFromCart}
              className={styles.removeFromCartButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
