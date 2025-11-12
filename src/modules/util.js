export function sortItems(filteredItemsData, selectedSort) {
  /*
    sort types:

    priceAsc
    priceDes
    ratingAsc
    ratingDes
    nameAsc
    nameDes
    */

  switch (selectedSort) {
    case "priceAsc":
      return priceAscSort(filteredItemsData);
    case "priceDes":
      return priceDesSort(filteredItemsData);
    case "ratingAsc":
      return ratingAscSort(filteredItemsData);
    case "ratingDes":
      return ratingDesSort(filteredItemsData);
    case "nameAsc":
      return nameAscSort(filteredItemsData);
    case "nameDes":
      return nameDesSort(filteredItemsData);
    default:
      console.error("Sort type does not exist");
  }
}
// could mutate the original itemsData, but seems better to shallow copy here
function priceAscSort(filteredItemsData) {
  let filteredItemsData_sorted = [...filteredItemsData];
  filteredItemsData_sorted.sort((a, b) => a.price - b.price);
  return filteredItemsData_sorted;
}

function priceDesSort(filteredItemsData) {
  let filteredItemsData_sorted = [...filteredItemsData];
  filteredItemsData_sorted.sort((a, b) => b.price - a.price);
  return filteredItemsData_sorted;
}

function ratingAscSort(filteredItemsData) {
  let filteredItemsData_sorted = [...filteredItemsData];
  filteredItemsData_sorted.sort((a, b) => a.rating.rate - b.rating.rate);
  return filteredItemsData_sorted;
}

function ratingDesSort(filteredItemsData) {
  let filteredItemsData_sorted = [...filteredItemsData];
  filteredItemsData_sorted.sort((a, b) => b.rating.rate - a.rating.rate);
  return filteredItemsData_sorted;
}

function nameAscSort(filteredItemsData) {
  let filteredItemsData_sorted = [...filteredItemsData];
  filteredItemsData_sorted.sort((a, b) => a.title.localeCompare(b.title));
  return filteredItemsData_sorted;
}

function nameDesSort(filteredItemsData) {
  let filteredItemsData_sorted = [...filteredItemsData];
  filteredItemsData_sorted.sort((a, b) => b.title.localeCompare(a.title));
  return filteredItemsData_sorted;
}
