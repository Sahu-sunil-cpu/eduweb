"use client"
import { signIn, signOut, useSession } from "next-auth/react"


export default function Navbar() {
const session = useSession();
    return (
        <>
          <div className="bg-white flex justify-between items-center px-6 py-4 shadow">
        <div className="text-2xl font-bold">
          STRUCT<span className="text-blue-600">X</span>
        </div>
        <div className="space-x-6 text-lg flex">
         <button  className="hover:underline cursor-pointer ">Papers </button>
         <button  className="hover:underline cursor-pointer">Books </button>
         <button  className="hover:underline cursor-pointer">Contact </button>
          <div className="space-x-6"> 
            {
              session.status == 'authenticated' ? 
              <button  className="hover:underline cursor-pointer" onClick={() => signOut()}>Logout </button>
              :
              <button  className="hover:underline cursor-pointer" onClick={() => signIn()}>Login </button>
            }
        
        
          </div>
        </div>
      </div>
        </>
    )
}