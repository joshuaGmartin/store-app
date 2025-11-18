import { ChevronUp, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { useContext, useState } from "react";
import styles from "./ShopCard.module.css";
import { CartContext } from "../../../../App";
import RatingStars from "../../../SingleElements/RatingStars/RatingStars";
import AddToCartBtn from "../../../SingleElements/AddToCartBtn/AddToCartBtn";

function ShopCard({ itemData }) {
  const { userCart, setUserCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  function handleArrowUp() {
    setQuantity((prev) => prev + 1);
  }

  function handleArrowDown() {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  }

  return (
    <div className={styles.card}>
      <img src={itemData.image} />
      <h3>{itemData.title}</h3>
      <button>
        <Link to={"/product/" + itemData.id}>View Product</Link>
      </button>
      <p>${itemData.price.toFixed(2)}</p>
      <RatingStars rate={itemData.rating.rate} />
      <div>
        {/* Deciding against manual input */}
        <span className={styles["arrow-container"]}>
          <ChevronDown className={styles.arrowIcon} onClick={handleArrowDown} />
        </span>
        <span className={styles.quantity}>{quantity}</span>
        <span className={styles["arrow-container"]}>
          <ChevronUp onClick={handleArrowUp} />
        </span>
        <AddToCartBtn
          itemData={itemData}
          quantity={quantity}
          userCart={userCart}
          setUserCart={setUserCart}
        />
      </div>
    </div>
  );
}

export default ShopCard;
