import Cookies from "js-cookie";
import { useContext, useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ComingSoon from "./component/ComingSoon";
import Footer from "./component/Footer/Footer";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";
import NotFound404 from "./component/NotFound404";
import { CartContext, LanguageContext } from "./context/Language";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Test from "./pages/Test";

import About from "./pages/About";
const Layout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
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
  const { localization, Right } = useContext(LanguageContext);

  useEffect(() => {
    window.document.dir = Right ? "rtl" : "ltr";
    document.title = localization.appInfo.title;
  }, [Right]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
