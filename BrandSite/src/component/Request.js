import React from "react";
import { localization } from "./Localization";
import { requestStyles } from "./styles";

function Request() {
  return (
    <form className={requestStyles.form}>
      <div className={requestStyles.divWrapper}>
        <label className={requestStyles.label} htmlFor="exampleInput90">
          {localization.form.name}
        </label>
        <input
          type="text"
          className={requestStyles.input}
          id="exampleInput90"
          placeholder={localization.form.namePlaceholder}
        />
      </div>

      <div className={requestStyles.divWrapper}>
        <label className={requestStyles.label} htmlFor="exampleInput90">
          {localization.form.email}
        </label>
        <input
          type="email"
          className={requestStyles.input}
          id="exampleInput90"
          placeholder={localization.form.emailPlaceholder}
        />
      </div>

      <div className={requestStyles.divWrapper}>
        <label className={requestStyles.label} htmlFor="exampleInput90">
          {localization.form.message}
        </label>
        <textarea className={requestStyles.textarea} name="" id=""></textarea>
      </div>

      <button type="button" className={requestStyles.button}>
        {localization.form.send}
      </button>
    </form>
  );
}

export default Request;
