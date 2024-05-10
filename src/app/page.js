import Image from "next/image";
import React from "react";
// import { TypeAnimation } from "react-type-animation";
import step1 from "../Assets/Images/Landing/step1.jpg";
import step2 from "../Assets/Images/Landing/step2.png";
import step3 from "../Assets/Images/Landing/step2.jpg";
import arrow from "../Assets/Images/Landing/arrow2.png";
import bgimage from "../Assets/Images/Landing/bg.png";
// import ArrowIcon from "../Icons/ArrowIcon";
import { Button } from "@nextui-org/react";
import BestSite from "../components/BestSite";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { NextUIProvider } from "@nextui-org/react";
export default function Home() {

  const step2img =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUqgIwiPZfgj5hJYhbUSM79cMOcrOuDLD2BqMnFrmaTLJKJtkSLbf6IqzRVDeIh1TQwCiSKfMzrp0-X2pRt1O20KpHnW4Vfs0_2-V1Y_W6QE1D6FLOLLaexbhcCe49e6sYIxfYQrK3B97CpCpNz6Yvf_jEHjgEwXp9BfW6tnhJXDBBaBS0bGBGWHP5IwDA/s702/suhaag-1-SEND-3.png";

  return (
    <>
    <Navbar />
      <main className="relative top-0 left-0 font-bold">
        <div className="top bg-[#fae3ea] backdrop-blur-sm from-blue-200 to-slate-00 max-h-screen w-screen !aspect-video flex overflow-hidden">
          <Image src={bgimage} alt="" className="absolute top-0 left-0" />
          <div className="w-full border-1 h-full flex flex-col items-center justify-center font-Outfit">
            <p className="text-lg sm:text-4xl font-serif font-light">
              Find Your
            </p>
            <p className="text-2xl sm:text-5xl lg:text-6xl">Perfect Partner</p>
            <p className="text-xs sm:text-sm lg:text-lg font-normal">
              JOIN OVER <span className="text-red-500 font-bold">1,000+</span>{" "}
              DESI SINGLES IN{" "}
              <span className="text-red-500 font-bold">SUHAAG</span>
            </p>
            <p className="font-normal text-xs sm:text-sm lg:text-lg">
              The most trusted matchmaking service
            </p>
            <Button
              color="primary"
              className="flex items-center text-white text-xs sm:text-sm mt-6 w-[150px] sm:w-auto"
            >
              MEET YOUR MATCH{" "}
              <span className="text-xs">
                <i class="fa-regular fa-heart"></i>
              </span>
            </Button>
          </div>
        </div>
        <div className="stepsarea text-center">
          <h1 className="text-3xl sm:text-4xl mt-6 font-Montserrat">
            Find Someone <br/> Special
          </h1>
          <span className="text-xl text-red-600 mt-2 font-BadScript ">
            How it works
          </span>
          <div className="w-[70%] m-auto flex items-center justify-center text-center font-Raleway font-bold text-black text-xl">
            <div className="step1 w-1/6 flex flex-col">
              <Image
                src={step1}
                alt=""
                className="aspect-square w-1/2 m-auto"
              />
              <span>Register</span>
              <span className="text-slate-500 font-normal text-xs tracking-wider">
                Register for Free and put up your matrimony profile
              </span>
            </div>
            <Image
              src={arrow}
              alt=""
              className="w-[10%] place-self-end transform -scale-y-100"
            />
            <div className="step2 1/6 flex flex-col">
              <Image
                src={step2}
                alt=""
                className="aspect-square m-auto w-[20vw]"
              />
              <span>Connect</span>
              <span className="w-1/2 text-slate-400 font-normal text-xs m-auto tracking-wider">
                Select & Connect with matches you like
              </span>
            </div>
            <Image
              src={arrow}
              alt=""
              className="w-[10%] place-self-start transform"
            />
            <div className="step3 w-1/6 flex flex-col">
              <Image
                src={step3}
                alt=""
                className="aspect-square w-1/2 m-auto"
              />
              <span>Interact</span>
              <span className="text-slate-500 font-normal text-xs tracking-wider">
                Become a premium member and start a conversation
              </span>
            </div>
          </div>
          {/* <div className="quotes my-10 font-Outfit text-Primary-600 font-semibold text-xs sm:text-sm leading-relaxed h-32 sm:h-20 flex items-center justify-center"> */}
            {/* <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Love is composed of a single soul inhabiting two bodies.",
                5000, // wait 1s before replacing "Mice" with "Hamsters"
                "The best relationship is when you can act like lovers and best friends at the same time.",
                5000,
                "A true relationship is when you can tell each other anything and everything. No secrets, no lies.",
                5000,
                "Love is a friendship set to music.",
                5000,
                "The best thing to hold onto in life is each other.",
                5000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            /> */}
          {/* </div> */}
        </div>
        <BestSite />
      </main>
      <Footer />
      </>
  );
}
