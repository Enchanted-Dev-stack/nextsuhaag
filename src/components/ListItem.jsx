import React from "react";

function ListItem(props) {
  return (
    <div className=" flex gap-3 items-center my-1 lg:my-2 rounded-full shadow-[0_0_5px_0_rgba(0,0,0,0.1)] hover:shadow-lg max-w-[550px] lg:max-w-[100%] m-auto transition-all duration-250 font-medium pr-3 py-1 pl-1">
      <div className=" aspect-square min-w-[70px] xs:min-w-[100px] bg-gradient-to-br from-red-400 to-blue-500 text-white rounded-full flex items-center justify-center">
        
        <i className={`fa-${props.variant} fa-${props.icon} p-3 text-2xl`}></i>
        </div>
      <div>
        <div className="heading sm:text-xl font-semibold text-lg line-clamp-1">{props.heading}</div>
        <div className="description min-h-8 text-xs sm:text-base line-clamp-2">{props.desc}</div>
      </div>
    </div>
  );
}

export default ListItem;
