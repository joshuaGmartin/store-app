import { Outlet } from "react-router";
import Header from "./components/pages/Header";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
