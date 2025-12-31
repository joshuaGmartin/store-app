import { useContext } from "react";
import { CartContext } from "../../App";
import { getNumItems } from "../../modules/handleCart";
import { Link } from "react-router";
import styles from "./Header.module.css";
import { Github, ShoppingCart, Store, House, Menu } from "lucide-react";

function Header() {
  const { userCart } = useContext(CartContext);

  return (
    <div className={styles.header}>
      {/* =============================== non-mobile =============================== */}
      <div className={styles.headerNonMobile}>
        <Link to="/" className={styles.logo}>
          <h1>the.warehouse.store</h1>
        </Link>
        <nav className={styles.navBar}>
          <Link to="/">
            <House />
          </Link>
          <Link to="/shop">
            <Store />
          </Link>
          <Link className={styles.cartLink} to="/cart">
            <ShoppingCart />
            <div className={styles.cartCount}>{getNumItems(userCart)}</div>
          </Link>
          <a
            href="https://github.com/joshuaGmartin/store-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </nav>
      </div>

      {/* =============================== mobile =============================== */}
      <div className={styles.headerMobile}>
        <Link to="/" className={styles.logo}>
          <h1>the.warehouse.store</h1>
        </Link>
        <Menu className={styles.hamburger} />
        <nav className={styles.navBar}>
          <Link to="/">
            <House />
          </Link>
          <Link to="/shop">
            <Store />
          </Link>
          <Link className={styles.cartLink} to="/cart">
            <ShoppingCart />
            <div className={styles.cartCount}>{getNumItems(userCart)}</div>
          </Link>
          <a
            href="https://github.com/joshuaGmartin/store-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
