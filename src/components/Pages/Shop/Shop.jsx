import { useState, useEffect } from "react";
import ShopCard from "./ShopCard/ShopCard.jsx";
import CategoryCheckBox from "./CategoryCheckBox/CategoryCheckBox.jsx";
import styles from "./Shop.module.css";

function Shop() {
  const [itemsData, setItemsData] = useState(null);
  const [catData, setCatData] = useState(null);
  const [selectedCats, setSelectedCats] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((jsonData) => {
        setItemsData(jsonData);
      });
  }, []);

  useEffect(() => {
    if (itemsData) setCatData(getCats(itemsData));
  }, [itemsData]);

  let filteredItemsData;
  if (catData) {
    filteredItemsData = filterItemsByCats(itemsData, selectedCats);
  } else filteredItemsData = null;

  return (
    <>
      <div>{catData ? "Filter by: " : null}</div>
      <div>
        {catData
          ? catData.map((cat) => {
              return (
                <CategoryCheckBox
                  key={cat + "-cat"}
                  cat={cat}
                  selectedCats={selectedCats}
                  setSelectedCats={setSelectedCats}
                />
              );
            })
          : null}
      </div>
      <div>
        {filteredItemsData
          ? filteredItemsData.map((itemData) => {
              return <ShopCard key={itemData.id} itemData={itemData} />;
            })
          : "loading..."}
      </div>
    </>
  );
}

export default Shop;

function getCats(itemsData) {
  let cats = [];

  itemsData.forEach((itemData) => {
    if (!cats.includes(itemData.category)) {
      cats.push(itemData.category);
    }
  });

  return cats;
}

function filterItemsByCats(itemsData, selectedCats) {
  let filteredItemsData = [];
  if (selectedCats.length === 0) filteredItemsData = [...itemsData];
  else {
    filteredItemsData = itemsData.filter((itemData) =>
      selectedCats.includes(itemData.category)
    );
  }

  return filteredItemsData;
}
