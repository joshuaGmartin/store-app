import { useState, useEffect } from "react";
import { useOutletContext } from "react-router";
import ShopCard from "./ShopCard/ShopCard.jsx";

function Shop() {
  const [itemsData, setItemsData] = useState(null);
  const { userCart, setUserCart } = useOutletContext();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((jsonData) => {
        setItemsData(jsonData);
      });
  }, []);

  return (
    <>
      {itemsData
        ? itemsData.map((itemData) => {
            return (
              <ShopCard
                key={itemData.id}
                itemData={itemData}
                userCart={userCart}
                setUserCart={setUserCart}
              />
            );
          })
        : "loading..."}
    </>
  );
}

export default Shop;
