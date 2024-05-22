"use client";
import Biodata from "@/components/Tools/Biodata/Biodata";
import React, { useEffect, useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { DatePicker, Input, Button } from "@nextui-org/react";
import formbg from "@/Assets/Images/Tools/Biodata/formbg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function Page() {
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  const [isRendered, setRendered] = useState(true);
  const [MenuOpen, setMenuOpen] = useState({
    family: true,
    contact: true,
  });

  const Templates = [
    "/BiodataTemplates/bg1.png",
    "/BiodataTemplates/bg2.png",
    "/BiodataTemplates/bg3.png",
    "/BiodataTemplates/bg4.png",
    "/BiodataTemplates/bg5.png",
  ];

  const [details, setDetails] = useState({
    template: "",
    name: "",
    dob: "",
    tob: "",
    pob: "",
    rashi: "",
    nakshatra: "",
    height: "",
    religion: "",
    caste: "",
    subcaste: "",
    gotra: "",
    manglik: "",
    education: "",
    college: "",
    employedIn: "",
    organization: "",
    income: "",
    fname: "",
    mname: "",
    foccupation: "",
    moccupation: "",
    totalbrothers: "",
    totalsisters: "",
    marriedbrothers: "",
    marriedsisters: "",
    number: "",
    address: "",
  });

  useEffect(() => {
    setRendered(false);
    setTimeout(() => {
      setRendered(true);
    }, 1500);
    console.log(details);
  }, [details]);

  useEffect(() => {
    setIsDomLoaded(true);
    document.title = "Biodata Generator | Suhaag";
  }, []);

  return (
    <main className="font-Outfit font-semibold p-4 bg-white">
      <div>
        <h1 className="text-3xl font-bold mb-2">Biodata Generator</h1>
      </div>
      <div className="flex gap-3 flex-col lg:flex-row">
        <form className="form w-full lg:w-[60%] max-w-[800px] m-auto shadow-[0_0_10px_0_rgba(0,0,0,0.2)] p-4 bg-white rounded-xl">
          <div className="w-full flex justify-around flex-wrap gap-4">
            <Input
              variant="flat"
              value={details.name}
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              label="Name"
              labelPlacement="outside"
              placeholder="Enter your name"
              className="w-full xs:w-[48%]"
            />
            <DatePicker
              variant="flat"
              onChange={(date) =>
                setDetails({
                  ...details,
                  dob: `${date.day}/${date.month}/${date.year}`,
                })
              }
              label="DOB"
              showMonthAndYearPickers
              labelPlacement="outside"
              placeholder="Enter Date of Birth"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.tob}
              onChange={(e) => setDetails({ ...details, tob: e.target.value })}
              label="Time of Birth"
              labelPlacement="outside"
              placeholder="Enter Time of Birth"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.pob}
              onChange={(e) => setDetails({ ...details, pob: e.target.value })}
              label="Place of Birth"
              labelPlacement="outside"
              placeholder="Enter Place of Birth"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.rashi}
              onChange={(e) =>
                setDetails({ ...details, rashi: e.target.value })
              }
              label="Rashi"
              labelPlacement="outside"
              placeholder="Enter Rashi"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.nakshatra}
              onChange={(e) =>
                setDetails({ ...details, nakshatra: e.target.value })
              }
              label="Naskhatra"
              labelPlacement="outside"
              placeholder="Enter Nakshatra"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.height}
              onChange={(e) =>
                setDetails({ ...details, height: e.target.value })
              }
              label="Height"
              labelPlacement="outside"
              placeholder="Enter Height"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.religion}
              onChange={(e) =>
                setDetails({ ...details, religion: e.target.value })
              }
              label="Religion"
              labelPlacement="outside"
              placeholder="Enter Religion"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.caste}
              onChange={(e) =>
                setDetails({ ...details, caste: e.target.value })
              }
              label="Caste"
              labelPlacement="outside"
              placeholder="Enter Caste"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.subcaste}
              onChange={(e) =>
                setDetails({ ...details, subcaste: e.target.value })
              }
              label="Subcaste"
              labelPlacement="outside"
              placeholder="Enter Subcaste"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.gotra}
              onChange={(e) =>
                setDetails({ ...details, gotra: e.target.value })
              }
              label="Gotra"
              labelPlacement="outside"
              placeholder="Enter Gotra"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.manglik}
              onChange={(e) =>
                setDetails({ ...details, manglik: e.target.value })
              }
              label="Manglik"
              labelPlacement="outside"
              placeholder="Manglik Status"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.education}
              onChange={(e) =>
                setDetails({ ...details, education: e.target.value })
              }
              label="Education"
              labelPlacement="outside"
              placeholder="Education Status"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.college}
              onChange={(e) =>
                setDetails({ ...details, college: e.target.value })
              }
              label="College Name"
              labelPlacement="outside"
              placeholder="Enter College Name"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.employedIn}
              onChange={(e) =>
                setDetails({ ...details, employedIn: e.target.value })
              }
              label="Employed In"
              labelPlacement="outside"
              placeholder="Self/Company"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.organization}
              onChange={(e) =>
                setDetails({ ...details, organization: e.target.value })
              }
              label="Organization Name"
              labelPlacement="outside"
              placeholder="Enter Organization Name"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.income}
              onChange={(e) =>
                setDetails({ ...details, income: e.target.value })
              }
              label="Annual Income"
              labelPlacement="outside"
              placeholder="Enter Annual Income"
              className="w-full xs:w-[48%]"
            />
          </div>
          <h3
            className=" my-2 bg-gradient-to-r from-red-400 to-blue-400 text-transparent bg-clip-text w-fit text-xl font-bold text-black flex gap-2 items-center cursor-pointer"
            onClick={() =>
              setMenuOpen({ ...MenuOpen, family: !MenuOpen.family })
            }
          >
            Family Details
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`transition-all duration-500 text-blue-400 text-md ${
                MenuOpen.family ? "rotate-180" : ""
              }`}
            />
          </h3>

          <div
            className={`family-details flex flex-wrap justify-around gap-4 overflow-hidden transition-all duration-500 ${
              MenuOpen.family ? "h-0 opacity-0" : "h-[300px] opacity-100"
            }`}
          >
            <Input
              variant="flat"
              value={details.fname}
              onChange={(e) =>
                setDetails({ ...details, fname: e.target.value })
              }
              label="Father's Name"
              labelPlacement="outside"
              placeholder="Enter Father's Name"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.foccupation}
              onChange={(e) =>
                setDetails({ ...details, foccupation: e.target.value })
              }
              label="Father's Occupation"
              labelPlacement="outside"
              placeholder="Enter Father's Occupation"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.mname}
              onChange={(e) =>
                setDetails({ ...details, mname: e.target.value })
              }
              label="Mother's Name"
              labelPlacement="outside"
              placeholder="Enter Mother's Name"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.moccupation}
              onChange={(e) =>
                setDetails({ ...details, moccupation: e.target.value })
              }
              label="Mother's Occupation"
              labelPlacement="outside"
              placeholder="Enter Mother's Occupation"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.totalbrothers}
              onChange={(e) =>
                setDetails({ ...details, totalbrothers: e.target.value })
              }
              label="Total Brothers"
              labelPlacement="outside"
              placeholder="Enter Total Brothers"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.totalsisters}
              onChange={(e) =>
                setDetails({ ...details, totalsisters: e.target.value })
              }
              label="Total Sisters"
              labelPlacement="outside"
              placeholder="Enter Total Sisters"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.marriedbrothers}
              onChange={(e) =>
                setDetails({ ...details, marriedbrothers: e.target.value })
              }
              label="Married Brothers"
              labelPlacement="outside"
              placeholder="Total Married Brothers"
              className="w-full xs:w-[48%]"
            />
            <Input
              variant="flat"
              value={details.marriedsisters}
              onChange={(e) =>
                setDetails({ ...details, marriedsisters: e.target.value })
              }
              label="Married Sisters"
              labelPlacement="outside"
              placeholder="Enter Married Sisters"
              className="w-full xs:w-[48%]"
            />
          </div>
          <h3
            className=" my-2 bg-gradient-to-r from-red-400 to-blue-400 text-transparent bg-clip-text w-fit text-xl font-bold text-black flex gap-2 items-center cursor-pointer"
            onClick={() =>
              setMenuOpen({ ...MenuOpen, contact: !MenuOpen.contact })
            }
          >
            Contact Details
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`transition-all duration-500 text-blue-400 text-md ${
                MenuOpen.contact ? "rotate-180" : ""
              }`}
            />
          </h3>

          <div
            className={`family-details flex flex-wrap justify-around gap-4 overflow-hidden transition-all duration-500 ${
              MenuOpen.contact ? "h-0 opacity-0" : "h-[70px] opacity-100"
            }`}
          >
            <Input
              variant="flat"
              value={details.number}
              type="tel"
              onChange={(e) =>
                setDetails({ ...details, number: e.target.value })
              }
              label="Contact Number"
              labelPlacement="outside"
              placeholder="+91 XXX-XXX-XXXX"
              className="w-[48%]"
            />
            <Input
              variant="flat"
              value={details.address}
              onChange={(e) =>
                setDetails({ ...details, address: e.target.value })
              }
              label="Address"
              labelPlacement="outside"
              placeholder="Enter Address"
              className="w-[48%]"
            />
          </div>
          <h3 className={`my-2 text-xl font-bold bg-gradient-to-r from-red-400 to-blue-400 text-transparent bg-clip-text w-fit `}>Templates</h3>
          <div className="templates flex gap-2">
              {Templates.map((template, index) => (
                <div className={`template relative w-[100px] aspect-[1/1.41] ${details.template === template ? "border-2 border-blue-400" : "text-white"}`} key={index} onClick={() => setDetails({ ...details, template })}>
                  <Image src={template} alt={`Template ${index}`} fill/>
                </div>
              ))}
          </div>
          <div className="flex gap-2 mt-4">
            {isDomLoaded && (
              <PDFDownloadLink
                document={<Biodata {...details} />}
                fileName="biodata.pdf"
                className="w-full"
              >
                {({ loading, error }) =>
                  loading ? (
                    <Button className="w-full bg-blue-500 text-white">
                      Loading document...
                    </Button>
                  ) : (
                    <Button className="w-full bg-blue-500 text-white">
                      Download PDF
                    </Button>
                  )
                }
              </PDFDownloadLink>
            )}
            <Button className="w-full bg-pink-500 text-white">
              Share Generator
            </Button>
          </div>
        </form>
        {isDomLoaded && (
          <div className="hidden lg:flex w-[40%] max-w-[800px] m-auto aspect-[9/16] px-2">
            <PDFViewer className="w-full h-screen p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.2)] bg-gradient-to-t from-blue-200 to-white">
              <Biodata {...details} />
            </PDFViewer>
          </div>
        )}
      </div>
    </main>
  );
}

export default Page;
