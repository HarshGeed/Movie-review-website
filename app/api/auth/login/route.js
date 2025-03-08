import { connect } from "@/app/lib/dbConn";
import User from "@/app/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

connect();

export async function POST(request){
    try {
       
        const reqBody = await request.json();
        const {email, password} = reqBody;
        console.log(reqBody);

        //check if user exists or not
        const user = await User.findOne({email});
        if(!user) return NextResponse.json({error: "user does not exists"}, {status: 400});
        console.log("user exists");

        const validPassword = await bcryptjs.compare(password, user.password);
        if(!validPassword) return NextResponse.json({error: "invalid password"}, {status: 400});
        console.log(user)

        // create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        // creating token
        const token =  jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: '1d'});

        const response = NextResponse.json({
            message: 'Login successful',
            success: true
        })

        cookies().set("token", token, {httpOnly: true})
        return response;
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}