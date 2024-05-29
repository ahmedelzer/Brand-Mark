import React from "react";

const PageHeading = ({ title, subTitle, desc }) => {
  return (
    <div class="mb-4">
      <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
        <p class="text-base font-semibold uppercase tracking-wide text-accent">
          {title}
        </p>
        <h2 class="font-heading mb-4 font-bold tracking-tight text-3xl sm:text-5xl">
          {subTitle}
        </h2>
        <p class="mx-auto mt-4 max-w-3xl text-xl !text-primary">{desc}</p>
      </div>
    </div>
  );
};

export default PageHeading;
