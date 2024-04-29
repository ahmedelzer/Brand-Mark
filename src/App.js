import Home from "./component/Home";
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
import Header from "./component/Header/Header";
import Footer from "./component/Footer";
import Matore from "./component/Matore";
import { useContext, useEffect } from "react";
import { CartContext } from "./context/CartContext";
const Layout = () => {
  return (
    <div>
      <Header />
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
      { path: "/matore/:id", element: <Matore /> },
    ],
  },
]);
function App() {
  const { lan } = useContext(CartContext);

  useEffect(() => {
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
