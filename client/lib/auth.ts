import { PrismaClient } from "@/generated/prisma/client";
import { betterAuth } from "better-auth/minimal";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";

const prisma = new PrismaClient()
export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },

  },
  plugins: 
[nextCookies()]
  ,
  session:{
    cookieCache:{
      enabled:true,
      maxAge:5 * 60 //Cache Duration in seconds
    }
  }
});