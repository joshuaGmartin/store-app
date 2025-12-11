import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../../../App.jsx";
import { useLocation, useSearchParams } from "react-router";
import ShopCard from "./ShopCard/ShopCard.jsx";
import CategoryCheckBox from "./CategoryCheckBox/CategoryCheckBox.jsx";
import SortTypeInputs from "./SortTypeInputs/SortTypeInputs.jsx";
import { sortItems } from "../../../modules/util.js";
import styles from "./Shop.module.css";
import Loading from "../../SingleElements/Loading/Loading.jsx";
import { fetchAllProducts } from "../../../modules/shopAPI.js";

function Shop() {
  // ===================== handle shopURL context =====================
  const { setShopURL } = useContext(ShopContext);
  const location = useLocation();

  useEffect(() => {
    setShopURL(location.pathname + location.search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // ===================== handle search params =====================
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCats = searchParams.get("categories")?.split(",") || [];
  const selectedSort = searchParams.get("sort") || "ratingDes";

  function updateFilters(newCats, newSort) {
    const params = {};

    if (newCats.length > 0) params.categories = newCats.join(",");
    if (newSort) params.sort = newSort;

    setSearchParams(params);
  }

  function setSelectedCats(cat) {
    let newCats;

    if (selectedCats.includes(cat)) {
      newCats = selectedCats.filter((c) => c !== cat);
    } else {
      newCats = [...selectedCats, cat];
    }

    updateFilters(newCats, selectedSort);
  }

  function setSelectedSort(sort) {
    updateFilters(selectedCats, sort);
  }

  // ===================== handle shop data =====================
  const [itemsData, setItemsData] = useState(null);
  const [catData, setCatData] = useState(null);
  const sortTypes = ["price", "rating", "name"];

  // on mount, get items data via API call
  useEffect(() => {
    fetchAllProducts().then((jsonData) => {
      setItemsData(jsonData);
    });
  }, []);

  // if got items data, calc category data
  useEffect(() => {
    if (itemsData) setCatData(getCats(itemsData));
  }, [itemsData]);

  // once got category data, calc filtered data
  let filteredItemsData = null;
  if (catData) filteredItemsData = filterItemsByCats(itemsData, selectedCats);

  // once got filtered data, sort data and render
  let filteredItemsData_sorted = null;
  if (filteredItemsData)
    filteredItemsData_sorted = sortItems(filteredItemsData, selectedSort);

  // test
  // return <Loading />;

  return (
    <>
      {filteredItemsData_sorted ? (
        <>
          <button
            onClick={() => {
              updateFilters([], "ratingDes");
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
            {filteredItemsData_sorted.map((itemData) => {
              return <ShopCard key={itemData.id} itemData={itemData} />;
            })}
          </div>
        </>
      ) : (
        <Loading />
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
