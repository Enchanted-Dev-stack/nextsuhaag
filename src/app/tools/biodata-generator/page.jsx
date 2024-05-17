"use client";
import Biodata from "@/components/Tools/Biodata/Biodata";
import React, { useEffect, useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { DatePicker, Input, Button } from "@nextui-org/react";

function Page() {
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  const [isRendered, setRendered] = useState(true);

  const [details, setDetails] = useState({
    template: "http://localhost:3000/BiodataTemplates/BIODATA.png",
    name: "",
    dob: "",
    tob: "",
    pob: "",
    rashi: "",
    naskhatra: "",
    height: "",
    religion: "",
    caste: "",
    subcast: "",
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
  }, [details]);

  useEffect(() => {
    setIsDomLoaded(true);
  }, []);

  return (
    <main className="font-Outfit font-semibold p-4 bg-gradient-to-t from-blue-200 to-white">
      <div>
        <h1 className="text-3xl font-bold">Biodata Generator</h1>
      </div>
      <div className="flex gap-3">
      <form className="form w-[60%] max-w-[800px] m-auto shadow-[0_0_10px_0_rgba(0,0,0,0.2)] p-4">
        <div className="w-full flex justify-around flex-wrap gap-4">
          <Input
            variant="flat"
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            label="Name"
            labelPlacement="outside"
            placeholder="Enter your name"
            className="w-[48%]"
          />
          <DatePicker
            variant="flat"
            onChange={(date) => setDetails({ ...details, dob: date.toString().split('T')[0] })}
            label="DOB"
            labelPlacement="outside"
            placeholder="Enter Date of Birth"
            className="w-[48%]"
          />
          <Input
            variant="flat"
            value={details.tob}
            onChange={(e) => setDetails({ ...details, tob: e.target.value })}
            label="Time of Birth"
            labelPlacement="outside"
            placeholder="Enter Time of Birth"
            className="w-[48%]"
          />
          <Input
            variant="flat"
            value={details.pob}
            onChange={(e) => setDetails({ ...details, pob: e.target.value })}
            label="Place of Birth"
            labelPlacement="outside"
            placeholder="Enter Place of Birth"
            className="w-[48%]"
          />
          <PDFDownloadLink
            document={<Biodata {...details} />}
            fileName="biodata.pdf"
          >
            {({ loading, error }) =>
              loading ? (
                <Button>Loading document...</Button>
              ) : (
                <Button>Download now!</Button>
              )
            }
          </PDFDownloadLink>
        </div>
      </form>
      {isDomLoaded && (
        <div className="w-[40%] max-w-[800px] m-auto">
          
          <PDFViewer className="w-full h-screen p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.2)]">
            <Biodata {...details} />
          </PDFViewer>
        </div>
      )}
      </div>
    </main>
  );
}

export default Page;
