import { connect } from "../../../DB/mongodb";
import User from "../../../DB/models/user";
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { useSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connect();
    const { email, password } = await req.json();

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ status: 404, message: "User not found" });
    }

    // Compare the passwords
    const isMatch = await argon2.verify(user.password, password);
    if (!isMatch) {
      return NextResponse.json({ status: 400, message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: '1h' // Set the token expiration time
    });

    // Return the token along with any other user data
    return NextResponse.json({
      status: 200, 
      message: "User logged in successfully",
      token,
      user: { _id: user._id, username: user.username, email: user.email } // You can include other user data as needed
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, message: "Internal server error" });
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  if (req.method === "GET") {
    await connect();
    return NextResponse.json({ message: "Internal server error" });
  }
}
