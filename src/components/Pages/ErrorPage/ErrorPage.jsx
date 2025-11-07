import { Link } from "react-router";
import styles from "./ErrorPage.module.css";

function ErrorPage() {
  return (
    <>
      Sorry, but this page doesn't exist
      <button>
        <Link to="/">Go Home</Link>
      </button>
    </>
  );
}

export default ErrorPage;
