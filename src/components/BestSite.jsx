import { Button } from "@nextui-org/react";
import React from "react";
import ArrowIcon from "../Icons/ArrowIcon";
import ListItem from "./ListItem";
import { Fingerprint, HeartHandshake, UserRound } from "lucide-react";

function BestSite() {
  return (
    <div className="w-fit lg:w-[80%] xl:w-[70%] flex flex-col lg:flex-row items-center justify-center m-auto font-Outfit rounded-xl p-5  bg-white">
      <div className="leftarea w-full xs:w-[80%] lg:w-1/2 flex flex-col items-center  lg:block">
        <h1 className="text-5xl max-sm:text-4xl font-bold text-center lg:text-left">
          Best Online <br /> Matrimony Site.
        </h1>
        <div className="flex gap-6 items-center font-normal my-10">
          <span className="text-red-500 text-6xl font-bold max-sm:text-4xl">90%</span>
          <p className="text-lg max-sm:text-sm font-SpaceMono">
            of our members are <br /> highly educated.
          </p>
        </div>
        <p className="text-ls font-normal max-w-full lg:max-w-[60%] text-center lg:text-left">
          Suhaag is an innovative speciality matrimonial website that caters to
          a special group of bachelors and spinsters who want to get married.
        </p>
        <Button color="primary" variant="shadow" radius="full" className="my-4" >
          Get Started <i className="fa-solid fa-arrow-right"></i>
        </Button>
      </div>
      <div className="rightarea w-full xs:w-[80%] lg:w-[50%] xl:w-[43%] flex flex-col justify-between">
        <ListItem icon={<UserRound size={35} color="black"/>} heading="100% screened Profiles" desc="Search by Location, Community, Profession and more from Lakhs of active profiles" />
        <ListItem icon={<HeartHandshake size={35} color="black"/>} heading="Our Promise" desc="We promises we will charge No money to girls/women who is not able to afford for her wedding" />
        <ListItem icon={<Fingerprint size={35} color="black"/>} heading="Authenticity" desc="We charge the money only for our hard work after we will find a suitable partner for you and fix your marriage." />
      </div>
    </div>
  );
}

export default BestSite;
