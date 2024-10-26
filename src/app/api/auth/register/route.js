import { connectDb } from "../../db/connection";
import { User } from "@/app/api/db/models/user";
import bcrypt from "bcrypt";

connectDb();

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      address,
      state,
      city,
      pincode,
      dob,
      gender,
      religion,
      education,
      course,
      occupation,
      company,
      annualIncome,
    } = body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      state,
      city,
      pincode,
      dob,
      gender,
      religion,
      education: {
        highestQualification: education,
        courseName: course,
      },
      occupation,
      company,
      annualIncome,
    });

    await newUser.save();

    return new Response(
      JSON.stringify({ message: "User registered successfully!" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
}
