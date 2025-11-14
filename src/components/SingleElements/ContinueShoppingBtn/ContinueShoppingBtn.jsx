import styles from "./ContinueShoppingBtn.module.css";
import { Link } from "react-router";
import { useContext } from "react";
import { ShopContext } from "../../../App";

function ContinueShoppingBtn() {
  const { shopURL } = useContext(ShopContext);

  return (
    <button>
      {/* <Link to="/shop">Continue shopping</Link> */}
      <Link to={shopURL}>Continue shopping</Link>
    </button>
  );
}

export default ContinueShoppingBtn;
