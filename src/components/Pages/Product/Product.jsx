import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { CartContext } from "../../../App";
import ContinueShoppingBtn from "../../SingleElements/ContinueShoppingBtn/ContinueShoppingBtn";
import styles from "./Product.module.css";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddToCartBtn from "../../SingleElements/AddToCartBtn/AddToCartBtn";
import Loading from "../../SingleElements/Loading/Loading";

function Product() {
  const { itemID } = useParams();
  const [itemData, setItemData] = useState(null);
  const { userCart, setUserCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!(itemID >= 1) || !(itemID <= 20)) {
      //do nothing
    } else {
      fetch(`https://fakestoreapi.com/products/${itemID}`)
        .then((response) => response.json())
        .then((jsonData) => {
          setItemData(jsonData);
        });
    }

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
      <>
        {itemData ? (
          <div className={styles.card}>
            <img src={itemData.image} />
            <h3>{itemData.title}</h3>
            <p>{itemData.description}</p>
            <p>{itemData.category}</p>
            <p>{itemData.rating.count}</p>
            <p>{itemData.rating.rate}</p>
            <p>${itemData.price.toFixed(2)}</p>
            <div>
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
              {/* <button onClick={handleAddToCart}>Add to Cart</button> */}
              <AddToCartBtn
                itemData={itemData}
                quantity={quantity}
                userCart={userCart}
                setUserCart={setUserCart}
              />
            </div>
            <ContinueShoppingBtn />
          </div>
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

export default Product;
