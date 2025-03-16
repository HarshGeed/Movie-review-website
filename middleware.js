import { NextResponse } from "next/server";
import { auth } from "@/auth"; // Import NextAuth authentication function

export async function middleware(req) {
  const session = await auth();

  // If user is not authenticated, redirect to sign-in page
  if (!session) {
    return NextResponse.redirect(new URL("api/auth/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"], // Protect only the home page
};
