export function addToCart(itemData, quantity, userCart, setUserCart) {
  let newCart = [...userCart];

  if (hasExistingItem(itemData, newCart)) {
    newCart = addExistingItem(itemData, newCart, quantity);
  } else {
    newCart.push({ id: itemData.id, count: quantity });
  }

  setUserCart(newCart);
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
