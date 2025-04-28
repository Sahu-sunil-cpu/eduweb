"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import Dialog from "./Dialog";
import { X } from "lucide-react";
import { getServerSession } from "next-auth";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
const courses = [
  "Computer Science",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Business Administration",
  "Psychology",
  "Biology",
  "Economics",
  "Political Science",
  "Psychology",
  "Biology",
  "Economics",
  "Political Science",
];

export default function CourseModal({open, setOpen}: {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>}) {
    const session = useSession();
    const router = useRouter();
  const clickHandler = () => {
    if(session.data?.user) {
        router.push('/subjects')
    }
  }
  return (
    
      <Dialog open={open} setOpen={setOpen}>
        
            <div className="max-w-3xl p-2 rounded-2xl bg-white shadow-2xl  absolute top-32 right-150">
        <div className=" px-6  h-[400px] overflow-auto w-[300px]">
          <div>
            <div className="text-2xl text-purple-700 mb-4">Courses Offered</div>
          </div>
          <div className="space-y-3">
            {courses.map((course, index) => (
             
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg bg-purple-100 hover:bg-purple-200 text-purple-800 font-medium transition-colors duration-200"
                  onClick={clickHandler}
                >
                  {course}
                </a>
             
            ))}
          </div>
        </div>
        </div>
      </Dialog>
   
  );
}
