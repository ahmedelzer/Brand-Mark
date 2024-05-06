import React, { useEffect } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const LanguageSelector = () => {
  const { t } = useTranslation();

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
    console.log(selectedLanguage);
  };
  const lng = Cookies.get("i18next") || "en";
  useEffect(() => {
    window.document.dir = i18n.dir();
  }, [lng]);

  return (
    <div className="circle-container">
      <select
        id="languageSelect"
        value={i18n.language}
        className="text-sm p-2 color bg-transparent border-1 hover:!border-accent !border-accent !cursor-pointer"
        onChange={changeLanguage}
      >
        <option value="en">English</option>
        <option value="ar">Arabic</option>
        <option value="fr">{t("Welcome to React")}</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
