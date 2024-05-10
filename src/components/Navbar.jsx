"use client";
import { React, useEffect, useState } from "react";
// import logo from "../Assets/Images/logo.png";
// import { Button } from "@nextui-org/react";
import "./Css/NavBar.css";
import { UserIcon } from "../Icons/UserIcon";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
// import { NavLink } from "react-router-dom";

import Image from "next/image";
import { useAuth } from "./Contexts/authContext";
import { useRouter } from "next/navigation";

const color = "primary";
const variant = "flat"; //["solid", "bordered", "light", "flat", "faded", "shadow"]

const services = [
  { name: "Horoscope Matching", link: "/horoscope-matching" },
  { name: "Photography", link: "/photography" },
  { name: "Catering", link: "/catering" },
  { name: "Makeup", link: "/makeup" },
  { name: "Hair Styling", link: "/hair-styling" },
  { name: "Grooming", link: "/grooming" },
];

// import { useAuth } from "./Contexts/authContext";

import logo from "../Assets/Images/logo1.png";

function Navbar() {
  const [OpenNav, setOpenNav] = useState(false);
  const router = useRouter();
  const {currentUser, logout} = useAuth();


  return (
    <nav
      className={`sticky Navbar w-full top-0 left-0 px-2 bg-opacity-90 backdrop-blur-sm lg:shadow-none py-2 lg:py-1 flex items-center justify-between border-none h-26 bg-[#fae3ea] z-[1000]`}
    >
      <div className="logo h-full flex items-center justify-center">
        
        <div className="relative max-h-16 !h-10 p-1 lg:h-auto !aspect-square">
        <Image src={logo} alt="logo"
        fill />
        </div>
        <div className="texts flex flex-col justify-center">
          <span className="text-2xl lg:text-4xl font-Kaushan pr-2 pb-2 font-normal text-Primary-600 bg-gradient-to-t from-[#509ae7] to-red-600 bg-clip-text text-transparent">
            Suhaag
          </span>
          {/* <span className="text-xs font-Oswald tracking-widest text-red-700">FIND PERFECT PARTNER</span> */}
        </div>
      </div>
      <div
          className="menu valid: lg:hidden text-red-500"
          onClick={() => setOpenNav(!OpenNav)}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      <div
        className={`flex flex-col  shadow-lg lg:shadow-none lg:flex-row justify-center items-center gap-4 font-semibold text-sm lg:relative absolute top-0 left-0 bottom-0 h-screen lg:h-auto bg-white lg:bg-transparent transition-all duration-300 ${
          OpenNav ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="menu font-Inter bg-white lg:bg-inherit w-[90vw] max-w-[300px] xs:max-w-[400px] lg:max-w-full lg:w-min">
          <div
            className={`absolute lg:hidden ${
              OpenNav ? "scale-100" : "scale-0"
            } top-0 right-0  flex items-center justify-center p-0 w-14 aspect-square bg-red-500 text-white text-[36px] rounded-none transition-all duration-800`}
            onClick={() => setOpenNav(!OpenNav)}
          >
            <ion-icon name="close-outline" ></ion-icon>
          </div>
          <ul className="flex justify-center items-center gap-4 text-primary font-normal flex-col lg:flex-row ">
            <a href="#" className="text-black font-Montserrat font-medium">
              <li>
                {/* <Button color="primary" variant="light"> */}
                Home
                {/* </Button> */}
              </li>
            </a>
            <a href="#" className="text-black font-Montserrat font-medium">
              <li>
                {/* <Button color="primary" variant="light" className="px-3 py-1"> */}
                Decorators
                {/* </Button> */}
              </li>
            </a>
            <a href="#" className="text-black font-Montserrat font-medium">
              <li>
                {/* <Button color="primary" variant="light"> */}
                Photographers
                {/* </Button> */}
              </li>
            </a>
            <a
              href={"/gallery"}
              className="text-black font-Montserrat font-medium"
            >
              <li>
                {/* <Button color="primary" variant="light"> */}
                Gallery
                {/* </Button> */}
              </li>
            </a>
            <a
              href={"/contact"}
              className="text-black font-Montserrat font-medium"
            >
              <li>
                {/* <Button color="primary" variant="light"> */}
                Contact
                {/* </Button> */}
              </li>
            </a>

            <li>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    color={color}
                    variant={variant}
                    className="capitalize"
                  >
                    More Services
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Dropdown Variants"
                  color={color}
                  variant={variant}
                >
                  {services.map((service) => (
                    <DropdownItem key="edit">
                      <a href={service.link}>{service.name}</a>
                    </DropdownItem>
                  ))}
                  {/* <DropdownItem
                      key="delete"
                      className="text-danger"
                      color="danger"
                    >
                      Delete file
                    </DropdownItem> */}
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Button
                color="primary"
                variant="light"
                className="px-3 py-1"
                onClick={() => {logout();}}
              >
               Logout
              </Button>
            </li>
          </ul>
        </div>
        <Button
          // className="bg-Primary text-white "
          color="danger"
          variant="shadow"
          radius="full"
          aria-label="Like"
          onClick={() => {currentUser ? router.push("/dashboard") : router.push("/signup")}}
        >
          <UserIcon />
          <span className="font-Inter">{currentUser ? "Dashboard" : "Register"}</span>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
