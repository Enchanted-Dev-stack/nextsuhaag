"use client";
import React, { useState } from "react";
import Image from "next/image";
import bgimg from "../../../Assets/Images/Dashboard/bg2.png";
import paintingImg from "../../../Icons/Animated/painting.gif";
import cookingImg from "../../../Icons/Animated/frying-pan.gif";
import dancingImg from "../../../Icons/Animated/disco-ball.gif";
import singingImg from "../../../Icons/Animated/carol-singer.gif";
import butterflyImg from "../../../Icons/Animated/butterfly.gif";
import Footer from "@/components/Footer";
import Navbar from "../../../components/Navbar";
import {
  Button,
  DatePicker,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import { MailIcon } from "@/Icons/MailIcon";
import Phone from "../../../Icons/Phone";
import City from "../../../Icons/City";
import State from "../../../Icons/State";
// import Calendar from "../../../Icons/Calendar";
import Globe from "../../../Icons/Globe";
function Page({ children }) {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedReligion, setSelectedReligion] = useState(null);
  const setState = (state) => {
    setSelectedState(state);
  };

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const Religions = [
    "Hindu",
    "Muslim",
    "Christian",
    "Sikh",
    "Jain",
    "Jewish",
    "Buddhist",
    "Other",
  ];

  const hobbies = [
    {
      name: "Painting",
      img: paintingImg,
    },
    {
      name: "Cooking",
      img: cookingImg,
    },
    {
      name: "Dancing",
      img: dancingImg,
    },
    {
      name: "Singing",
      img: singingImg,
    },
    {
      name: "Nature",
      img: butterflyImg,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="relative w-screen h-full min-h-fit py-4 bg-slate-100">
        {/* <div className="absolute w-[98vw] left-1/2 -translate-x-1/2 h-1/3 rounded-lg shadow-[0px_0px_10px_0px_rgba(0,0,0,0.4)] overflow-hidden">
        <Image src={bgimg} alt="background" fill objectFit="cover" />
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 bg-red-500 bg-clip-text text-transparent z-[1] font-Kalam opacity-50 text-8xl font-bold uppercase">
          Adarsh
        </div>
      </div> */}

        <div className="container w-[95%] max-w-[1200px] m-auto font-Outfit flex flex-col sm:flex-row justify-between  gap-4 sm:gap-0 ">
          <div className="user-details w-[98%]sm:w-[25%] shadow-[5px_5px_7px_0px_rgba(0,0,0,0.2),-5px_-5px_7px_0px_white]">
            <div className="info flex flex-col items-center justify-center py-4">
              <div className="relative w-[60%] aspect-square rounded-full overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="ProfilePic"
                  fill
                  objectFit="cover"
                />
              </div>
              <p className="text-3xl font-bold mb-1">Divyansh</p>
              <p className="text-sm">Film Producer</p>
            </div>
            <div className="about">
              <p className="text-xl font-bold text-center mb-2">Hobbies</p>
              <div className="hobby flex flex-wrap gap-2 justify-center">
                {hobbies.map((hobby, index) => (
                  <div
                    className="flex items-center border-none border-slate-300 bg-white text-black px-3 rounded-full shadow-[-3px_-3px_5px_0px_rgba(0,0,0,0),3px_3px_5px_0px_rgba(0,0,0,0.2)]"
                    key={index}
                  >
                    <div className="relative w-[30px] aspect-square mr-1">
                      <Image
                        src={hobby.img}
                        fill
                        objectFit="cover"
                        alt="hobby"
                        objectPosition="center"
                      />
                    </div>
                    {hobby.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="share mt-3">
              <p className="text-xl font-bold text-center my-1">Share</p>
              <p className="px-4 py-2 bg-slate-200 w-[90%] m-auto shadow-[inset_3px_3px_4px_0px_rgba(0,0,0,0.2),inset_-3px_0px_4px_0px_white] text-center">
                https://suhaad.in/profile/2532
              </p>
            </div>
          </div>
          <div className="user-settings w-full sm:w-[72%] shadow-[5px_5px_7px_0px_rgba(0,0,0,0.2),-5px_-5px_7px_0px_white] px-4 py-2">
            <div className="mb-3 font-extrabold text-4xl font-Outfit">
              <h1 className="bg-[url('https://img.freepik.com/premium-photo/abstract-background-design-images-wallpaper-ai-generated_643360-91486.jpg')] bg-contain w-fit bg-clip-text text-transparent">
                User Settings
              </h1>
            </div>
            <div className="flex flex-wrap justify-between gap-3">
              <Input
                type="text"
                label="First Name"
                variant="flat"
                radius="sm"
                placeholder="First Name"
                labelPlacement="outside"
                // startContent={
                //   <A/>
                // }
                className="sm:w-[49%] w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] rounded-md"
              />
              <Input
                type="text"
                label="Last Name"
                variant="flat"
                radius="sm"
                placeholder="Last Name"
                labelPlacement="outside"
                // startContent={
                //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                // }
                className="sm:w-[49%] w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] rounded-md"
              />
              <Input
                type="number"
                label="Phone"
                variant="flat"
                radius="sm"
                placeholder="you@example.com"
                labelPlacement="outside"
                startContent={<Phone />}
                className="sm:w-[49%] w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] rounded-md"
              />
              <Input
                type="email"
                label="Email"
                variant="flat"
                radius="sm"
                placeholder="you@example.com"
                labelPlacement="outside"
                startContent={
                  <MailIcon
                    className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                    color="#3b82f6"
                  />
                }
                className="sm:w-[49%] w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] rounded-md"
              />
              <Input
                type="text"
                label="City"
                variant="flat"
                radius="sm"
                placeholder="City"
                labelPlacement="outside"
                startContent={
                  <City
                    className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                    color="#3b82f6"
                  />
                }
                className="sm:w-[49%] w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] rounded-md"
              />
              <Input
                type="text"
                label="State"
                variant="flat"
                radius="sm"
                placeholder="State"
                labelPlacement="outside"
                startContent={
                  <Globe
                    className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                    color="#3b82f6"
                  />
                }
                className="sm:w-[49%] w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] rounded-md"
              />
              <Input
                type="text"
                label="Postal Code"
                variant="flat"
                radius="sm"
                placeholder="Postal Code"
                labelPlacement="outside"
                startContent={
                  <State
                    className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                    color="#3b82f6"
                  />
                }
                className="sm:w-[49%] w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] rounded-md"
              />
              <div className="sm:w-[49%] w-full rounded-md">
                <h1 className="text-sm mb-1">Date of Birth</h1>
                <DatePicker variant="shadow" className="w-full rounded-md shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white]"/>  
              </div>

              {/* <Dropdown>
                <DropdownTrigger>
                <Button variant="bordered">{ selectedState|| "Select" }</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Dynamic Actions">
                {states.map((item, index) => (
                  <DropdownItem
                  key={index}
                  color={"default"}
                  onClick={() => setState(item)}
                  >
                  {item}
                  </DropdownItem>
                  ))}
                  </DropdownMenu>
                </Dropdown> */}
              {/* <Input
                type="date"
                label="DOB"
                variant="flat"
                radius="sm"
                placeholder="State"
                labelPlacement="outside"
                startContent={
                  <Calendar
                    className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                    color="#3b82f6"
                  />
                }
                className="sm:w-[49%] w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] rounded-md"
              /> */}
              {/* <Input
                type="date"
                label="DOB"
                variant="flat"
                radius="sm"
                placeholder="State"
                labelPlacement="outside"
                startContent={
                  <State
                    className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                    color="#3b82f6"
                  />
                }
                className="sm:w-[49%] w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] rounded-md"
              /> */}
              <div className="self-start">
                <h1 className="text-center">Gender</h1>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered">
                      {selectedState || "Select"}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Dynamic Actions">
                    <DropdownItem color={"default"}>Male</DropdownItem>
                    <DropdownItem color={"default"}>Female</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div>
                <h1 className="text-center">Religion</h1>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered">
                      {selectedReligion || "Select Religion"}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Dynamic Actions">
                    {Religions.map((item, index) => (
                      <DropdownItem
                        key={index}
                        color={"default"}
                        onClick={() => setSelectedReligion(item)}
                      >
                        {item}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div>
                <h1 className="text-center">Qualifications</h1>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered">
                      {selectedReligion || "Select Religion"}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Dynamic Actions">
                    {Religions.map((item, index) => (
                      <DropdownItem
                        key={index}
                        color={"default"}
                        onClick={() => setSelectedReligion(item)}
                      >
                        {item}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <Button color="primary" variant="shadow" className="mt-4">
              Update
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Page;
