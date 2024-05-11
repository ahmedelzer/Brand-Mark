import React from "react";
import { Link } from "react-router-dom";

function NotFound404() {
  return (
    <section class="flex items-center h-screen p-16 ">
      <div class="container flex flex-col items-center ">
        <div class="flex flex-col gap-6 max-w-md text-center">
          <h2 class="font-extrabold text-9xl ">
            <span class="sr-only">Error</span>404
          </h2>
          <p class="text-2xl md:text-3xl !text-primary">
            Sorry, we couldn't find this page.
          </p>
          <Link to={"/"} class="px-8 py-4 btn btn-accent">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound404;
