// LanguageSelector.js
import React, { useContext } from "react";
const LanguageSelector = () => {
  return (
    <div className="circle-container ">
      <select
        id="languageSelect"
        // value={i18n.language}
        className="text-xs color bg-transparent hover:!border-accent !border-accent !cursor-pointer"
        // onChange={changeLanguage}
      >
        <option className=" bg-black text-white">English</option>
        <option>ahmed</option>
        <option>ahmesd</option>
        <option>ahmed</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
