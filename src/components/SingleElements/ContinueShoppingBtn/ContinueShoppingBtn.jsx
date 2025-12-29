import styles from "./ContinueShoppingBtn.module.css";
import { Link } from "react-router";
import { useContext } from "react";
import { ShopContext } from "../../../App";

function ContinueShoppingBtn() {
  const { shopURL } = useContext(ShopContext);

  return (
    <Link to={shopURL} className="diagButton">
      <button>Continue shopping</button>
    </Link>
  );
}

export default ContinueShoppingBtn;
