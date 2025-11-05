import { useOutletContext } from "react-router";
import CartCard from "./CartCard/CartCard";
import { getCartTotal } from "../../modules/handleCart";

function Cart() {
  const { userCart, setUserCart } = useOutletContext();

  return (
    <>
      {userCart.map((itemData) => {
        return (
          <CartCard
            key={itemData.id}
            itemData={itemData}
            userCart={userCart}
            setUserCart={setUserCart}
          />
        );
      })}
      <div>Total: ${getCartTotal(userCart).toFixed(2)}</div>
    </>
  );
}

export default Cart;
