import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import CredentialsProvider from 'next-auth/providers/credentials';
import { prismaClient } from "@repo/db/prisma"





const handler = NextAuth({
   providers: [
     CredentialsProvider({
         name: 'Credentials',
         credentials: {
           username: { label: 'email', type: 'text', placeholder: '' },
           password: { label: 'password', type: 'password', placeholder: '' },
           email: { label: 'email', type: 'email', placeholder: '' }
         },
         async authorize(credentials: any) {
          try {
            const data = await prismaClient.user.create({
              data: {
                username: credentials.username,
                password: credentials.password,
                email: credentials.email
              }

             
             })

       
          }catch (e) {
            console.log(e);
          }

          
          return {
            id: credentials.id,
            name: credentials.username,
            email: credentials.email
          }; 

          
          
         },
       }),
       GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID ?? "",
         clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      })
   ],
   secret: process.env.NEXTAUTH_SECRET
 })

export { handler as GET, handler as POST };