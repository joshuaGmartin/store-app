import styles from "./AddToCartBtn.module.css";
import { addToCart } from "../../../modules/handleCart";
import { useNotice } from "../Notifications/Notifications";

function AddToCartBtn({ itemData, quantity, userCart, setUserCart }) {
  const { pushNotice } = useNotice();

  function handleClick() {
    addToCart(itemData, quantity, userCart, setUserCart);
    pushNotice("add");
  }

  return (
    <div className={`${styles.addToCartBtn} diagButton`} onClick={handleClick}>
      Add to Cart
    </div>
  );
}

export default AddToCartBtn;
