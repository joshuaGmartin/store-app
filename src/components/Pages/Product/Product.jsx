import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { CartContext } from "../../../App";
import ContinueShoppingBtn from "../../SingleElements/ContinueShoppingBtn/ContinueShoppingBtn";
import styles from "./Product.module.css";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddToCartBtn from "../../SingleElements/AddToCartBtn/AddToCartBtn";
import Loading from "../../SingleElements/Loading/Loading";
import { fetchProduct } from "../../../modules/shopAPI";
import RatingStars from "../../SingleElements/RatingStars/RatingStars";

function Product() {
  const { itemID } = useParams();
  const [itemData, setItemData] = useState(null);
  const { userCart, setUserCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct(itemID).then((jsonData) => {
      setItemData(jsonData);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleArrowUp() {
    setQuantity((prev) => prev + 1);
  }

  function handleArrowDown() {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  }
  // no flash if bad id
  if (!(itemID >= 1) || !(itemID <= 20)) {
    return <ErrorPage />;
  } else {
    return (
      <div className={styles.productBody}>
        {itemData ? (
          <div className={styles.card}>
            <div className={styles.topSection}>
              <div className={styles.imgWrapper}>
                <img src={itemData.image} />
              </div>
              <div className={styles.rightSide}>
                <div>
                  <h3>{itemData.title}</h3>
                  <div className={styles.catAndStars}>
                    <h4>
                      {itemData.category.charAt(0).toUpperCase() +
                        itemData.category.slice(1)}
                    </h4>
                    <RatingStars rating={itemData.rating} />
                  </div>
                  <p className={styles.price}>${itemData.price.toFixed(2)}</p>
                  <p className={styles.description}>{itemData.description}</p>
                </div>
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
            <div className={styles.contShopBtnWrapper}>
              <ContinueShoppingBtn className={styles.contShopBtn} />
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default Product;
