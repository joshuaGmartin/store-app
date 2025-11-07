import { useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router";
import CheckoutCard from "./CheckoutCard/CheckoutCard";
import CheckoutTotalSection from "./CheckoutTotalSection/CheckoutTotalSection";
import styles from "./Checkout.module.css";

function Checkout() {
  const { userCart, setUserCart } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (userCart.length === 0) {
      navigate("/");
    }
  }, [userCart, navigate]);

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
