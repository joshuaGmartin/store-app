import { useOutletContext } from "react-router";
import CheckoutCard from "./CheckoutCard/CheckoutCard";
import CheckoutTotalSection from "./CheckoutTotalSection/CheckoutTotalSection";
import styles from "./Checkout.module.css";

function Checkout() {
  const { userCart, setUserCart } = useOutletContext();

  return (
    <>
      <h3>Please review your order</h3>
      {userCart.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div>
          {userCart.map((itemData) => {
            return <CheckoutCard key={itemData.id} itemData={itemData} />;
          })}
        </div>
      )}
      <CheckoutTotalSection userCart={userCart} setUserCart={setUserCart} />
    </>
  );
}

export default Checkout;
