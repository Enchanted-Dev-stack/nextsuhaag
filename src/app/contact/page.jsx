import React from "react";
import "../Css/contact.css";
import ScrollToTop from "@/components/Utils/ScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Suhaag Matrimony",
  description: "Contact | Suhaag Matrimony",
};

function Contact() {
  return (
    <>
      <Navbar />
      <main className="contactSection pb-10 pt-4 font-Outfit">
        {/* <ScrollToTop /> */}
        <h1 className="font-bold text-3xl text-center">Contact Us</h1>
        <div className="w-[70%] m-auto p-4 flex flex-wrap justify-around gap-4">
          <div className="items p-4 flex flex-col justify-center items-center  w-fit rounded-lg">
            <div className="icon">
              <ion-icon name="chatbubbles-outline"></ion-icon>
            </div>
            <a href="https://wa.me/+917723868292" target="_blank">
              <button className="bg-[#f31260] py-2 px-7 text-white my-2 hover:bg-red-500 transition-all duration-300">
                CHAT NOW
              </button>
            </a>
            <p className="text-[15px] text-center tracking-widest">
              MONDAY - SATURDAY
              <br />
              24/7
            </p>
          </div>
          <div className="items p-4 flex flex-col justify-center items-center  w-fit rounded-lg">
            <div className="icon">
              <ion-icon name="send-outline"></ion-icon>
            </div>
            <a href="mailto:suhaagmatrimony@gmail.com">
              <button className="bg-[#f31260] py-2 px-7 text-white my-2 hover:bg-red-500 transition-all duration-700">
                EMAIL US
              </button>
            </a>
            <p className="text-[15px] text-center tracking-widest">
              MONDAY - SATURDAY
              <br />
              24/7
            </p>
          </div>
          <div className="items p-4 flex flex-col justify-center items-center  w-fit rounded-lg">
            <div className="icon">
              <ion-icon name="call-outline"></ion-icon>
            </div>
            <button className="bg-[#f31260] py-2 px-7 text-white my-2 hover:bg-red-500 transition-all duration-300">
            +91 7723868292
            </button>
            <p className="text-[15px] text-center tracking-widest">
              MONDAY - SATURDAY
              <br />
              24/7
            </p>
          </div>
        </div>
        <div className="map w-[70%] m-auto p-1 mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d232.40922270073784!2d81.62637139673002!3d21.2497824093731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDE0JzU5LjIiTiA4McKwMzcnMzUuNiJF!5e0!3m2!1sen!2sin!4v1701678338465!5m2!1sen!2sin"
            width="100%"
            height="500"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
