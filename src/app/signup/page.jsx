import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import "../Css/signup.css";
import { Button } from "@nextui-org/react";

function page() {
  return (
    <>
      <main className="w-full h-screen bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEKAS86Q3vI1lqqLfNObaDTB3Xqxae9WwyprWQ5NE4pAdT0Ms-UP1KaeVBGuRmE70EhcgpKtPA4BLkWpn9HppRNR4lPvUpDaw1hKbw_uM0sV3uVGrdvew9Ja-qWnKJVEqiVcc5xKrnIuHMae6ndbysbTB00q5VrWYCj39-Czj9QUeosxzaBonVPmLaPOhS/s1920/dada.png')] bg-repeat bg-cover relative">
        <div className="absolute w-[95%]  max-w-[800px] bg-[url('https://www.shutterstock.com/image-vector/abstract-background-design-vector-600nw-127625360.jpg')] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p flex items-center gap-4 backdrop-blur-1 rounded-md overflow-hidden">
          <form className="flex flex-col gap-4 justify-center w-[50%] max-w-[800px] p-4 h-full bg-graient-to-r from-red-500 to-slate-50 bg-transparent bg-opacity-80 backdrop-blur-1 text-black">
            <h1 className="text-white text-center font-bold text-2xl">
              SIGNUP
            </h1>
            <div className="input-container relative">
              <input
                type="email"
                placeholder=" "
                className="outline-none p-2 font-Outfit bg-slate-200 bg-opacity-10 backdrop-blur-sm rounded-md w-full texth"
              />
              <label
                htmlFor="#"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white"
              >
                Email
              </label>
            </div>
            <div className="input-container relative">
              <input
                type="text"
                placeholder=" "
                className="outline-none p-2 font-Outfit bg-slate-200 bg-opacity-10 backdrop-blur-sm rounded-md w-full texth"
              />
              <label
                htmlFor="#"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white"
              >
                First Name
              </label>
            </div>
            <div className="input-container relative">
              <input
                type="text"
                placeholder=" "
                className="outline-none p-2 font-Outfit bg-slate-200 bg-opacity-10 backdrop-blur-sm rounded-md w-full texth"
              />
              <label
                htmlFor="#"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white"
              >
                Last Name
              </label>
            </div>
            <Button variant="shadow" color="danger" className="text-white">
              Sign Up
            </Button>
            <div className="fast-signups text-white text-[32px]">
              <p className="text-white text-lg pb-1 font-semibold">
                Fast Sign Up
              </p>
              <div className=" flex gap-2">
                <div className="w-12 bg-blue-500 flex items-center justify-center p-1 rounded-full aspect-square bg-opacity-20 backdrop-blur-sm">
                  <ion-icon name="logo-google"></ion-icon>
                </div>
                <div className="w-12 bg-blue-500 flex items-center justify-center p-1 rounded-full aspect-square bg-opacity-20 backdrop-blur-sm">
                  <ion-icon name="logo-facebook"></ion-icon>
                </div>
                <div className="w-12 bg-blue-500 flex items-center justify-center p-1 rounded-full aspect-square bg-opacity-20 backdrop-blur-sm">
                  <ion-icon name="logo-twitter"></ion-icon>
                </div>
                <div className="w-12 bg-blue-500 flex items-center justify-center p-1 rounded-full aspect-square bg-opacity-20 backdrop-blur-sm">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </div>
              </div>
            </div>
          </form>
          <div className="vector h-full bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcj_2H06BGDPTiPaxscmt0mpZKrM0LouLp4-F0UoouM0ZOsV-OaK71dcym_494P6zyM6OwYhJSIpM31hUl2HT1gR4CK1Tmt2dmA4BijeDhzyAEp38fWACh_ccoNDwSLy53zQALuA44MMZlOy6nsdbB3Y7c1smg8NrfMDAP2udohlskkUNIRTsPOFFzgraB/s1500/wedding.gif')] bg-cover bg-center w-[50%] bg-no-repeat aspect-square"></div>
        </div>
      </main>
    </>
  );
}

export default page;
