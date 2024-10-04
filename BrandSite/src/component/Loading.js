import React, { useContext } from "react";
import { LanguageContext } from "../context/Language";

function Loading() {
  const { localization } = useContext(LanguageContext);

  return (
    <div className="flex space-x-2 justify-center items-center h-screen ">
      <span className="sr-only">{localization.loading.loading}</span>
      <div className="h-8 w-8 !bg-accent !text-accent rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-accent rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-accent rounded-full animate-bounce"></div>
    </div>
  );
}

export default Loading;
