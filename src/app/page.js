import Image from "next/image";
import React from "react";
import BestSite from "../components/BestSite";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LandingPageComponent } from "@/components/landing/landing-page";
import Features from "@/components/landing/Features";
import Card from "@/components/Card";
import MarqueeFeatures from "@/components/features-section";

// import { NextUIProvider } from "@nextui-org/react";
export default function Home() {
  
  const step2img =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUqgIwiPZfgj5hJYhbUSM79cMOcrOuDLD2BqMnFrmaTLJKJtkSLbf6IqzRVDeIh1TQwCiSKfMzrp0-X2pRt1O20KpHnW4Vfs0_2-V1Y_W6QE1D6FLOLLaexbhcCe49e6sYIxfYQrK3B97CpCpNz6Yvf_jEHjgEwXp9BfW6tnhJXDBBaBS0bGBGWHP5IwDA/s702/suhaag-1-SEND-3.png";

  return (
    <>
      <Navbar variant="clear" />
      <meta property="og:image" content="<generated>" />
      <meta property="og:image:type" content="<generated>" />
      <meta property="og:image:width" content="<generated>" />
      <meta property="og:image:height" content="<generated>" />
      <main className="relative top-0 left-0 font-bold bg-[#fae3ea] h-full">
        <div className="top  backdrop-blur-sm from-blue-500 to-slate-00 max-h-screen w-screen aspect-[27.5/9] max-md:min-h-[100svh] min-h-[600px] flex overflow-hidden">
          <img
            // src="/assets/images/landing/landing.webp"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgm-6OUjgKVZ3C4Tkh9ubVb9Lg66Nn7WB_-s5i8m_Zpm4KQ-koqge7eiw3bwgnH5eJVb4KdC23hJMuHf5JVSEGQNzjAqFIEwY3lOQlyKIvmzd31ekBJ1MSCI4QCbAqqxmkpUWjepER7h1zpqryPOzlBnl3TdSb4LX5nNCjDStxaWxPlYDUp8r4DEAfrwV42/s7700/C%20(4).webp"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="w-full  h-full flex flex-col items-center justify-end font-Outfit pb-10 max-sm:pb-0">
            {/* <p className="text-lg sm:text-4xl font-serif font-light">
              Find Your
            </p>
            <p className="text-2xl sm:text-5xl lg:text-6xl text-red-500">
              Perfect Partner
            </p>
            <p className="text-xs sm:text-sm lg:text-lg font-normal">
              JOIN OVER <span className="text-red-500 font-bold">1,000+</span>{" "}
              DESI SINGLES IN{" "}
              <span className="text-red-500 font-bold">SUHAAG</span>
            </p>
            <p className="font-normal text-xs sm:text-sm lg:text-lg text-red-400 max-sm:hidden">
              The most trusted matchmaking service
            </p> */}
            {/* <Button
              color="primary"
              className="flex items-center text-white text-xs sm:text-sm mt-6 w-[150px] sm:w-auto"
            >
              MEET YOUR MATCH{" "}
              <span className="text-xs">
                <i class="fa-regular fa-heart"></i>
              </span>
            </Button> */}
            <div className="px-20 max-md:px-0 w-full ">
              <LandingPageComponent />
            </div>
          </div>
        </div>
        {/* <div className="px-5 max-md:px-0 w-full max-md:block hidden bg-[#fae3ea]">
          <LandingPageComponent />
        </div> */}
        <div className="stepsarea text-center max-sm:px-2">
          <Features />
        </div>
        <div className="w-full bg-[#fae3ea] py-14 max-sm:pt-0 max-sm:pb-3 px-2">
          <BestSite />
        </div>
        <div className="py-5 px-5 bg-white  rounded-t-3xl">
          <h2 className="font-SpaceMono text-lg">Our Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-2 lg:gap-4 ">
            {/* flex justify-evenly gap-2 lg:gap-4 overflow-auto py-2 */}

            <Card
              title="Photography"
              img="https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D"
            />
            <Card
              title="Management"
              img="https://i.pinimg.com/736x/6b/d8/c4/6bd8c40fe0a22f95240b294c514578ee.jpg"
            />
            <Card
              title="Mehendi"
              img="https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/000/615/129/original/movie'ing_moments.jpg?1544101567"
            />
            <Card
              title="Invitations"
              img="https://i.pinimg.com/736x/d2/11/bb/d211bb860059d78a5bdcc43f50b8db08.jpg"
            />
            <Card
              title="Hair Styling"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1sxe6IVTeZiu-s9F2dAtYot1RntExeyo2zkWCwEfV6-vtekf_qm82PuzFP-Nv3wHomE&usqp=CAU"
            />
            <Card
              title="Venues"
              img="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfN_5xJLBQonKPuowJTjq4Y70QVEf22qJjlIAcEJJoWBDuz3ffAvBjxSWs_DPODvuSfl5vvV5YMrApWD1rtoMM87k-bj_zOVrCemMveAaNcV1zZ1RbLgKQZlsrI_64BL_W3gGR4QX3mww4pq8YBOV8IVdOGhyOe0q88Y_dBaIhL8AgTKaaftaX0792vwD1/s3000/premium_photo-1661964071015-d97428970584.webp"
            />
          </div>
        </div>
        <div>
          <MarqueeFeatures />
        </div>
      </main>
      <Footer />
    </>
  );
}
