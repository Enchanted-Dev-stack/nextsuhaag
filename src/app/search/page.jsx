"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Tour from 'reactour'
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";

// import Joyride from "react-joyride";

function Page() {
  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState("");
  const [state, setState] = useState(null);
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  // const [isShowingMore, setIsShowingMore] = useState(false);

  useEffect(() => {
    setIsDomLoaded(true);
    
  }, []);

  const Religions = ["Hindu", "Muslim", "Christian", "Sikh", "Jain", "Others"];

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Delhi",
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
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Lakshadweep",
    "Puducherry",
    "Ladakh",
  ];

  const closeTour = () => {
    setIsTourOpen(false);
  }

  const openTour = () => {
    setIsTourOpen(true);
  }

  const disableBody = (target) => disableBodyScroll(target);
  const enableBody = (target) => enableBodyScroll(target);

  const accentColor = "#5cb7b7";
  
  const tour = {
    steps: [
      {
        target: ".searchbar",
        content: "Search for a Suhaagist",
      },
      {
        target: ".gender",
        content: "Select preferred gender",
      },
      {
        target: ".religion",
        content: "Select preferred religion",
      },
      {
        target: ".age",
        content: "Select age range",
      }
    ],
  };



  return (
    <>
      <Navbar />
      {isDomLoaded && <Tour
        onRequestClose={closeTour}
        steps={tour}
        isOpen={isTourOpen}
        maskClassName="mask"
        className="helper"
        rounded={5}
        accentColor={accentColor}
        onAfterOpen={disableBody}
        onBeforeClose={enableBody} 
        
        />}
      <main className="w-full min-h-screen h-full m-4">
        <div className="filters flex gap-2">
          <Input
            type="text"
            variant="flat"
            radius="sm"
            placeholder="Search by SuhaagId or Name"
            labelPlacement="outside"
            className="searchbar w-full max-w-[550px]  shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white]  rounded-md"
          />

          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered"  className="gender">{gender || "Gender"}</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions">
              <DropdownItem
                color={"default"}
                onClick={() => {
                  setGender("male");
                }}
              >
                Male
              </DropdownItem>
              <DropdownItem
                color={"default"}
                onClick={() => {
                  setGender("female");
                }}
              >
                Female
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered"  className="religion">{religion || "Religion"}</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions">
              {Religions.map((religion) => (
                <DropdownItem
                  color={"default"}
                  onClick={() => {
                    setReligion(religion);
                  }}
                >
                  {religion}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <div className="age flex items-center gap-1">
            <Input
              type="number"
              variant="bordered"
              radius="sm"
              placeholder="Min Age"
              labelPlacement="outside"
              value={18}
              min={18}
              className="w-[70px]  rounded-md"
            />
            -
            <Input
              type="number"
              variant="bordered"
              radius="sm"
              placeholder="Max Age"
              labelPlacement="outside"
              className="w-[70px]  rounded-md"
              max={100}
              min={18}
              value={25}
            />
          </div>
            <div>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    variant="bordered"
                    className="w-full flex items-center justify-center text-slate-500 cursor-pointer hover:bg-slate-300"
                  >
                    {state || "Select State"}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Dynamic Actions"
                  className="h-[300px] overflow-hidden overflow-y-auto"
                >
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
              </Dropdown>
            </div>
            <button onClick={()=>setIsTourOpen(true)}>Search</button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Page;
