import { getCartTotal } from "../../../../modules/handleCart";
import ContinueShoppingBtn from "../../../SingleElements/ContinueShoppingBtn/ContinueShoppingBtn";
import CheckoutBtn from "../../../SingleElements/CheckoutBtn/CheckoutBtn";
import styles from "./TotalSection.module.css";
import { useContext } from "react";
import { CartContext } from "../../../../App";

function TotalSection() {
  const { userCart } = useContext(CartContext);

  const subtotal = getCartTotal(userCart);
  let shipping = userCart.length === 0 ? 0 : 12;
  const taxRate = 0.05;
  const tax = subtotal * taxRate;

  return (
    <div className={styles.totalsSection}>
      <div className={styles.totalsLines}>
        <div className={styles.totalsLine}>
          <span>Subtotal:</span>
          <span>
            $
            {subtotal.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
        <div className={styles.totalsLine}>
          <span>Shipping (flat fee):</span>
          <span>
            $
            {shipping.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
        <div className={styles.totalsLine}>
          <span>Estimated Tax ({taxRate * 100}%):</span>
          <span>
            $
            {(subtotal * 0.05).toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
        <hr />
        <div className={styles.totalsLine}>
          <span>Total:</span>
          <span>
            $
            {(subtotal + shipping + tax).toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
      </div>
      <div className={styles.buttons}>
        <CheckoutBtn />
        <ContinueShoppingBtn />
      </div>
    </div>
  );
}

export default TotalSection;
