import { connect } from "@/app/lib/dbConn";
import User from "@/app/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(request) {
    try {
        await connect(); // Ensure the database is connected before proceeding

        const reqBody = await request.json(); // Correctly parse JSON body
        const { username, email, password } = reqBody;

        console.log(reqBody);

        // Check if user already exists
        const user = await User.findOne({ email });

        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            user: savedUser, // Return user data (consider removing password before sending)
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
