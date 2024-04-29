import React, { useContext, useState } from "react";
import Logo from "../../assets/Logo.jpg";
import "../all.min.css";
import CategoryNavMobile from "../CategoryNavMobile";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { Data } from "../Data";
import { CartContext } from "../../context/CartContext";
import LanguageSelector from "./LanguageSelector";
function Header() {
  const [open, setopen] = useState(false);
  const { lan, setLan } = useContext(CartContext);

  return (
    <header
      id="masthead"
      className="site-header navbar-static-top navbar-light mt-2"
      role="banner"
    >
      <div className="container">
        <nav className="row navbar navbar-expand-xl p-lg-0 !justify-between">
          <div className="col-4 col-sm-5 col-lg-10 col-md-8 nav-band pl-0 md:order-1">
            <div className="row">
              <div className="col-lg-6 d-flex nav-band-right !justify-center align-items-center md:order-1">
                <ul className="flex items-center space-x-4">
                  <LanguageSelector />
                  <li className="wishlist-tab hidden">
                    <a href="/en/wishlist" className="">
                      <i
                        className="far fa-heart"
                        title="Wishlist"
                        aria-hidden="true"
                      ></i>
                      <span className="wishlistCounter count"></span>
                    </a>
                  </li>
                </ul>
                <button className="btn btn-accent ml-4">sigh</button>
              </div>
              <div id="main-nav" className="col-lg-6 pl-0 d-none d-lg-block">
                <ul
                  id="menu-top-menu"
                  className="navbar-nav pointer-event !flex-row"
                >
                  {Data.map((item) => (
                    <li
                      key={item.id}
                      itemscope="itemscope"
                      itemtype="https://www.schema.org/SiteNavigationElement"
                      id={`menu-item-${item.id}`}
                      className=" !text-white font-bold text-[19px] p-2 hover:underline duration-300 transition-all"
                    >
                      <Link
                        to={`/matore/${item.id}`}
                        title={lan === "AR" ? item.titleAR : item.titleEN}
                        className="nav-link !text-white whitespace-nowrap"
                      >
                        {lan === "AR" ? item.titleAR : item.titleEN}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-4 col-sm-5 col-md-2 col-lg-2 flex justify-center">
            <Link to="/">
              <img
                src={Logo}
                className=" w-[50px] h-[50px]"
                alt={document.title}
              />
            </Link>
          </div>
          <div className="col-2 col-sm-2 col-md-1 d-lg-none hamburger-wrap">
            <div
              onClick={() => setopen(true)}
              className="text-3xl xl:hidden cursor-pointer"
            >
              <FiMenu />
            </div>
            <div
              className={`${
                open ? "right-0" : "-right-full"
              } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}
            >
              <CategoryNavMobile setcatNavMobile={setopen} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
