"use client"
import React from "react";
import "../Css/signup.css";
import { Button } from "@nextui-org/react";
import { useAuth } from "@/components/Contexts/authContext";

function Page() {
  const {googleSignIn} = useAuth();
  


  return (
    <>
      <main className="w-full h-screen bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvBTcxJoSvAmGqNakbeDkMTRMQDD_qzheBafY8LhKBc_GXxNWhFcP0X_NPuwlNLcJNu4a7PsZftiAjzxl8k4n64WhXg5LRem8KehXSgZHVOBSWq4y3h9boPgZRAy_Vv0RGtK8NlHYx5S7ZYkaxmJWnlqDvU3vMD0RLihcBOjAE4lacg7Dt7D4v9hScaUdu/s1920/loli.png')] bg-repeat bg-cover relative">
        <div className="absolute  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] w-[95%]  max-w-[800px] bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20210512/pngtree-pink-abstract-geometric-floral-background-image_714519.jpg')] bg-no-repeat bg-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p flex items-center gap-4 backdrop-blur-1 rounded-md overflow-hidden">
          <form className="flex flex-col gap-4 justify-center w-[50%] max-w-[800px] p-4 h-full bg-graient-to-r from-red-500 to-slate-50 bg-transparent bg-opacity-80 backdrop-blur-1 text-black">
            <h1 className="text-red-500 text-center font-bold text-2xl">
              SIGNUP
            </h1>
            <div className="input-container relative">
              <input
                type="email"
                placeholder=" "
                className="outline-none p-2 font-Outfit bg-white shadow-md bg-opacity-25 backdrop-blur-sm rounded-md w-full text-red-900"
              />
              <label
                htmlFor="#"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-100"
              >
                Email
              </label>
            </div>
            <div className="input-container relative">
              <input
                type="text"
                placeholder=" "
                className="outline-none p-2 font-Outfit bg-white shadow-md bg-opacity-25 backdrop-blur-sm rounded-md w-full text-red-900"
              />
              <label
                htmlFor="#"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-100"
              >
                First Name
              </label>
            </div>
            <div className="input-container relative">
              <input
                type="text"
                placeholder=" "
                className="outline-none p-2 font-Outfit bg-white shadow-md bg-opacity-25 backdrop-blur-sm rounded-md w-full text-red-900"
              />
              <label
                htmlFor="#"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-100"
              >
                Last Name
              </label>
            </div>
            <Button variant="shadow" color="danger" className="text-white">
              Sign Up
            </Button>
            <div className="fast-signups text-white text-[32px]">
              <p className="text-black text-lg pb-1 font-semibold font-Montserrat">
                Fast Sign Up
              </p>
              <div className=" flex gap-2">
                <div className="w-12 bg-blue-500 flex items-center justify-center p-2 rounded-full aspect-square bg-opacity-20 backdrop-blur-sm"
                onClick={() => googleSignIn()}>
                  <ion-icon name="logo-google"></ion-icon>
                </div>
                <div className="w-12 bg-blue-500 flex items-center justify-center p-2 rounded-full aspect-square bg-opacity-20 backdrop-blur-sm">
                  <ion-icon name="logo-facebook"></ion-icon>
                </div>
                <div className="w-12 bg-blue-500 flex items-center justify-center p-2 rounded-full aspect-square bg-opacity-20 backdrop-blur-sm">
                  <ion-icon name="logo-twitter"></ion-icon>
                </div>
                <div className="w-12 bg-blue-500 flex items-center justify-center p-2 rounded-full aspect-square bg-opacity-20 backdrop-blur-sm">
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

export default Page;
