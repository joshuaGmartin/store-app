import { useState, createContext, useEffect } from "react";
import { Outlet } from "react-router";
import Header from "./components/Header/Header.jsx";
import "./App.css";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();
export const ShopContext = createContext();

export default function App() {
  const [userCart, setUserCart] = useState([]);
  const [shopURL, setShopURL] = useState("/shop");

  useEffect(() => {
    console.log("userCart");
    console.log(userCart);
    console.table(userCart);
  }, [userCart]);

  return (
    <>
      <CartContext.Provider value={{ userCart, setUserCart }}>
        <ShopContext.Provider value={{ shopURL, setShopURL }}>
          <main>
            <Header />
            <Outlet />
          </main>
        </ShopContext.Provider>
      </CartContext.Provider>
    </>
  );
}
