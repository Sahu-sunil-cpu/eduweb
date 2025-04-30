"use client";

import React, { use, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CourseModal from "../components/CourseModal";
import axios from "axios";
import { BACKEND_URL } from "../utils";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { stringify } from "querystring";


interface college {
  collegeImg: string;
  id: number;
  name: string;
}


const StructXPage = () => {
  const [slug, setSlug] = useState<number>();
  const [open, setOpen] = useState(false);
  const [colleges, setColleges] = useState<college[]>([]);
  const [loading, setLoading] = useState(true);

  const session = useSession();

  const getColleges = async () => {
    const res = await axios.get(`${BACKEND_URL}/api/college`);
    console.log(res.data)
    setColleges(res.data)

    console.log(colleges);
    setLoading(false);
  }


  useEffect(() => {
    getColleges()
  }, [slug])

  if (session.status == 'loading' || loading) {
    return <div className="text-3xl flex justify-center mt-24">
      loading....
    </div>
  } else {
    if (!session.data?.user) signIn();

  }




  return (
    <div className="min-h-screen bg-gray-100 border border-black">

      {/* course modal */}
      <CourseModal open={open} setOpen={setOpen} slug={slug}/>

      {/* Search Box */}
      <div className="flex justify-center mt-10">
        <div className="mb-3">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="text"
              placeholder="Try 'B.Tech CSE - AKTU' or 'MBA - DU'"
              className="w-[600px] h-12 px-4 py-2 border border-blue-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

          </div>
        </div>
      </div>

      {/* University Cards */}
      <div className="flex flex-col items-center mt-10 space-y-4">
        {colleges.map((item) => (
          <div
            key={item.id}
            className="flex items-center w-1/2 bg-gray-400 rounded-lg py-2 px-4 shadow-md cursor-pointer"
            onClick={() => {
              setOpen(true);
              setSlug(item.id)
            }}
          >
            <img
              src={item.collegeImg}
              alt={item.name}
              className="w-44 h-24 rounded-xl object-cover mr-6 "
            />
            <div className="text-white italic text-xl">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StructXPage;
