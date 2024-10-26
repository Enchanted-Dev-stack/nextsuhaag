import { connectDb } from "../../db/connection";
import { OTP } from "@/app/api/db/models/otp"; // Ensure you have this import

connectDb();

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, otp } = body;

    // Check if the OTP document with matching email and otp exists
    const user = await OTP.findOne({ email, otp });
    console.log(`findin user ${email} & ${otp}`);
    if (user) {
      return new Response(JSON.stringify({ message: "OTP verified successfully" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify({ message: "Invalid OTP" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
