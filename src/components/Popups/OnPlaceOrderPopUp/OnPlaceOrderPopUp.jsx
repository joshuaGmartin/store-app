import { useContext } from "react";
import { CartContext } from "../../../App.jsx";
import { ShopContext } from "../../../App.jsx";
import { Link } from "react-router";
import styles from "./OnPlaceOrderPopUp.module.css";

function OnPlaceOrderPopUp() {
  const { setUserCart } = useContext(CartContext);
  const { setShopURL } = useContext(ShopContext);

  function handleClosePopup() {
    setUserCart([]);
    setShopURL("/shop");
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.popupWrapper}>
        <div className={styles.popup}>
          <div className={styles.message}>Thank you for your order!</div>
          <Link
            to="/"
            onClick={handleClosePopup}
            className={`${styles["close-popup-button"]} diagButton`}
          >
            <button className={styles["close-popup-button"]}>Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OnPlaceOrderPopUp;
