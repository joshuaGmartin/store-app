import styles from "./HomeProductCard.module.css";
import { Link } from "react-router";
import RatingStars from "../../../SingleElements/RatingStars/RatingStars";

function HomeProductCard({ itemData }) {
  return (
    <div className={styles.card}>
      <div className={styles.topSection}>
        <div className={styles.imgWrapper}>
          <img src={itemData.image} />
        </div>
        <div className={styles.info}>
          <h3>{itemData.title}</h3>
          <div className={styles.stars}>
            <RatingStars rate={itemData.rating.rate} />
          </div>
          <p className={styles.price}>${itemData.price.toFixed(2)}</p>
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
