import styles from "./CheckoutCard.module.css";

function CheckoutCard({ itemData }) {
  return (
    <div className={styles.card}>
      <img src={itemData.image} />
      <h3>{itemData.title}</h3>
      <div>
        <span className={styles.quantity}>x{itemData.count}</span>
      </div>
      <span>${(itemData.price * itemData.count).toFixed(2)}</span>
    </div>
  );
}

export default CheckoutCard;
