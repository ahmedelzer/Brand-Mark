import React, { useContext, useState } from "react";
import Logo from "../../assets/Logo.png";
import CategoryNavMobile from "./CategoryNavMobile";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { CartContext, LanguageContext } from "../../context/Language";
import LanguageSelector from "./LanguageSelector";
import { headerStyles } from "./style";
function Header() {
  const [open, setOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(window.location.pathname);
  const { localization } = useContext(LanguageContext);
  function ChangePage(e) {
    setSelectedPage(e.target.title);
  }
  return (
    <header className={headerStyles.container}>
      <div className={headerStyles.headerWrapper}>
        <div className={headerStyles.logoWrapper}>
          <Link to="/">
            <img src={Logo} className={headerStyles.logoImage} alt="Logo" />
          </Link>
        </div>
        <div className={headerStyles.navListWrapper}>
          <ul className={headerStyles.navList}>
            {localization.routes.map((item) => (
              <li
                key={item.id}
                id={`menu-item-${item.id}`}
                className={
                  headerStyles.navItem +
                  `${
                    (selectedPage === item.title) |
                    (selectedPage === item.route)
                      ? " text-accent"
                      : "text-text"
                  }`
                }
              >
                <Link
                  to={item.route}
                  onClick={ChangePage}
                  title={item.title}
                  className={headerStyles.navLink}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={headerStyles.languageWrapper}>
          <LanguageSelector />
          {/* <button className={headerStyles.button}>
            {localization.header.buttonText}
          </button> */}
          <a
            href={localization.header.buttonUrl}
            role="button"
            className="main-button mx-4"
          >
            {localization.header.buttonText}
          </a>
        </div>
        <div className={headerStyles.mobileMenuIcon}>
          <LanguageSelector />
          <a
            href={localization.header.buttonUrl}
            role="button"
            className="main-button mx-4"
          >
            {localization.header.buttonText}
          </a>
          <FiMenu
            className={headerStyles.menuIcon}
            onClick={() => setOpen(true)}
          />
        </div>
        <div className={headerStyles.mobileMenu(open)}>
          <CategoryNavMobile setCatNavMobile={setOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
