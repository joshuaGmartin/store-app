import styles from "./CheckoutCard.module.css";

function CheckoutCard({ itemData }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src={itemData.image} />
      </div>
      <div className={styles.titleSection}>
        <h3>{itemData.title}</h3>
      </div>
      <div className={styles.quantitySection}>
        <span className={styles.quantity}>x{itemData.count}</span>
      </div>
      <div className={styles.priceSection}>
        <span>
          $
          {(itemData.price * itemData.count).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
    </div>
  );
}

export default CheckoutCard;
