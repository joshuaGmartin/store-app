import { useOutletContext } from "react-router";
import CartCard from "./CartCard/CartCard";
import TotalSection from "./TotalSection/TotalSection";

import styles from "./Cart.module.css";

function Cart() {
  const { userCart, setUserCart } = useOutletContext();

  return (
    <>
      {userCart.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div>
          {userCart.map((itemData) => {
            return (
              <CartCard
                key={itemData.id}
                itemData={itemData}
                userCart={userCart}
                setUserCart={setUserCart}
              />
            );
          })}
        </div>
      )}
      <div className={styles["total-section"]}>
        <TotalSection userCart={userCart} />
      </div>
    </>
  );
}

export default Cart;
