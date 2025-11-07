import { getCartTotal } from "../../../../modules/handleCart";
import { Link } from "react-router";
import styles from "./CheckoutTotalSection.module.css";

function CheckoutTotalSection({ userCart }) {
  const subtotal = getCartTotal(userCart);
  let shipping = userCart.length === 0 ? 0 : 12;
  const taxRate = 0.05;
  const tax = subtotal * taxRate;

  return (
    <>
      <div>Subtotal: ${subtotal.toFixed(2)}</div>
      <div>Shipping (flat fee): ${shipping.toFixed(2)}</div>
      <div>
        Estimated Tax ({taxRate * 100}%): ${(subtotal * 0.05).toFixed(2)}
      </div>
      <div>Total: ${(subtotal + shipping + tax).toFixed(2)}</div>
      <button>
        <Link to="/">Place Order</Link>
      </button>
      <button>
        <Link to="/cart">Back to Cart</Link>
      </button>
    </>
  );
}

export default CheckoutTotalSection;
