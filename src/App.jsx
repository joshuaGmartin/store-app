import { useState, createContext } from "react";
import { Outlet } from "react-router";
import Header from "./components/Header/Header.jsx";
import Notifications from "./components/SingleElements/Notifications/Notifications.jsx";
import "./App.css";

//test
// import { useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const NoticeContext = createContext();

export default function App() {
  const [userCart, setUserCart] = useState([]);
  const [shopURL, setShopURL] = useState("/shop");
  const [notices, setNotices] = useState([]);

  //test
  // useEffect(() => {
  //   console.log("userCart");
  //   console.table(userCart);
  // }, [userCart]);

  return (
    <>
      <CartContext.Provider value={{ userCart, setUserCart }}>
        <ShopContext.Provider value={{ shopURL, setShopURL }}>
          <NoticeContext.Provider value={{ notices, setNotices }}>
            <Header />
            <Notifications />
            <Outlet />
          </NoticeContext.Provider>
        </ShopContext.Provider>
      </CartContext.Provider>
    </>
  );
}
