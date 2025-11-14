import { Star } from "lucide-react";
import styles from "./RatingStars.module.css";

export default function RatingStars({ rate }) {
  return (
    <div className={styles.starsContainer}>
      <Star fill="none" className={styles.star} />
    </div>
  );
}
