import { useEffect, useContext } from "react";
import { CartContext } from "../../../App";
import { useNavigate } from "react-router";
import CheckoutCard from "./CheckoutCard/CheckoutCard";
import CheckoutTotalSection from "./CheckoutTotalSection/CheckoutTotalSection";
import styles from "./Checkout.module.css";

function Checkout() {
  const { userCart } = useContext(CartContext);
  let navigate = useNavigate();

  // redirect on empty cart (user manually inputs checkout url)
  useEffect(() => {
    if (userCart.length === 0) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // no flash checkout if cart is empty
  if (userCart.length === 0) {
    return null;
  }

  return (
    <div className={styles.checkoutBodyWrapper}>
      <div className={styles.checkoutBody}>
        <h3 className={styles.topMessage}>Please review your order</h3>
        <div className={styles.headerAndCards}>
          <div className={styles.checkoutHeader}>
            <div className={styles.headerTitles}>
              <span>Item</span>
              <span>Quantity</span>
              <span> Subtotal</span>
            </div>
            <hr />
          </div>
          <div className={styles.cartCards}>
            {userCart.map((itemData) => {
              return (
                <div key={itemData.id}>
                  <CheckoutCard itemData={itemData} />
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
        <CheckoutTotalSection />
      </div>
    </div>
  );
}

export default Checkout;
