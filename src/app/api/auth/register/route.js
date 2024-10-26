import { connectDb } from "../../db/connection";
import { User } from "@/app/api/db/models/user";

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
            annualIncome
        } = body;

        const newUser = new User({
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
            education: {
                highestQualification: education,
                courseName: course,
            },
            occupation,
            company,
            annualIncome,
        });

        await newUser.save();

        return new Response(JSON.stringify({ message: "User registered successfully!" }), { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }
}
