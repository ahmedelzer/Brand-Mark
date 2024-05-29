import Home from "./pages/Home";
// import * as All from './main'
import "./main2";

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Router,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import i18next from "i18next";
import Header from "./component/Header/Header";
import i18n from "./utils/i18n";
import Footer from "./component/Footer";
import Matore from "./component/Matore";
import { useContext, useEffect } from "react";
import { CartContext } from "./context/CartContext";
import Cookies from "js-cookie";
import Contact from "./pages/Contact";
import NotFound404 from "./component/NotFound404";
import Services from "./pages/Services";
import Form from "./component/Form/Form";
import Portfolio from "./pages/Portfolio";
import Nav from "./component/Header/Nav";
const Layout = () => {
  return (
    <div>
      <Header />
      {/* <Nav /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <Contact /> },
      { path: "/services", element: <Services /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "*", element: <NotFound404 /> },
    ],
  },
  {
    children: [{ path: "/form", element: <Form /> }],
  },
]);
function App() {
  const { lan } = useContext(CartContext);
  // i18n();
  const lng = Cookies.get("i18next") || "en";
  useEffect(() => {
    window.document.dir = i18next.dir();
  }, [lng]);

  useEffect(() => {
    // i18n();
    // Function to update document title based on language
    const updateDocumentTitle = () => {
      document.title =
        lan === "AR" ? "خلخال الملكة للمجوهرات" : "Queen's anklet for jewelry";
    };
    updateDocumentTitle();
    return () => {
      // Reset the document title when the component unmounts
      document.title = "خلخال الملكة للمجوهرات";
    };
  }, [lan]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
