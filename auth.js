import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import User from "./app/models/userModel";
import { connect } from "./app/lib/dbConn";

async function connectDB() {
  await connect(); 
  console.log("✅ MongoDB Connected");
}

export const { handlers, signIn, signOut, auth } = NextAuth({ 
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async ({ email, password }) => {
        try {
          const user = await User.findOne({ email });

          if (!user) throw new Error("User not found");

          const isValidPassword = compare(password, user.password);

          if (!isValidPassword) throw new Error("Password is wrong");

          console.log(user);
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
    maxAge: 7 * 24 * 60 * 60,
  },
  jwt:{
    maxAge: 7 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.provider === "google") {
        // Find user in DB or create new one if not exists
        let dbUser = await User.findOne({ email: user.email });

        if (!dbUser) {
          dbUser = await User.create({
            username: user.name,
            email: user.email,
            password: "Google", // No password for Google users
            isVerified: true,
          });
        }

        token.id = dbUser.id;
        token.email = dbUser.email;
        token.name = dbUser.username;
      } else if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.username;
      }

      console.log(token.name)
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },
  },
});
