import { Link } from "react-router";

function Home() {
  return (
    <>
      <h1>welcome to the.warehouse.store</h1>
      <h2>where we find you the best deals on overstocked items</h2>
      <button>
        <Link to="/shop">Shop now</Link>
      </button>
    </>
  );
}

export default Home;
