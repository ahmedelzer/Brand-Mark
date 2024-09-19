import React from "react";
import { localization } from "./Localization";

function Loading() {
  return (
    <div class="flex space-x-2 justify-center items-center h-screen ">
      <span class="sr-only">{localization.loading.loading}</span>
      <div class="h-8 w-8 !bg-accent !text-accent rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div class="h-8 w-8 bg-accent rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div class="h-8 w-8 bg-accent rounded-full animate-bounce"></div>
    </div>
  );
}

export default Loading;
