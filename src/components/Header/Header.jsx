import { Link } from "react-router";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <h1>the.warehouse.store</h1>
      <nav className={styles.navBar}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </>
  );
}

export default Header;
