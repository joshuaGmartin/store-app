import styles from "./CheckoutBtn.module.css";
import { Link } from "react-router";

function CheckoutBtn() {
  return (
    <button>
      <Link to="/checkout">Checkout</Link>
    </button>
  );
}

export default CheckoutBtn;
