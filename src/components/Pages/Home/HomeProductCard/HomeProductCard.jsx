import styles from "./HomeProductCard.module.css";
import { Link } from "react-router";
import RatingStars from "../../../SingleElements/RatingStars/RatingStars";

function HomeProductCard({ itemData }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgAndTitle}>
        <img src={itemData.image} />
        <h3>{itemData.title}</h3>
      </div>
      <div className={styles.info}>
        <div className={styles.starsAndPrice}>
          <p>${itemData.price.toFixed(2)}</p>
          <RatingStars className={styles.stars} rate={itemData.rating.rate} />
        </div>
        <button>
          <Link to={"/product/" + itemData.id}>View Product</Link>
        </button>
      </div>
    </div>
  );
}

export default HomeProductCard;
