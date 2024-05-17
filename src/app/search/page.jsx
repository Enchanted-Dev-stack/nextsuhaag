"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UserCard from "@/components/search/UserCard";
// import Tour from 'reactour'
// import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";

import Joyride from "react-joyride";

function Page() {
  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState("");
  const [state, setState] = useState(null);
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  const [advanceTour, setAdvanceTour] = useState(false);

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

  const tour = {
    steps: [
      {
        target: ".searchbar",
        content: "Search for a Suhaagist",
      },
      {
        target: ".fa-gear",
        content: "Open Advance Filters",
      },
    ],
  };
  const tour2 = {
    steps: [
      {
        target: ".age",
        content: "Select age range",
      },
      {
        target: ".gender",
        content: "Select preferred gender",
      },
      {
        target: ".state-button",
        content: "Select preferred state",
      },
      {
        target: ".religion",
        content: "Select preferred religion",
      },
    ],
  };

  const [advanceOption, setAdvanceOption] = useState(false);
  const [options, setOptions] = useState({
    keyword: "",
    gender: "",
    religion: "",
    state: "",
    age: {
      min: 18,
      max: 100,
    },
  });

  const users = [
    {
      name: "Divyansh Dwivedi",
      uid: "123456789",
      age: 18,
      job: "Developer",
      profilepic: "https://i.pravatar.cc/300",
      hobbies: ["Cricket", "Coding", "Playing guitar"],
    },
    {
      name : "Sahil Sona",
      uid : "458932564",
      age : 21,
      job : "Teacher",
      profilepic: "https://i.pravatar.cc/300",
      hobbies: ["Cricket", "Coding", "Playing guitar"],
    },
    {
      name : "Kunal Chakradhari",
      uid : "256486512",
      age : 25,
      job : "Teacher",
      profilepic: "https://i.pravatar.cc/300",
      hobbies: ["Cricket", "Coding", "Playing guitar"],
    },
    {
      name : "Priyansh Kesarwani",
      uid : "458612456",
      age : 21,
      job : "Graphic Designer",
      profilepic: "https://i.pravatar.cc/300",
      hobbies : ["Cricket", "Coding", "Playing guitar"]
    },
    {
      name: "Ashutosh Nayak",
      uid: "576581265",
      age: 18,
      job: "Developer",
      profilepic: "https://i.pravatar.cc/300",
      hobbies: ["Cricket", "Coding", "Playing guitar"],
    },
    {
      name : "Gajendra Singh",
      uid : "774435890",
      age : 21,
      job : "Teacher",
      profilepic: "https://i.pravatar.cc/300",
      hobbies: ["Cricket", "Coding", "Playing guitar"],
    },
    {
      name : "Abhay Kumar",
      uid : "525565478",
      age : 21,
      job : "Teacher",
      profilepic: "https://i.pravatar.cc/300",
      hobbies: ["Cricket", "Coding", "Playing guitar"],
    },
    {
      name : "Nishit Gupta",
      uid : "586425789",
      age : 21,
      job : "Graphic Designer",
      profilepic: "https://i.pravatar.cc/300",
      hobbies : ["Cricket", "Coding", "Playing guitar"]
    }
  ];

  return (
    <>
      <Navbar />
      {isDomLoaded && (
        <>
          <Joyride
            steps={tour.steps}
            run={true}
            continuous={true}
            showSkipButton={false}
            hideCloseButton={true}
            scrollOffset={70}
            spotlightClicks={true}
            spotlightPadding={5}
          />
          <Joyride
            steps={tour2.steps}
            run={advanceTour}
            continuous={true}
            showSkipButton={false}
            hideCloseButton={true}
            disableScrolling={true}
            spotlightClicks={true}
            spotlightPadding={5}
          />
        </>
      )}
      <main className="w-full min-h-screen h-fullb p-1 sm:p-4 bg-slate-200 backdrop-blur-1">
        <div className="filters flex flex-wrap sm:flex-nowrap gap-2 justify-center bg-white p-0 sm:p-2 w-fit lg:w-full m-auto">
          <Input
            type="text"
            variant="flat"
            radius="sm"
            placeholder="Search by SuhaagId or Name"
            labelPlacement="outside"
            value={options.keyword}
            onChange={(e) => {
              setOptions({ ...options, keyword: e.target.value });
            }}
            className="searchbar w-full min-w-[300px] max-w-[550px] rounded-md"
          />

          {/* <div
            className={`flex flex-wrap gap-2 justify-center transition-all duration-1000 ${
              !advanceOption ? "w-0 overflow-hidden h-0 opacity-0" : "opacity-1"
            }`}
          >
            <Dropdown>
              <DropdownTrigger>
                <Button variant="flat" className="gender">
                  {gender || "Gender"}
                </Button>
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
                <Button variant="flat" className="religion">
                  {religion || "Religion"}
                </Button>
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
                variant="flat"
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
                variant="flat"
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
                    variant="flat"
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
          </div> */}
          <Button variant="shadow" color="danger" className="font-semibold">
            Search
          </Button>
          <div
            className={`flex items-center justify-center text-red-400 transition-all duration-500 cursor-pointer ${
              !advanceOption ? "" : "rotate-180"
            }`}
            onClick={() => {
              setAdvanceOption(!advanceOption);
              setAdvanceTour(true);
            }}
          >
            <i class="fa-solid fa-gear"></i>
          </div>
        </div>

        <div
          className={`settings-modal z-[100] shadow-[0_0_20px_0_rgba(0,0,0,0.2)] ${
            advanceOption ? "opacity-100 scale-100" : "opacity-0 scale-0"
          } transition-all duration-500 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white max-w-[500px] w-[92%] sm:min-w-[500px] py-4 px-6 rounded-2xl font-Outfit  overflow-hidden`}
        >
          <div
            className="absolute top-0 right-0 text-2xl w-10 h-10 flex items-center justify-center cursor-pointer text-[#fff] bg-[#f87171] rounded-bl-2xl"
            onClick={() => setAdvanceOption(!advanceOption)}
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
          <h2 className="text-2xl font-bold mb-4">Search</h2>
          <div>
            {/* <p>Age Range</p> */}
            <div className="age flex gap-4">
              <Input
                type="number"
                variant="flat"
                radius="2xl"
                label="Min Age"
                placeholder="Min Age"
                labelPlacement="outside"
                value={options.minAge}
                onChange={(e) => {
                  setOptions({
                    ...options,
                    age: { ...options.age, min: e.target.value },
                  });
                }}
                min={18}
                className="w-full  rounded-md"
              />
              <Input
                type="number"
                variant="flat"
                radius="2xl"
                label="Max Age"
                placeholder="Max Age"
                labelPlacement="outside"
                value={options.maxAge}
                onChange={(e) => {
                  setOptions({
                    ...options,
                    age: { ...options.age, max: e.target.value },
                  });
                }}
                min={18}
                className="w-full  rounded-md"
              />
            </div>
          </div>
          <div className="gender-section my-2">
            <p className="mb-2">Gender</p>
            <div className="gender flex gap-4 justify-evenly">
              <div
                className={`male flex flex-col items-center justify-center gap-2 py-12 shadow-[0px_0px_7px_0px_rgba(0,0,0,0.1)] w-[48%] h-[70px] transition-all duration-500 cursor-pointer rounded-xl hover:shadow-sm hover:bg-slate-100 ${
                  gender === "Male"
                    ? "bg-gradient-to-tr from-blue-400 to to-red-400 text-white"
                    : "bg-white"
                }`}
                onClick={() => {
                  setGender("Male");
                }}
              >
                <i className="fa-solid fa-mars text-xl"></i>
                <p className="text-lg font-semibold">Male</p>
              </div>
              <div
                className={`male flex flex-col items-center justify-center gap-2 py-12 shadow-[0px_0px_7px_0px_rgba(0,0,0,0.1)] w-[48%] h-[70px] transition-all duration-500 cursor-pointer rounded-xl hover:shadow-sm hover:bg-slate-100 ${
                  gender === "Female"
                    ? "bg-gradient-to-tr from-blue-400 to to-red-400 text-white"
                    : "bg-white"
                }`}
                onClick={() => {
                  setGender("Female");
                }}
              >
                <i className="fa-solid fa-venus text-xl"></i>
                <p className="text-lg font-semibold">Female</p>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-4">
            <div className="states my-4 flex justify-center flex-col ">
              <p className="mb-2">State</p>
              <div className="gender flex gap-4 justify-evenly">
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="flat"
                      className="state-button w-full flex items-center justify-center text-black cursor-pointer hover:bg-slate-300"
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
            </div>
            <div className="my-4 flex justify-center flex-col ">
              <p className="mb-2">Religion</p>
              <div className="gender flex gap-4 justify-evenly">
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="flat" className="religion">
                      {religion || "Religion"}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Dynamic Actions">
                    {Religions.map((religion) => (
                      <DropdownItem
                        key={religion}
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
              </div>
            </div>
          </div>
        </div>

        <div className="UserCards w-full p-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {users.map((user) => (
            <UserCard key={user._id} {...user} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Page;
