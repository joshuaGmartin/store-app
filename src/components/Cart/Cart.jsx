import { useOutletContext } from "react-router";
import CartCard from "./CartCard/CartCard";

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
    </>
  );
}

export default Cart;
