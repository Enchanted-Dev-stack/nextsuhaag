"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowRight,
  ArrowLeft,
  User,
  Briefcase,
  Heart,
  Mail,
  CheckCircle,
} from "lucide-react";
import { Toaster, toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import confetti from "canvas-confetti";

export function RegisterPageComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [verificationCode, setVerificationCode] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [verifymsg, setVerifymsg] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    course: "",
    phoneNumber: "",
    dob: "",
    gender: "",
    education: "",
    occupation: "",
    annualIncome: "",
    workLocation: "",
    maritalStatus: "",
    religion: "",
    diet: "",
    interests: [],
    about: "",
    lookingFor: "",
    ageFrom: "",
    ageTo: "",
    address: "",
    motherTongue: "",
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      lookingFor: searchParams.get("lookingFor") || "",
      ageFrom: searchParams.get("ageFrom") || "",
      ageTo: searchParams.get("ageTo") || "",
      religion: searchParams.get("religion") || "",
      motherTongue: searchParams.get("motherTongue") || "",
    }));
  }, [searchParams]);

  useEffect(() => {
    if (step === 4 && !isEmailSent) {
      sendVerificationCode();
    }
  }, [step, isEmailSent]);

  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (interest) => {
    setFormData((prevData) => ({
      ...prevData,
      interests: prevData.interests.includes(interest)
        ? prevData.interests.filter((i) => i !== interest)
        : [...prevData.interests, interest],
    }));
  };

  const validateStep = () => {
    // const errors = []
    // if (step === 1) {
    //   if (!formData.firstName) errors.push("First name is required")
    //   if (!formData.lastName) errors.push("Last name is required")
    //   if (!formData.email) errors.push("Email is required")
    //   if (!/\S+@\S+\.\S+/.test(formData.email)) errors.push("Email is invalid")
    //   if (!formData.phoneNumber) errors.push("Phone number is required")
    //   if (!/^\d{10}$/.test(formData.phoneNumber)) errors.push("Phone number is invalid")
    //   if (!formData.dob) errors.push("Date of birth is required")
    //   if (!formData.gender) errors.push("Gender is required")
    // } else if (step === 2) {
    //   if (!formData.education) errors.push("Education is required")
    //   if (!formData.occupation) errors.push("Occupation is required")
    //   if (!formData.annualIncome) errors.push("Annual income is required")
    // } else if (step === 3) {
    //   if (!formData.maritalStatus) errors.push("Marital status is required")
    //   if (!formData.religion) errors.push("Religion is required")
    // } else if (step === 4) {
    //   if (!isVerified) errors.push("Email verification is required")
    // }
    return true
  };

  const nextStep = () => {
    const errors = validateStep();
    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return;
    }
    setStep(step + 1);
    setProgress(progress + 25);
  };

  const prevStep = () => {
    setStep(step - 1);
    setProgress(progress - 25);
  };

  const sendVerificationCode = () => {
    console.log("Sending verification code...");
    if (!isVerified) {
      axios
        .post("/api/mailer/mailauth", { email: formData.email })
        .then((response) => {
          toast.success("Verification code sent to your email");
          setIsEmailSent(true);
          setResendTimer(30);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const verifyEmail = async () => {
    try {
      // Make API call
      const response = await axios.post("/api/auth/verifyotp", {
        email: formData.email,
        otp: verificationCode
      });
  
      // Handle successful response (status 200)
      console.log(response.data.message);
      setIsVerified(true);
      setVerifymsg(response.data.message);
      toast.success("Email verified successfully!");
  
      // Trigger confetti animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      

    } catch (error) {
      // Handle error response (e.g., status 400)
      if (error.response && error.response.status === 400) {
        console.log(error.response.data.message);
        setVerifymsg(error.response.data.message); // Set the message for invalid OTP
        toast.error("Invalid OTP. Please try again.");
      } else {
        // Handle other errors (e.g., network errors, server errors)
        console.error(error);
        toast.error("Verification failed. Please try again.");
      }
    }
  };
  

  const handleSubmit = () => {
    const errors = validateStep();
    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return;
    }
    
    axios.post("/api/auth/register", formData).then((response) => {
      console.log(response.data);
      toast.success("Registration complete!");
      setTimeout(() => {
        router.push("/register/thank-you");
      }, 1000);
    })
    .catch((error) => {
      toast.error("Registration failed. Please try again.");
      console.log(error);
    });
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center p-4 relative overflow-hidden font-Outfit">
      <Toaster position="top-center" />
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute -top-20 -right-20 text-pink-500 opacity-10">
          <Heart size={300} />
        </div>
        <div className="absolute bottom-0 right-0 text-purple-500 opacity-10">
          <Heart size={200} />
        </div>
      </div>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8 w-full max-w-2xl relative z-10"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Join Suhaag
        </h1>
        <div className="mb-8">
          <div className="h-2 bg-gray-200 rounded-full">
            <motion.div
              className="h-full bg-pink-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-sm font-medium text-gray-600">Start</span>
            <span className="text-sm font-medium text-gray-600">Finish</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="personal"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <User className="mr-2" /> Personal Details
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name*</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name*</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <Label htmlFor="phoneNumber">Phone Number*</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="dob">Date of Birth*</Label>
                  <Input
                    id="dob"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address*</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your address"
                  />
                </div>
                <div>
                  <Label htmlFor="gender">Gender*</Label>
                  <Select
                    name="gender"
                    value={formData.gender}
                    onValueChange={(value) =>
                      handleSelectChange("gender", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="lookingFor">Looking For*</Label>
                  <Select
                    name="lookingFor"
                    value={formData.lookingFor}
                    onValueChange={(value) =>
                      handleSelectChange("lookingFor", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your Preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="woman">Woman</SelectItem>
                      <SelectItem value="man">Man</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="ageFrom">Age From*</Label>
                    <Input
                      id="ageFrom"
                      name="ageFrom"
                      value={formData.ageFrom}
                      onChange={handleInputChange}
                      placeholder="Enter minimum age"
                    />
                  </div>
                  <div>
                    <Label htmlFor="ageTo">Age To*</Label>
                    <Input
                      id="ageTo"
                      name="ageTo"
                      value={formData.ageTo}
                      onChange={handleInputChange}
                      placeholder="Enter maximum age"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="career"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Briefcase className="mr-2" /> Career Details
              </h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="education">Highest Education*</Label>
                  <Select
                    name="education"
                    value={formData.education}
                    onValueChange={(value) =>
                      handleSelectChange("education", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your highest education" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="highschool">High School</SelectItem>
                      <SelectItem value="bachelors">
                        Bachelor&apos;s Degree
                      </SelectItem>
                      <SelectItem value="masters">
                        Master&apos;s Degree
                      </SelectItem>
                      <SelectItem value="phd">Ph.D.</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="course">Course Name</Label>
                  <Input
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    placeholder="Enter your pursued Course"
                  />
                </div>
                <div>
                  <Label htmlFor="occupation">Occupation</Label>
                  <Input
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleInputChange}
                    placeholder="Enter your occupation"
                  />
                </div>
                <div>
                  <Label htmlFor="annualIncome">Annual Income*</Label>
                  <Select
                    name="annualIncome"
                    value={formData.annualIncome}
                    onValueChange={(value) =>
                      handleSelectChange("annualIncome", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your income range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="upto 1 lakh">upto ₹ 1 Lakh</SelectItem>
                      <SelectItem value="₹ 1 Lakh to ₹ 2 Lakh">₹ 1 Lakh to ₹ 2 Lakh</SelectItem>
                      <SelectItem value="₹ 2 Lakh to ₹ 4 Lakh">
                        ₹ 2 Lakh to ₹ 4 Lakh
                      </SelectItem>
                      <SelectItem value="₹ 7 Lakh to ₹ 10 Lakh">₹ 7 Lakh to ₹ 10 Lakh</SelectItem>
                      <SelectItem value="₹ 10 Lakh to ₹ 15 Lakh">₹ 10 Lakh to ₹ 15 Lakh</SelectItem>
                      <SelectItem value="₹ 15 Lakh to ₹ 20 Lakh">₹ 15 Lakh to ₹ 20 Lakh</SelectItem>
                      <SelectItem value="₹ 20 Lakh to ₹ 30 Lakh">₹ 20 Lakh to ₹ 30 Lakh</SelectItem>
                      <SelectItem value="₹ 30 Lakh to ₹ 50 Lakh">₹ 30 Lakh to ₹ 50 Lakh</SelectItem>
                      <SelectItem value="₹ 50 Lakh to ₹ 75 Lakh">₹ 50 Lakh to ₹ 75 Lakh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="workLocation">Work Location</Label>
                  <Input
                    id="workLocation"
                    name="workLocation"
                    value={formData.workLocation}
                    onChange={handleInputChange}
                    placeholder="Enter your work location"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="lifestyle"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Heart className="mr-2" /> Additional Details
              </h2>
              <div className="space-y-4">
                <div>
                  <Label>Marital Status*</Label>
                  <RadioGroup
                    value={formData.maritalStatus}
                    onValueChange={(value) =>
                      handleSelectChange("maritalStatus", value)
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="single" id="single" />
                      <Label htmlFor="single">Single</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="widowed" id="widowed" />
                      <Label htmlFor="widowed">Widowed</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="awaitingDivorce" id="awaitingDivorce" />
                      <Label htmlFor="awaitingDivorce">Awaiting Divorce</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="divorced" id="divorced" />
                      <Label htmlFor="divorced">Divorced</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <Label htmlFor="religion">Religion*</Label>
                  <Select
                    name="religion"
                    value={formData.religion}
                    onValueChange={(value) =>
                      handleSelectChange("religion", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your religion" />
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
                </div>
                <div>
                  <Label htmlFor="diet">Diet Preferences</Label>
                  <Select
                    name="diet"
                    value={formData.diet}
                    onValueChange={(value) => handleSelectChange("diet", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your diet preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="veg">Vegetarian</SelectItem>
                      <SelectItem value="nonveg">Non-vegetarian</SelectItem>
                      <SelectItem value="vegan">Vegan</SelectItem>
                      <SelectItem value="Occasionally non veg">Occasionally non veg</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Interests</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Reading",
                      "Traveling",
                      "Music",
                      "Sports",
                      "Cooking",
                      "Movies",
                    ].map((interest) => (
                      <div
                        key={interest}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={interest.toLowerCase()}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={() => handleCheckboxChange(interest)}
                        />
                        <label
                          htmlFor={interest.toLowerCase()}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {interest}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="about">About Yourself</Label>
                  <Textarea
                    id="about"
                    name="about"
                    value={formData.about}
                    onChange={handleInputChange}
                    placeholder="Tell us about yourself"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="verification"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Mail className="mr-2" /> Email Verification
              </h2>
              <div className="space-y-4">
                <p>
                  We&apos;ve sent a verification code to your email. Please
                  enter it below to complete your registration.
                </p>
                <div>
                  <Label htmlFor="verificationCode">Verification Code*</Label>
                  <Input
                    id="verificationCode"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    placeholder="Enter verification code"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <Button
                    onClick={sendVerificationCode}
                    variant="outline"
                    disabled={resendTimer > 0 || isVerified}
                  >
                    {resendTimer > 0
                      ? `Resend in ${resendTimer}s`
                      : "Resend Code"}
                  </Button>
                  <Button onClick={verifyEmail} disabled={isVerified}>
                    {isVerified ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" /> Verified
                      </>
                    ) : (
                      "Verify Email"
                    )}
                  </Button>
                </div>
                <div>
                  <Label htmlFor="Password">Password*</Label>
                  <Input
                    id="Password"
                    value={formData.password}
                    name="password"
                    onChange={handleInputChange}
                    placeholder="Enter Password"
                  />
                </div>
                {isVerified && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 font-semibold text-center"
                  >
                    {verifymsg}
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <Button onClick={prevStep} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
          )}
          {step < 4 ? (
            <Button onClick={nextStep} className="ml-auto">
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="ml-auto bg-pink-500 hover:bg-pink-600"
              disabled={!isVerified}
            >
              Complete Registration
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
