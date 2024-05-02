import React from "react";
import { MailIcon } from "../Icons/MailIcon";
import { Button, Input } from "@nextui-org/react";

function Footer() {
  return (
    <footer className="bg-[#5f45eb] text-white">
      <div className="contact font-Outfit flex flex-col xs:flex-row m-auto items-center justify-between py-3 px-20">
        <div className="section1 p-5">
          <h3 className="text-3xl font-semibold">Contact Us</h3>
          <p className="text-xl">+91-XXX-XXXX-XXX</p>
        </div>
        <div className="socials text-[24px] flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold">Socials</h3>
          <div>
            <a href="#" className="mr-2">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="#" className="mr-2">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#" className="mr-2">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </div>
        </div>
      </div>
      <div className="mainSection bg-[#674bff] pt-6 px-20">
        
        <div className="mailSub w-[40%]">
          <div className="branding flex gap-4 py-5">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUqgIwiPZfgj5hJYhbUSM79cMOcrOuDLD2BqMnFrmaTLJKJtkSLbf6IqzRVDeIh1TQwCiSKfMzrp0-X2pRt1O20KpHnW4Vfs0_2-V1Y_W6QE1D6FLOLLaexbhcCe49e6sYIxfYQrK3B97CpCpNz6Yvf_jEHjgEwXp9BfW6tnhJXDBBaBS0bGBGWHP5IwDA/s702/suhaag-1-SEND-3.png"
              alt=""
              className="w-[70px] aspect-square p-1 rounded-full bg-white shadow-md"
            />
            <div className="texts flex flex-col justify-center">
              <h3 className="text-3xl font-normal font-Kaushan text-white bg-clip-text bg-gradient-to-tr from-yellow-400 to-Primary-500">
                Suhaag
              </h3>
              <p className="text-sm font-medium">FIND PERFECT PARTNER</p>
            </div>
          </div>
          <h2 className="font-Allura text-4xl font-normal mt-2 mb-4">
            Feel Free With Us
          </h2>
          <div className="mail w-full max-w-[400px] flex gap-2">
            <Input
              className="mb-2 text-black"
              variant="shadow"
              type="email"
              size="md"
              //   label="Email"
              radius="sm"
              placeholder="you@example.com"
              labelPlacement="outside"
              endContent={
                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
            <Button color="warning"
            variant="flat"
            className="text-white">Subscribe</Button>
          </div>
          #Chandigarh, India
        </div>

       
      <div className="copyright text-sm text-center font-Outfit pt-1 mt-2">
      <hr className="border-blue-500"/>
        <p className="py-5 font-light">&copy; 2022 Suhaag. All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
