import { getCartTotal } from "../../../../modules/handleCart";
import ContinueShoppingBtn from "../../../SingleElements/ContinueShoppingBtn/ContinueShoppingBtn";
import CheckoutBtn from "../../../SingleElements/CheckoutBtn/CheckoutBtn";
import styles from "./TotalSection.module.css";

function TotalSection({ userCart }) {
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
      <CheckoutBtn userCart={userCart} />
      <ContinueShoppingBtn />
    </>
  );
}

export default TotalSection;
