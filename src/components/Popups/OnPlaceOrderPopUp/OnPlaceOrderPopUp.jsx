import { useContext } from "react";
import { CartContext } from "../../../App.jsx";
import { Link } from "react-router";
import styles from "./OnPlaceOrderPopUp.module.css";

function OnPlaceOrderPopUp() {
  const { setUserCart } = useContext(CartContext);

  function handleClosePopup() {
    setUserCart([]);
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div>thank you for your order</div>
        <button className={styles["close-popup-button"]}>
          <Link to="/" onClick={handleClosePopup}>
            X
          </Link>
        </button>
      </div>
    </div>
  );
}

export default OnPlaceOrderPopUp;
