import { getCartTotal } from "../../../modules/handleCart";
import ContinueShoppingBtn from "../../SingleElements/ContinueShoppingBtn/ContinueShoppingBtn";
import CheckoutBtn from "../../SingleElements/CheckoutBtn/CheckoutBtn";
import styles from "./TotalSection.module.css";

function TotalSection({ userCart }) {
  const subtotal = getCartTotal(userCart);
  const shipping = 0;
  const taxRate = 0.05;
  const tax = subtotal * taxRate;

  return (
    <>
      <div>Subtotal: ${subtotal.toFixed(2)}</div>
      <div>Shipping: ${shipping.toFixed(2)}</div>
      <div>
        Estimated Tax ({taxRate * 100}%): ${(subtotal * 0.05).toFixed(2)}
      </div>
      <div>Total: ${(subtotal + shipping + tax).toFixed(2)}</div>
      <CheckoutBtn />
      <ContinueShoppingBtn />
    </>
  );
}

export default TotalSection;
