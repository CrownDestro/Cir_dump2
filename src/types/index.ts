import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: "student" | "mentor" | "admin"; // Add your custom role types here
    };
  }

  interface User {
    role?: "student" | "mentor" | "admin";
  }
}
