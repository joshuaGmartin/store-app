import styles from "./CheckoutBtn.module.css";
import { Link } from "react-router";

function CheckoutBtn({ userCart }) {
  return (
    <button disabled={userCart.length === 0}>
      <Link
        to="/checkout"
        className={userCart.length === 0 ? styles["disabled-Link"] : null}
      >
        Checkout
      </Link>
    </button>
  );
}

export default CheckoutBtn;
