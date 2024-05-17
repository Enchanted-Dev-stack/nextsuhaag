import Image from "next/image";
import React from "react";

function UserCard(props) {
  const Hobbies = props.hobbies;

  return (
    <div className="card bg-white min-w-[24%] rounded-2xl overflow-hidden p-4 flex flex-col gap-4">
      <div className="basic-info flex items-center gap-2">
        <div className="relative img min-w-[80px] md:min-w-[100px] aspect-square overflow-hidden rouded-full">
          <Image
            src={props.profilepic+"?id="+props.uid}
            alt="pic"
            fill
            sizes="(100vw, 100vh)"
            className="rounded-full"
          />
        </div>
        <div className=" font-Montserrat">
          <h2 className="md:text-2xl text-lg font-bold">{props.name}</h2>
          <p className="text-xs md:text-sm text-slate-400 font-semibold">{props.job}</p>
          <p className="text-xs md:text-sm text-slate-400 font-semibold">{props.age} Y/O</p>
        </div>
      </div>
      <div className="Hobbies flex flex-wrap gap-1">
        {Hobbies.map((hobby) => (
          <span key={hobby} className="font-semibold py-1 px-2 border-2  border-slate-400 text-xs rounded-full">
            {hobby}
          </span>
        ))}
      </div>
      <div className="buttons flex gap-3">
        <button className="w-[48%] font-medium font-Montserrat text-[#00a0b0] bg-blue-200 py-2 rounded-lg text-xs sm:text-md">
          View Profile
        </button>
        <button className="w-[48%] font-medium font-Montserrat text-[#00a0b0] border-2 border-blue-400 py-2 rounded-lg text-xs sm:text-md">
          Message
        </button>
      </div>
    </div>
  );
}

export default UserCard;
