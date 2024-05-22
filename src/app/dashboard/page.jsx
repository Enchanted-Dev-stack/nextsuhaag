"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import bgimg from "../../../Assets/Images/Dashboard/bg2.png";
import paintingImg from "../../Icons/Animated/painting.gif";
import cookingImg from "../../Icons/Animated/frying-pan.gif";
import dancingImg from "../../Icons/Animated/disco-ball.gif";
import singingImg from "../../Icons/Animated/carol-singer.gif";
import butterflyImg from "../../Icons/Animated/butterfly.gif";
import Footer from "@/components/Footer";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/navigation";
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
import Phone from "../../Icons/Phone";
import City from "../../Icons/City";
import State from "../../Icons/State";
// import Calendar from "../../../Icons/Calendar";
import Globe from "../../Icons/Globe";
import { useAuth } from "@/components/Contexts/authContext";
import LangIcon from "@/Icons/Lang";
import DumbbellIcon from "@/Icons/Dumbbell";
import HeightIcon from "@/Icons/Height";
function Page({ children }) {
  const router = useRouter();
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    document.title = "Suhaag | Dashboard";
  }, []);

  const maritalOptions = [
    "Married",
    "Single",
    "Divorced",
    "Widow",
    "separated",
    "Other",
  ];

  const BodyTypes = [
    {
      value: "slim",
      label: "Slim",
      description: "Lean and slender body type with minimal body fat.",
    },
    {
      value: "average",
      label: "Average",
      description:
        "A body type that is neither too thin nor too heavy, with a balanced physique.",
    },
    {
      value: "athletic",
      label: "Athletic",
      description:
        "Muscular and toned body type, typically with a lower percentage of body fat.",
    },
    {
      value: "heavy",
      label: "Heavy",
      description:
        "Heavier body type, generally larger and possibly with higher body fat percentage.",
    },
    {
      value: "extra_pounds",
      label: "A Few Extra Pounds",
      description:
        "A slightly heavier build than average, with some extra weight.",
    },
    {
      value: "curvy",
      label: "Curvy",
      description:
        "Body type with fuller, well-defined curves, often with a larger bust and hips.",
    },
    {
      value: "petite",
      label: "Petite",
      description: "Small and slender body type, typically shorter in height.",
    },
    {
      value: "plus_size",
      label: "Plus Size",
      description:
        "Larger body type with more body fat, often wearing plus-size clothing.",
    },
    {
      value: "fit",
      label: "Fit",
      description:
        "Well-maintained, physically active body type with noticeable muscle tone.",
    },
  ];

  const EatingHabits = [
    {
      "value": "vegetarian",
      "label": "Vegetarian",
      "description": "Does not eat meat but may consume dairy and eggs."
    },
    {
      "value": "non_vegetarian",
      "label": "Non-Vegetarian",
      "description": "Eats all types of food, including meat."
    },
    {
      "value": "vegan",
      "label": "Vegan",
      "description": "Does not consume any animal products, including dairy and eggs."
    },
    {
      "value": "eggetarian",
      "label": "Eggetarian",
      "description": "Vegetarian but consumes eggs."
    },
    {
      "value": "jain",
      "label": "Jain",
      "description": "Follows Jain dietary restrictions, avoiding root vegetables and certain other foods."
    },
    {
      "value": "pescatarian",
      "label": "Pescatarian",
      "description": "Primarily vegetarian but includes fish and seafood in their diet."
    },
    {
      "value": "others",
      "label": "Others",
      "description": "Other specific eating habits or dietary restrictions not covered by the above categories."
    }
  ]
  

  const [selectedState, setSelectedState] = useState(null);
  const [selectedReligion, setSelectedReligion] = useState(null);
  const [selectedMarital, setSelectedMarital] = useState(null);
  const [selectedBodyType, setSelectedBodyType] = useState(null);
  const [eatingHabit, setEatingHabit] = useState(null);
  const setState = (state) => {
    setSelectedState(state);
  };

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

        <div className="container w-[95%] max-w-[1200px] m-auto font-Outfit flex flex-col sm:flex-row justify-between  gap-4 sm:gap-4 ">
          <div className="user-details w-[90%] m-auto sm:m-0 sm:w-[25%] min-w-[300px] shadow-[5px_5px_7px_0px_rgba(0,0,0,0.2),-5px_-5px_7px_0px_white]">
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
          <div className="user-settings w-[90%] m-auto sm:m-0 sm:w-[72%] shadow-[5px_5px_7px_0px_rgba(0,0,0,0.2),-5px_-5px_7px_0px_white] px-4 py-2">
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
                className="lg:w-[48%] sm:w-full w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] rounded-md"
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
                className="lg:w-[48%] sm:w-full w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] rounded-md"
              />
              <Input
                type="number"
                label="Phone"
                variant="flat"
                radius="sm"
                placeholder="you@example.com"
                labelPlacement="outside"
                startContent={<Phone />}
                className="lg:w-[48%] sm:w-full w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] rounded-md"
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
                className="lg:w-[48%] sm:w-full w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] rounded-md"
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
                className="lg:w-[48%] sm:w-full w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] rounded-md"
              />
              <div className="w-[48%]">
                <h1 className="text-sm mb-1">State</h1>
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="flat"
                      className="w-full  shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] flex items-center justify-start text-slate-500 cursor-text hover:bg-slate-300"
                    >
                      {selectedState || "Select State"}
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
                className="lg:w-[48%] sm:w-full w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] rounded-md"
              />
              <Input
                type="text"
                label="Mother Tounge"
                variant="flat"
                radius="sm"
                placeholder="eg: English"
                labelPlacement="outside"
                startContent={
                  <LangIcon
                    className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                    color="#3b82f6"
                  />
                }
                className="lg:w-[48%] sm:w-full w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] rounded-md"
              />
              <Input
                type="text"
                label="Height"
                variant="flat"
                radius="sm"
                placeholder="eg: 6'1 OR 6 ft 1"
                labelPlacement="outside"
                startContent={
                  <HeightIcon
                    className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                    color="#3b82f6"
                  />
                }
                className="lg:w-[48%] sm:w-full w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] rounded-md"
              />
              <Input
                type="text"
                label="Weight (in Kg)"
                variant="flat"
                radius="sm"
                placeholder="eg: 56"
                labelPlacement="outside"
                startContent={
                  <DumbbellIcon
                    className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                    color="#3b82f6"
                  />
                }
                className="lg:w-[48%] bg sm:w-full w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] rounded-md"
              />
              <div className="lg:w-[48%] sm:w-full w-full rounded-md">
                <h1 className="text-sm mb-1">Date of Birth</h1>
                <DatePicker
                  variant="shadow"
                  className="w-full rounded-md shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white]"
                />
              </div>
              <div className="self-start lg:w-[48%] sm:w-full w-full">
                <h1 className="text-center bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                  Marital Status
                </h1>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] border-none">
                      {selectedMarital || "Choose One"}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Dynamic Actions">
                    {maritalOptions.map((item, index) => (
                      <DropdownItem
                        key={index}
                        color={"default"}
                        onClick={() => setSelectedMarital(item)}
                      >
                        {item}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>
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
              <div className="self-start lg:w-[48%] w-full">
                <h1 className="text-center bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                  Gender
                </h1>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className=" w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] border-none">
                      {selectedState || "Select"}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Dynamic Actions">
                    <DropdownItem color={"default"}>Male</DropdownItem>
                    <DropdownItem color={"default"}>Female</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="lg:w-[48%] w-full">
                <h1 className="text-center bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                  Religion
                </h1>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] border-none">
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
              <div className="lg:w-[48%] w-full">
                <h1 className="text-center bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                  Qualifications
                </h1>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] border-none">
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
              <div className="lg:w-[48%] w-full">
                <h1 className="text-center bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                  Eating Habits
                </h1>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="w-full shadow-[3px_3px_4px_0px_rgba(0,0,0,0.2),-3px_-3px_4px_0px_white] border-none">
                      {eatingHabit || "Choose One"}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Dynamic Actions">
                    {EatingHabits.map((item, index) => (
                      <DropdownItem
                        key={index}
                        color={"default"}
                        onClick={() => setEatingHabit(item.value)}
                      >
                        {item.label}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="w-full">
                <h1 className="text-center bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent font-semibold my-2">
                  Body Type
                </h1>
                <div className="flex gap-2 justify-center">
                  {BodyTypes.map((item, index) => (
                    <span
                      key={index}
                      title={item.description}
                      className={`font-normal py-1 px-2 border-2 border-slate-400 text-sm rounded-full cursor-pointer flex items-center justify-center transition-all duration-400 ${selectedBodyType === item.value ? "bg-gradient-to-r from-red-500 to-blue-500 text-white border-solid border-white " : " border-dashed"}`}
                      onClick={() => setSelectedBodyType(item.value)}
                    >
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="buttons flex gap-3">
              <Button color="primary" variant="shadow" className="mt-4 w-full">
                Update
              </Button>
              <Button
                color="danger"
                variant="shadow"
                className="mt-4 w-full"
                onClick={() => {
                  logout();
                  router.replace("/");
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Page;
