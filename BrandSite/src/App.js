import Cookies from "js-cookie";
import { useContext, useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ComingSoon from "./component/ComingSoon";
import Footer from "./component/Footer/Footer";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";
import { localization } from "./component/Localization";
import NotFound404 from "./component/NotFound404";
import { CartContext } from "./context/Language";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Test from "./pages/Test";

import About from "./pages/About";
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
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "*", element: <NotFound404 /> },
    ],
  },
  {
    children: [
      { path: "/form", element: <Form /> },
      { path: "/test", element: <Test /> },
      { path: "/soon", element: <ComingSoon /> },
    ],
  },
]);
function App() {
  useEffect(() => {
    // window.document.dir = "ltr";
    document.title = localization.appInfo.siteTitle;
  });

  // useEffect(() => {
  // i18n();
  // Function to update document title based on language
  // const updateDocumentTitle = () => {
  //   document.title =
  //     lan === "AR" ? "خلخال الملكة للمجوهرات" : "Queen's anklet for jewelry";
  // };
  // updateDocumentTitle();
  // return () => {
  //   // Reset the document title when the component unmounts
  //   document.title = "خلخال الملكة للمجوهرات";
  // };
  // }, [lan]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
