import { Link } from "react-router";
import styles from "./ErrorPage.module.css";

function ErrorPage() {
  return (
    <div className={styles.errorBody}>
      <div className={styles.errorMessage}>
        Sorry, but this page doesn't exist
      </div>
      <Link to="/" className={`${styles.homeButton} diagButton`}>
        <button>Go Home</button>
      </Link>
    </div>
  );
}

export default ErrorPage;
