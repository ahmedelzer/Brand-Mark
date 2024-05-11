import React, { useState } from "react";
import image from "../assets/Logo.jpg";
function MainContent() {
  return (
    <div className=" container my-4">
      <div className="flex flex-1 flex-row justify-between">
        <div className="w-[45%] max-h-min relative overflow-hidden">
          <img src={image} className="w-full h-auto object-cover" alt="" />
        </div>
        <div className=" w-[50%]">
          <p className="h2 text-accent mb-2">Title</p>
          <p className="">
            Lorem,consectetur adipisicing elit. Molestias ad, similique
            assumenda suscipit optio quaerat consectetur aliquam inventore
            voluptatibus tenetur repellat quo modi exercitationem quod itaque
            corrupti, eaque dolor placeat{" "}
          </p>
          <button className="btn btn-accent mt-4 text-center">sign</button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
