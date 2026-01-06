import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./modules/routes.jsx";
import "./index.css";

const redirect = new URLSearchParams(window.location.search).get("redirect");

if (redirect) {
  window.history.replaceState(null, "", redirect);
}

const router = createBrowserRouter(routes, {
  basename: "/store-app",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
