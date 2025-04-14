"use client"
import { useSession } from "next-auth/react";
import React from "react";

const StructXHeroPage = () => {
  const session = useSession();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">

      {/* Hero Section */}
      <section className="bg-white text-center py-12 px-4 relative">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Find the right content<br />without the chaos
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          StructX curates top-rated videos and exam papers so you don't have to spend hours searching.
        </p>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/students-doing-online-class-4585109-3815851.png"
          alt="Students Illustration"
          className="mx-auto w-full max-w-md mb-6"
        />
        <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition">
        {JSON.stringify(session.data?.user)}
        </button>
      </section>

      {/* Features Section */}
      <section className="bg-gray-200 py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Explore Structured Btech And Other Courses From Top Universities For Free
          </h2>
          <p className="text-gray-700 mb-6">
            Get access to organized curriculum, video lectures and exam material – in one place
          </p>
          <div className="flex justify-center items-center space-x-4">
            <img src="https://cdn-icons-png.flaticon.com/512/1048/1048942.png" alt="Graduation Cap" className="w-12 h-12" />
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="w-12 h-12" />
            <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png" alt="Books" className="w-12 h-12" />
          </div>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Start by searching your university"
              className="w-full max-w-md p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
 
    </div>
  );
};

export default StructXHeroPage;
