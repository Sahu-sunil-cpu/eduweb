"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Dialog from "./Dialog";
import { X } from "lucide-react";
import { getServerSession } from "next-auth";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";
import { BACKEND_URL } from "../utils";
import Link from "next/link";

interface course {
  id: number;
  name: string;
  courseImg: string
}

export default function CourseModal({ open, setOpen, slug }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, slug: number | undefined }) {
  const [courses, setCourses] = useState<course[]>([])

  const [loading, setLoading] = useState(true);


  const session = useSession();
  const router = useRouter();
  const clickHandler = () => {
    if (session.data?.user) {
      router.push('/subjects')
    }
  }


  const getCourses = async () => {
    if (slug) {
      const res = await axios.get(`${BACKEND_URL}/api/courses/${slug}`)
      console.log(res.data);

      setCourses(res.data)
      setLoading(false);
    }
  }
  useEffect(() => {
    getCourses();
    setLoading(true);

  }, [slug])


  return (

    <Dialog open={open} setOpen={setOpen}>

      <div className="max-w-3xl p-2 rounded-2xl bg-white shadow-2xl  absolute top-32 right-150">
        <div className=" px-6  h-[400px] overflow-auto w-[300px]">
          <div>
            <div className="text-2xl text-purple-700 mb-4"> Courses Offered {slug}</div>
          </div>
          {
            loading ? <div>loading ...</div>
              :
              <div className="space-y-3">

                {
                  courses[0] != undefined ? courses.map((e) => (
          

                <div key={e.id}>
                    <Link 
                    className="block px-4 py-2 rounded-lg bg-purple-100 hover:bg-purple-200 text-purple-800 font-medium transition-colors duration-200"
                    href={{
                      pathname: `/subjects/${e.id}`,
                    }}
                    
                    >{e.name}</Link>
                </div>


                  ))
                    :

                    <div className="text-xl flex justify-center  mt-32">no courses</div>
                }
              </div>
          }

        </div>
      </div>
    </Dialog>

  );
}
