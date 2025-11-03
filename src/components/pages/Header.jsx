import { Link } from "react-router";

function Header() {
  return (
    <>
      <h1>the.warehouse.store</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </>
  );
}

export default Header;
