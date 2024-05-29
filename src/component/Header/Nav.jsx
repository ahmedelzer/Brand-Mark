import React, { useState } from "react";
import Logo from "../../assets/Logo.jpg";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import CategoryNavMobile from "../CategoryNavMobile";
import LanguageSelector from "./LanguageSelector";
const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className=" text-white !bg-body w-full">
      <div className="md:flex items-center !justify-between pt-4 pb-2 container">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center
      text-gray-800"
        >
          <Link to="/">
            <img
              src={Logo}
              className=" !w-[70px] h-[70px]"
              alt={document.title}
            />
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FiMenu className="flex items-center " />
        </div>

        <ul
          className={`md:flex md:items-center
          hidden 
           ease-in`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:mx-2 text-xl">
              <a href={link.link} className=" hover:text-accent duration-500">
                {link.name}
              </a>
            </li>
          ))}
          <LanguageSelector />
          <button className="btn btn-accent">Get</button>
        </ul>
        <div
          className={`${
            open ? "right-0" : "-right-full"
          } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}
        >
          <CategoryNavMobile setcatNavMobile={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
