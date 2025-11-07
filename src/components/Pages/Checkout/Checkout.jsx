import { useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router";
import CheckoutCard from "./CheckoutCard/CheckoutCard";
import CheckoutTotalSection from "./CheckoutTotalSection/CheckoutTotalSection";
import styles from "./Checkout.module.css";

function Checkout() {
  const { userCart, setUserCart } = useOutletContext();
  let navigate = useNavigate();

  // redirect on empty cart (user manually inputs checkout url)
  useEffect(() => {
    if (userCart.length === 0) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // no flash checkout if cart is empty
  if (userCart.length === 0) {
    return null;
  }

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
