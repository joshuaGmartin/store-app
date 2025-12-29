import { useContext } from "react";
import { CartContext } from "../../../App";
import CartCard from "./CartCard/CartCard";
import TotalSection from "./TotalSection/TotalSection";
import styles from "./Cart.module.css";
import ContinueShoppingBtn from "../../SingleElements/ContinueShoppingBtn/ContinueShoppingBtn";

function Cart() {
  const { userCart } = useContext(CartContext);

  return (
    <div className={styles.cartBody}>
      <div className={styles.cartItems}>
        {userCart.length === 0 ? (
          <div className={styles.emptyCart}>
            <p>Your cart is empty</p>
            <ContinueShoppingBtn />
          </div>
        ) : (
          <div className={styles.cartCards}>
            {userCart.map((itemData) => {
              return <CartCard key={itemData.id} itemData={itemData} />;
            })}
          </div>
        )}
      </div>
      <div className={styles["total-section"]}>
        <TotalSection />
      </div>
    </div>
  );
}

export default Cart;
