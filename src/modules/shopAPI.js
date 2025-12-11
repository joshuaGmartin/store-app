export async function fetchAllProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) throw new Error("Failed to fetch products");

  return response.json();
}

export async function fetchProduct(itemID) {
  // only 20 items in fakestoreapi
  if (!(itemID >= 1) || !(itemID <= 20)) {
    throw new Error("Product ID does not exist");
  }

  const response = await fetch(`https://fakestoreapi.com/products/${itemID}`);
  if (!response.ok) throw new Error("Failed to fetch product");

  return response.json();
}
