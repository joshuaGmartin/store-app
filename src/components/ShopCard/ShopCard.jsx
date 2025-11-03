import styles from "./ShopCard.module.css";

function ShopCard({ itemData }) {
  return (
    <div className={styles.card}>
      <img src={itemData.image} />
      <h3>{itemData.title}</h3>
      <p>{itemData.description}</p>

      {itemData.category}
      <div>
        {itemData.rating.rate}/5 - {itemData.rating.count} votes
      </div>
    </div>
  );
}

export default ShopCard;
