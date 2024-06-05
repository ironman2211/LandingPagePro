import { connect } from "../../../DB/mongodb";
import User from "../../../DB/models/user";
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connect();
    const { username, email, password } = await req.json();
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ status: 400, message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await argon2.hash(password);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'your_secret_key_here', { expiresIn: '1h' });

    // Return response with token and user data
    return NextResponse.json({
      status: 200, 
      message: "User created successfully",
      successful: true,
      token,
      user,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
