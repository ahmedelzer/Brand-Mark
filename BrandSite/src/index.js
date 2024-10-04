import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LanguageContext from "./context/Language";
import Loading from "./component/Loading";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<Loading />}>
    <React.StrictMode>
      <LanguageContext>
        <App />
      </LanguageContext>
    </React.StrictMode>
  </Suspense>
);
