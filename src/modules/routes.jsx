import App from "../App.jsx";
import Home from "../components/Pages/Home/Home.jsx";
import Shop from "../components/Pages/Shop/Shop.jsx";
import Cart from "../components/Pages/Cart/Cart.jsx";
import Checkout from "../components/Pages/Checkout/Checkout.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
];

export default routes;
