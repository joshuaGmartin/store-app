import { useContext, useState } from "react";
import { getCartTotal } from "../../../../modules/handleCart";
import { Link } from "react-router";
import OnPlaceOrderPopUp from "../../../Popups/OnPlaceOrderPopUp/OnPlaceOrderPopUp";
import styles from "./CheckoutTotalSection.module.css";
import { CartContext } from "../../../../App";

function CheckoutTotalSection() {
  const { userCart } = useContext(CartContext);

  const [showPopup_onPlaceOrder, setShowPopup_onPlaceOrder] = useState(false);
  const subtotal = getCartTotal(userCart);

  let shipping = userCart.length === 0 ? 0 : 12;
  const taxRate = 0.05;
  const tax = subtotal * taxRate;

  function handlePlaceOrder() {
    setShowPopup_onPlaceOrder(true);
  }

  return (
    <div>
      <div className={styles.checkoutTotalSection}>
        <div className={styles.totalsLines}>
          <div className={styles.totalsLine}>
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className={styles.totalsLine}>
            <span>Shipping (flat fee):</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className={styles.totalsLine}>
            <span>Estimated Tax ({taxRate * 100}%):</span>
            <span>${(subtotal * 0.05).toFixed(2)}</span>
          </div>
          <hr />
          <div className={styles.totalsLine}>
            <span>Total:</span>
            <span>${(subtotal + shipping + tax).toFixed(2)}</span>
          </div>
        </div>
        <div className={styles.buttons}>
          <button
            className={`${styles["place-order-button"]} diagButton`}
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
          <Link
            to="/cart"
            className={`${styles["back-to-cart-button"]} diagButton`}
          >
            <button>Back to Cart</button>
          </Link>
        </div>
      </div>
      {showPopup_onPlaceOrder && <OnPlaceOrderPopUp />}
    </div>
  );
}

export default CheckoutTotalSection;
