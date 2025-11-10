import { LucideFileChartColumnIncreasing } from "lucide-react";

export function addToCart(itemData, quantity, userCart, setUserCart) {
  let newCart = [...userCart];

  if (hasExistingItem(itemData, newCart)) {
    newCart = addExistingItem(itemData, newCart, quantity);
  } else {
    newCart.push({ ...itemData, count: quantity });
  }

  setUserCart(newCart);
}

export function removeFromCart(itemID, userCart, setUserCart) {
  console.log("remove");
  console.table("userCart");
  console.table(userCart);

  const newCart = userCart.filter((cartItem) => cartItem.id !== itemID);
  console.table("newCart");
  console.table(newCart);

  setUserCart(newCart);
}

export function getCartTotal(userCart) {
  let total = 0;

  userCart.forEach((cartItem) => {
    total = total + cartItem.price * cartItem.count;
  });

  return total;
}

export function getNumItems(userCart) {
  let count = 0;

  userCart.forEach((cartItem) => {
    count = count + cartItem.count;
  });

  return count;
}

function addExistingItem(itemData, newCart, quantity) {
  return newCart.map((cartItem) => {
    if (itemData.id === cartItem.id) {
      return {
        ...cartItem,
        count: cartItem.count + quantity,
      };
    } else return cartItem;
  });
}

function hasExistingItem(itemData, newCart) {
  let result = false;

  newCart.forEach((cartItem) => {
    if (itemData.id === cartItem.id) result = true;
  });

  return result;
}
