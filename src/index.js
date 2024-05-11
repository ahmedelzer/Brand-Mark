import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import "./main2";
// import "./main.css";
import CartProvider from "./context/CartContext";
import Loading from "./component/Loading";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={Loading}>
    <React.StrictMode>
      <CartProvider>
        <App />
      </CartProvider>
    </React.StrictMode>
  </Suspense>
);
