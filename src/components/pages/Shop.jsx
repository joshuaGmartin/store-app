import { useState, useEffect } from "react";

function Shop() {
  const [storeData, setStoreData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((jsonData) => {
        setStoreData(jsonData);
      });
  }, []);

  useEffect(() => {
    if (storeData) {
      //   console.table(storeData[0].image);
    }
  }, [storeData]);
  return (
    <>
      {storeData
        ? storeData.map((data) => {
            return (
              <img key={data.id} src={data.image} style={{ width: "100px" }} />
            );
          })
        : "loading..."}
    </>
  );
}

export default Shop;
