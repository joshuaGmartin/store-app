import styles from "./HomeProductCard.module.css";
import { Link } from "react-router";
import RatingStars from "../../../SingleElements/RatingStars/RatingStars";

function HomeProductCard({ itemData }) {
  return (
    <div className={styles.card}>
      <div className={styles.topSection}>
        <div className={styles.imgWrapper}>
          <Link
            className={styles.viewProdButton}
            to={"/product/" + itemData.id}
          >
            <img src={itemData.image} />
          </Link>
        </div>
        <div className={styles.info}>
          <Link
            className={styles.viewProdButton}
            to={"/product/" + itemData.id}
          >
            <h3>{itemData.title}</h3>
          </Link>
          <div className={styles.stars}>
            <RatingStars rating={itemData.rating} />
          </div>
          <p className={styles.price}>
            $
            {itemData.price.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>
      <Link
        className={`${styles.viewProdButton} diagButton`}
        to={"/product/" + itemData.id}
      >
        <button>View Product</button>
      </Link>
    </div>
  );
}

export default HomeProductCard;
