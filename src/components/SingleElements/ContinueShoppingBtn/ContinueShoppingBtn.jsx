import styles from "./ContinueShoppingBtn.module.css";
import { Link } from "react-router";

function ContinueShoppingBtn() {
  return (
    <button>
      <Link to="/shop">Continue shopping</Link>
    </button>
  );
}

export default ContinueShoppingBtn;
