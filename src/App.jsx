import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./components/Header/Header.jsx";
import "./App.css";
//test
import { useEffect } from "react";

export default function App() {
  const [userCart, setUserCart] = useState([]);

  useEffect(() => {
    console.log("userCart");
    console.table(userCart);
  }, [userCart]);

  return (
    <>
      <Header userCart={userCart} />
      <Outlet context={{ userCart, setUserCart }} />
    </>
  );
}
