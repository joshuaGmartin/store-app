import { useState, createContext, useEffect } from "react";
import { Outlet } from "react-router";
import Header from "./components/Header/Header.jsx";
import "./App.css";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export default function App() {
  const [userCart, setUserCart] = useState([]);

  useEffect(() => {
    console.log("userCart");
    console.log(userCart);
    console.table(userCart);
  }, [userCart]);

  return (
    <>
      <CartContext.Provider value={{ userCart, setUserCart }}>
        <Header />
        <Outlet />
      </CartContext.Provider>
    </>
  );
}
