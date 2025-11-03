import ShopCard from "../ShopCard/ShopCard.jsx";
import { useState, useEffect } from "react";

function Shop() {
  const [itemsData, setItemsData] = useState(null);

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
            return <ShopCard key={itemData.id} itemData={itemData} />;
          })
        : "loading..."}
    </>
  );
}

export default Shop;
