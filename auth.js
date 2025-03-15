import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import User from "./app/models/userModel";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async ({ email, password }) => {
        try {
          const user = await User.findOne({ email });

          if (!user) throw new Error("User not found");

          const isValidPassword = await compare(password, user.password);

          if (!isValidPassword) throw new Error("Password is wrong");

          console.log(user)
          return user;
        } catch (error) {
          console.log("Error =>", error.message);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true,
  },
});
