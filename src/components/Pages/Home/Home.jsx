import { useState, useEffect } from "react";
import { Link } from "react-router";
import { fetchAllProducts } from "../../../modules/shopAPI";
import { sortItems } from "../../../modules/util";
import Loading from "../../SingleElements/Loading/Loading";
import styles from "./Home.module.css";
import HomeProductCard from "./HomeProductCard/HomeProductCard";

function Home() {
  const [itemsData, setItemsData] = useState(null);
  const numItemsToShow = 3;

  useEffect(() => {
    fetchAllProducts().then((jsonData) => {
      setItemsData(jsonData);
    });
  }, []);

  let sortedItemsData = null;
  if (itemsData) {
    sortedItemsData = sortItems(itemsData, "ratingDes");
    // pull top three highest rated items
    sortedItemsData = sortedItemsData.slice(0, numItemsToShow);
  }

  return (
    <>
      <div className={styles.introText}>
        <h2 className={styles.intro1}>
          <i>welcome to</i>
        </h2>
        <h2 className={styles.intro2}>the.warehouse.store</h2>
        <h2 className={styles.intro3}>
          <i>
            where we find the <b>best</b> deals
          </i>
        </h2>
        <h2 className={styles.intro4}>on overstocked items</h2>
      </div>
      <div className={styles.intro5}>
        <Link className={`${styles.shopNowButton} diagButton`} to="/shop">
          <button>Shop now</button>
        </Link>
        <div className={styles.topItemsWrapper}>
          <h3 className={styles.bestSellerTitle}>Best Sellers</h3>
          {!sortedItemsData ? (
            <Loading />
          ) : (
            <div className={styles.bestSellersCards}>
              {sortedItemsData.map((itemData) => {
                return (
                  <HomeProductCard key={itemData.id} itemData={itemData} />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
