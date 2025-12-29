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
      <div className={styles.leftSide}>
        <Link className={styles.imgWrapper} to={"/product/" + itemData.id}>
          <img src={itemData.image} />
        </Link>
        <div className={styles.viewProdButtonWrapper}>
          <Link className={"diagButton"} to={"/product/" + itemData.id}>
            <button>View Product</button>
          </Link>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.rightTopSide}>
          <Link className={styles.titleWrapper} to={"/product/" + itemData.id}>
            <h3>{itemData.title}</h3>
          </Link>
          <div className={styles.stars}>
            <RatingStars rating={itemData.rating} />
          </div>
          <p className={styles.price}>${itemData.price.toFixed(2)}</p>
        </div>
        {/* Deciding against manual input */}
        <div className={styles.addToCartSection}>
          <div className={styles.arrowsAndQuantity}>
            <span className={styles["arrow-container"]}>
              <ChevronDown
                className={styles.arrowIcon}
                onClick={handleArrowDown}
              />
            </span>
            <span className={styles.quantity}>{quantity}</span>
            <span className={styles["arrow-container"]}>
              <ChevronUp onClick={handleArrowUp} />
            </span>
          </div>
          <AddToCartBtn
            itemData={itemData}
            quantity={quantity}
            userCart={userCart}
            setUserCart={setUserCart}
          />
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
