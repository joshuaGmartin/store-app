import { useContext } from "react";
import styles from "./CheckoutBtn.module.css";
import { Link } from "react-router";
import { CartContext } from "../../../App";

function CheckoutBtn() {
  const { userCart } = useContext(CartContext);

  return (
    <Link
      to="/checkout"
      className={`${userCart.length === 0 ? styles["disabled-Link"] : null} diagButton ${styles.checkoutBtn}`}
    >
      <button disabled={userCart.length === 0}>Checkout</button>
    </Link>
  );
}

export default CheckoutBtn;
