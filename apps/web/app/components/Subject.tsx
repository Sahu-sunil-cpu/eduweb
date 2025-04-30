'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../utils";
import { Divide } from "lucide-react";

interface subject {
  id: number;
    courseId: number;
    name: string
    subImg: string
}

const SubjectStructx =  ({id} : {id: string}) => {
 const [subjects, setSubjects] = useState<subject[]>([])
 const [loading, setLoading] = useState(true);

const getSubjects = async () => {
  const res = await axios.get(`${BACKEND_URL}/api/subject/${id}`);
  setSubjects(res.data);
  setLoading(false);
}
 useEffect(() => {
  getSubjects();
  setLoading(true);
 }, [id])

  return (
    <div className="min-h-screen bg-gray-100 border border-black">

      {/* Banner */}
      <div className="w-full h-48 bg-sky-600 flex items-center justify-center text-white text-3xl font-semibold mt-8 rounded-2xl shadow" >
        {
            loading ? 'loading...' : '  Explore Top Courses and Structured Learning Content Of AKTU'
        }
      
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10 p-4 bg-gray-200 rounded-lg">
        
           
    {loading && <div>loading...</div>}    
 {!loading && subjects.map((e) => (
            <React.Fragment key={e.id}>
              {subjects.map((e) => (
                  
                <div key={e.id} className="flex justify-center cursor-pointer" >
                  <div
                    className="w-32 h-24 sm:w-48 sm:h-32 rounded-xl object-cover shadow-md bg-white text-2xl flex justify-center "
                  >
                    
                    {e.name}
                    </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        
        

       
      </div>

    </div>
  );
};

export default SubjectStructx;
