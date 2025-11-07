import App from "../App.jsx";
import Home from "../components/Pages/Home/Home.jsx";
import Shop from "../components/Pages/Shop/Shop.jsx";
import Cart from "../components/Pages/Cart/Cart.jsx";
import Checkout from "../components/Pages/Checkout/Checkout.jsx";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
