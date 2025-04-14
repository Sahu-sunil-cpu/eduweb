import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import CredentialsProvider from 'next-auth/providers/credentials';





const handler = NextAuth({
   providers: [
     CredentialsProvider({
         name: 'Credentials',
         credentials: {
           username: { label: 'email', type: 'text', placeholder: '' },
           password: { label: 'password', type: 'password', placeholder: '' },
         },
         async authorize(credentials: any) {
             
             return {
               id: "user1",
               name: "asd",
               userId: "asd",
               email: "ramdomEmail"
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