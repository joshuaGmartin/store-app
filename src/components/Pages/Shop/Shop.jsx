import { useState, useEffect } from "react";
import ShopCard from "./ShopCard/ShopCard.jsx";
import CategoryCheckBox from "./CategoryCheckBox/CategoryCheckBox.jsx";
import SortTypeInputs from "./SortTypeInputs/SortTypeInputs.jsx";
import { sortItems } from "../../../modules/util.js";
import styles from "./Shop.module.css";

function Shop() {
  const [itemsData, setItemsData] = useState(null);
  const [catData, setCatData] = useState(null);
  const [selectedCats, setSelectedCats] = useState([]);
  const [selectedSort, setSelectedSort] = useState("ratingDes");

  const sortTypes = ["price", "rating", "name"];

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

  //test
  // console.log(selectedSort);

  if (filteredItemsData)
    console.log(sortItems(filteredItemsData, selectedSort));

  return (
    <>
      {filteredItemsData ? (
        <>
          <button
            onClick={() => {
              setSelectedCats([]);
              setSelectedSort("ratingDes");
            }}
          >
            Reset
          </button>
          <div>
            Filter by:
            {catData.map((cat) => {
              return (
                <CategoryCheckBox
                  key={cat + "-cat"}
                  cat={cat}
                  selectedCats={selectedCats}
                  setSelectedCats={setSelectedCats}
                />
              );
            })}
          </div>
          <div>
            Sort by:{" "}
            {sortTypes.map((sortType) => {
              return (
                <SortTypeInputs
                  key={sortType}
                  sortType={sortType}
                  selectedSort={selectedSort}
                  setSelectedSort={setSelectedSort}
                />
              );
            })}
          </div>
          <div>
            {filteredItemsData.map((itemData) => {
              return <ShopCard key={itemData.id} itemData={itemData} />;
            })}
          </div>
        </>
      ) : (
        "loading..."
      )}
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
