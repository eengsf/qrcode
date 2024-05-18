import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcrypt";

export async function POST(request, response) {
  try {
    const { email, password } = await request.json();
    // const existingUser = await User.findOne({ email });
    // if (existingUser) {
    //   return res.status(400).json({ message: "User already exists" });
    // }

    const hashedPassword = await bcrypt.hash(password, 10);
    await connectDB();
    await User.create({
      email,
      password: hashedPassword,
    });
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "fail" }, { status: 400 });
  }
}
