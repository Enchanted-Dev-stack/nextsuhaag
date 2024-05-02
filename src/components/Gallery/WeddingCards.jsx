import React from "react";

function WeddingCards() {
  return (
    <div className="group rounded-lg rounded-b-2xl overflow-hidden sm:mb-3 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      <img
        className="group-hover:brightness-[1.2] group-hover:saturate-[100%] w-full aspect-[13/16] object-cover rounded-lg transition-all duration-300"
        src="https://assets-global.website-files.com/602a4bbeeccd0a59a2d46a59/660ce742b078b963d3ca028e_Thumbnail.jpeg"
        alt=""
     
      />
      <div className="info py-2 px-4">
        <p className="text-3xl sm:text-2xl font-Allura text-red-500">Divyansh & Nisha</p>
        <p className="text-lg font-Raleway flex items-center">
          <span className="text-red-500">
            <ion-icon name="pin"></ion-icon>
          </span>{" "}
          Raipur, Chattisgarh
        </p>
        <p className="text-lg font-Raleway flex items-center">19 Dec 2024</p>
        <p className="text-lg font-Raleway flex items-center">
          Budget : 1200000
        </p>
        <p className="text-lg font-Raleway flex items-center">
          Savings : 200000
        </p>
      </div>
    </div>
  );
}

export default WeddingCards;
