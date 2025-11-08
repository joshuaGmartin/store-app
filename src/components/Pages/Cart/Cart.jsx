import { useContext } from "react";
import { CartContext } from "../../../App";
import CartCard from "./CartCard/CartCard";
import TotalSection from "./TotalSection/TotalSection";

import styles from "./Cart.module.css";

function Cart() {
  const { userCart } = useContext(CartContext);

  return (
    <>
      {userCart.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div>
          {userCart.map((itemData) => {
            return <CartCard key={itemData.id} itemData={itemData} />;
          })}
        </div>
      )}
      <div className={styles["total-section"]}>
        <TotalSection />
      </div>
    </>
  );
}

export default Cart;
