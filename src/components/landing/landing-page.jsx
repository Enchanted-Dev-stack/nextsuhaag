'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Next.js 13+
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from 'framer-motion';

export function LandingPageComponent() {
  const [formData, setFormData] = useState({
    lookingFor: '',
    ageFrom: '',
    ageTo: '',
    religion: '',
    motherTongue: ''
  });

  const router = useRouter();

  const handleSelectChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build query string for the URL
    const query = new URLSearchParams(formData).toString();
    router.push(`/register?${query}`);
  };

  return (
    <>
      <h2 className='relative text-3xl md:text-4xl text-white mb-5 text-center text-shadow-custom font-normal'>Connecting souls, <br className='md:hidden'/> Crafting stories</h2>
    <div
      // initial={{ scale: 0.9, opacity: 0 }}
      // animate={{ scale: 1, opacity: 1 }}
      // transition={{ delay: 0.6, duration: 0.8 }}
      className="w-full max-w-6xl mx-auto bg-black bg-opacity-20 backdrop-blur-sm max-md:backdrop-blur-[2px] p-8 max-md:p-4 rounded-lg font-normal font-Outfit">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-md:gap-2 w-full">
        {/* Form Fields */}
        <div className="space-y-4 max-md:space-y-2 text-red-600">
          <Select onValueChange={(value) => handleSelectChange('lookingFor', value)}>
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="I'm looking for" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="woman">Woman</SelectItem>
              <SelectItem value="man">Man</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="grid grid-cols-2 gap-4">
            <Select onValueChange={(value) => handleSelectChange('ageFrom', value)}>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Age from" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="18">18</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="30">30</SelectItem>
                <SelectItem value="35">35</SelectItem>
                <SelectItem value="40">40</SelectItem>
              </SelectContent>
            </Select>
            
            <Select onValueChange={(value) => handleSelectChange('ageTo', value)}>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Age to" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="30">30</SelectItem>
                <SelectItem value="35">35</SelectItem>
                <SelectItem value="40">40</SelectItem>
                <SelectItem value="50">50+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4 text-red-600">
          <Select onValueChange={(value) => handleSelectChange('religion', value)}>
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Religion" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hindu">Hindu</SelectItem>
              <SelectItem value="muslim">Muslim</SelectItem>
              <SelectItem value="christian">Christian</SelectItem>
              <SelectItem value="sikh">Sikh</SelectItem>
              <SelectItem value="jain">Jain</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          
          <Select onValueChange={(value) => handleSelectChange('motherTongue', value)} className="max-md:hidden">
            <SelectTrigger className="w-full bg-white max-md:hidden">
              <SelectValue placeholder="Mother Tongue" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hindi">Hindi</SelectItem>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="bengali">Bengali</SelectItem>
              <SelectItem value="tamil">Tamil</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2">
          <Button 
            className="w-full bg-pink-600 text-white hover:bg-pink-700"
            onClick={handleSubmit}
          >
            Let&apos;s Begin
          </Button>
        </div>
      </form>
    </div>
    </>
  );
}
