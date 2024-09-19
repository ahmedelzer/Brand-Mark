import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { languageSelectorStyles } from "./style";

const LanguageSelector = () => {
  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    // i18n.changeLanguage(selectedLanguage);
    console.log(selectedLanguage);
  };
  const lng = Cookies.get("i18next") || "en";

  return (
    <form className={languageSelectorStyles.form}>
      <fieldset className={languageSelectorStyles.fieldset}>
        {/* <label htmlFor="language" className={languageSelectorStyles.label}>
          Language
        </label> */}
        <div className={languageSelectorStyles.relative}>
          <select
            id="language"
            name="language"
            className={languageSelectorStyles.select}
            onChange={changeLanguage}
            // value={lng}
          >
            <option value="en" className={languageSelectorStyles.option}>
              English
            </option>
            <option value="fr" className={languageSelectorStyles.option}>
              French
            </option>
            <option value="de" className={languageSelectorStyles.option}>
              German
            </option>
            <option value="ja" className={languageSelectorStyles.option}>
              Japanese
            </option>
            <option value="es" className={languageSelectorStyles.option}>
              Spanish
            </option>
          </select>
          <div className={languageSelectorStyles.svgContainer}>
            <svg
              className={languageSelectorStyles.svg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default LanguageSelector;
