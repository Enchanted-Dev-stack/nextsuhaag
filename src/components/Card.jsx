import { Button } from "@nextui-org/react";
// import Image from "next/image";
import React from "react";

function Card(props) {
  return (
    <div className="shadow-md rounded-lg overflow-hidden h-fit">
      <div className="relative">
        <img src={props.img} alt=""
        loading="lazy"
         className="w-full aspect-[16/11] object-cover" />
        <div className="absolute text-2xl font-normal text-white bg-opacity-50 lg:bg-opacity-70 backdrop-blur-none hover:backdrop-blur-sm lg:backdrop-blur-[2px] lg:hover:backdrop-blur-none left-0 top-0 right-0 bottom-0 hover:translate-x-0 hover:translate-y-0 [&>*]:hover:bg-opacity-30 [&>*]:bg-opacity-70 flex justify-center items-center transition-all duration-250">
          <Button
            color="primary"
            // size="lg"
            variant="flat"
            className="text-white bg-[#f31260] text-sm lg:text-lg opacity-0 lg:opacity-100"
          >
            View
          </Button>
        </div>
      </div>
      <h3 className="text-center bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-xl font-semibold text-transparent uppercase py-2">
        {props.title}
      </h3>
    </div>
  );
}

export default Card;
