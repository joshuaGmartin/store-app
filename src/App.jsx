import { useState, createContext } from "react";
import { Outlet, ScrollRestoration } from "react-router";
import Header from "./components/Header/Header.jsx";
import Notifications from "./components/SingleElements/Notifications/Notifications.jsx";
import "./App.css";

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

  return (
    <>
      <CartContext value={{ userCart, setUserCart }}>
        <ShopContext value={{ shopURL, setShopURL }}>
          <NoticeContext value={{ notices, setNotices }}>
            <ScrollRestoration />
            <Header />
            <Notifications />
            <Outlet />
          </NoticeContext>
        </ShopContext>
      </CartContext>
    </>
  );
}
