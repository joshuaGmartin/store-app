import { Star } from "lucide-react";
import styles from "./RatingStars.module.css";

export default function RatingStars({ rating }) {
  return getStars(rating);
}

function getStars(rating) {
  let tracker = rating.rate;

  // rating is out of 5 stars
  let starsArr = [];
  for (let i = 0; i < 5; i++) {
    // check rate: If fraction, then adjust width. If negative, then no star. Else, whole star.
    let precSVGtoCover;
    if (tracker > 0 && tracker < 1) precSVGtoCover = getFractionWidth(tracker);
    else if (tracker <= 0) precSVGtoCover = 100;
    else precSVGtoCover = 0;

    starsArr.push(
      <div key={i} className={styles.starContainer}>
        <Star className={styles.star} />
        <div
          className={styles.starCoverSlider}
          style={{ width: precSVGtoCover + "%" }}
        ></div>
        <div className={styles.starCover}></div>
        <Star className={styles.starOutline} />
      </div>
    );

    // decrement rate for next check
    tracker = Number((tracker - 1).toFixed(2));
  }

  return (
    <>
      <div className={styles.starsContainer}>
        {starsArr}
        <span>({rating.count})</span>
      </div>
    </>
  );
}

function getFractionWidth(fracRate) {
  //buffers found visually with css testing
  const rightBuffer = 8;
  const leftBuffer = 8;
  const starPrecWidth = 100 - rightBuffer - leftBuffer;

  // background slider stars on the right of the star svg
  const precSVGtoCover = 100 - (fracRate * starPrecWidth + leftBuffer);

  return precSVGtoCover.toFixed(0);
}
