import { useContext } from "react";
import { CartContext } from "../../App";
import { getNumItems } from "../../modules/handleCart";
import { Link } from "react-router";
import styles from "./Header.module.css";

function Header() {
  const { userCart } = useContext(CartContext);

  return (
    <>
      <h1>the.warehouse.store</h1>
      <nav className={styles.navBar}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({getNumItems(userCart)})</Link>
      </nav>
    </>
  );
}

export default Header;
