import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import bgimg from "../../Assets/Images/Profile/bg.png";

function page() {
  return (
    <>
      <Navbar />
      <main className="font-Outfit">
        <div className="relative bg-image w-full aspect-[16/2]">
          <Image src={bgimg} alt="bg" fill objectFit="cover" />
        </div>
        <div className="info flex gap-5 max-w-[1500px] m-auto font-Montserrat -translate-y-1/2">
          <div className=" p-2 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] rounded-full">
          <div className="profile-pic relative w-[200px] aspect-square rounded-full overflow-hidden">
            <Image src="https://i.pravatar.cc/300?id=df" alt="pic" fill />
          </div>
          </div>
          <div className="details flex flex-col justify-end gap-1">
            <h1 className="text-4xl font-bold">Divyansh Dwivedi</h1>
            <p className="text-slate-400">Video Editor at Suhaasdag Inc.</p>
            <div className="socials text-[24px] flex gap-2 text-white bg-gradient-to-r from-blue-500 to-transparent p-1 ">
              <ion-icon name="logo-instagram"></ion-icon>
              <ion-icon name="logo-facebook"></ion-icon>
              <ion-icon name="logo-twitter"></ion-icon>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default page;
