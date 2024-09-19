import React, { useContext } from "react";
import Logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";
import { Data } from "./Data";
import { CartContext } from "../context/Language";
import { localization } from "./Localization";

function Footer() {
  const { lan, setLan } = useContext(CartContext);

  return (
    <div className="footer !bg-accent">
      <div className="container">
        <footer className=" row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-5">
          <div className="col mb-3">
            <a
              href="#"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <img src={Logo} className="w-50" alt="Logo" />
            </a>
          </div>
          <div className="col mb-3"></div>
          <div className="col mb-3">
            <h5 className="text-center">
              {lan === "AR" ? "الاقسام" : localization.footer.categories}
            </h5>
            <ul className="nav flex-column">
              {Data.map((item) => (
                <li className="nav-item mb-2 text-lg" key={item.id}>
                  <Link
                    to={`/matore/${item.id}`}
                    title={lan === "AR" ? item.titleAR : item.titleEN}
                    className="nav-link p-0 text-muted"
                  >
                    {lan === "AR" ? item.titleAR : item.titleEN}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col mb-3">
            <h5 className="text-center">
              {lan === "AR"
                ? "وسائل التواصل الاجتماعي"
                : localization.footer.socialMedia}
            </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 hover:underline duration-300 transition-all text-uppercase !text-primary text-lg">
                <i>
                  <a
                    href="https://api.whatsapp.com/send/?phone=96407710772555&text&type=phone_number&app_absent=0"
                    className="fa-brands fa-square-whatsapp fa-2xl m-1"
                    target="_blank"
                  ></a>
                </i>
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5 className="text-center">
              {lan === "AR" ? "العنوان" : localization.footer.address}
            </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 !text-primary text-lg">
                {lan === "AR"
                  ? "بغداد-شارع النهر-عماره مركز الذهب-الطابق الارضي"
                  : "Baghdad - Nile Street - Gold Center Building - Ground Floor"}
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5 className="text-center">
              {lan === "AR" ? "رقم الهاتف" : localization.footer.phoneNumber}
            </h5>
            <ul className="nav flex-column text-lg">
              <li className="nav-item mb-2 !text-primary">07710772555</li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
