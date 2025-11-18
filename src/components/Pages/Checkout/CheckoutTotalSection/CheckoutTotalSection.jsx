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
    <>
      <div>
        <div>Subtotal: ${subtotal.toFixed(2)}</div>
        <div>Shipping (flat fee): ${shipping.toFixed(2)}</div>
        <div>
          Estimated Tax ({taxRate * 100}%): ${(subtotal * 0.05).toFixed(2)}
        </div>
        <div>Total: ${(subtotal + shipping + tax).toFixed(2)}</div>
        <button
          className={styles["place-order-button"]}
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
        <button>
          <Link to="/cart">Back to Cart</Link>
        </button>
      </div>
      {showPopup_onPlaceOrder && <OnPlaceOrderPopUp />}
    </>
  );
}

export default CheckoutTotalSection;
