import React from "react";

function Card() {
  return (
    // <div>
    <div class="max-w-sm rounded overflow-hidden bg-card card-shadow shadow-lg my-4 ">
      <img
        class="w-full"
        src="/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-accent text-xl mb-2">The Coldest Sunset</div>
        <p class="text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block !bg-body text-white  rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
          #photography
        </span>
        <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-body mr-2 mb-2">
          #travel
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
    // </div>
  );
}

export default Card;
