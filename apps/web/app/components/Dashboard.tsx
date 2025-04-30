"use client"
import { signIn, useSession } from "next-auth/react";
import React from "react";
import "../globals.css";
import { useRouter } from 'next/navigation'


export default function StructXHeroPage(){
  const session = useSession();
  const router = useRouter();

  const clickHandler = () => {
    if (session.data?.user) {
      router.push('/searchCollege');
    }else {
      signIn();
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between border border-black">

      {/* Hero Section */}
      <section className="bg-white text-center py-12 px-4 relative">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Find the right content<br />without the chaos
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          StructX curates top-rated videos and exam papers so you don't have to spend hours searching.
        </p>
        <img
          src="/hero_2.png"
          alt="/hero_2.png"
          className="mx-auto w-[900px] mb-6"
        />
        <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition cursor-pointer" onClick={clickHandler}>
          {/* {JSON.stringify(session.data?.user)} */}
          Get Started
        </button>

        {/* <svg width="1000" height="200" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
        <defs><linearGradient id="gradient" x1="77%" y1="8%" x2="23%" y2="92%"><stop offset="5%" stop-color="#6f63ff"></stop><stop offset="95%" stop-color="#cbd0ff"></stop></linearGradient></defs><path d="M 0,400 L 0,150 C 102.35406698564591,128.1244019138756 204.70813397129183,106.24880382775119 307,101 C 409.29186602870817,95.75119617224881 511.52153110047846,107.12918660287082 606,118 C 700.4784688995215,128.87081339712918 787.2057416267943,139.23444976076559 879,161 C 970.7942583732057,182.76555023923441 1067.6555023923445,215.93301435406698 1162,216 C 1256.3444976076555,216.06698564593302 1348.1722488038276,183.0334928229665 1440,150 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg> */}
      </section>

      {/* Features Section */}
      <section className="bg-gray-200 py-10 px-25">

        <div className="flex ">
          <img src="/hero_3.png" alt="" className="w-[600px] " />
          <div className="max-w-4xl  text-align ml-6 mt-20">
            <h1 className="text-2xl font-bold mb-4 ">
              Tired of Getting Lost in the Learning Maze?

            </h1>
            <h2 className="text-xl font-bold mb-4 ">
              Structured Courses. Curated Resources. Stress-Free Learning.**

            </h2>
            <p className="text-gray-700 mb-6">
              Structx helps students of B.Tech, MBA, and other top university programs learn faster and better — by giving them handpicked content, structured just like the real syllabus
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700 mb-8">
              <div className="bg-white p-4 rounded-xl shadow">
                📚 <strong>Structured Courses</strong><br />
                Follow real university syllabi
              </div>
              <div className="bg-white p-4 rounded-xl shadow">
                🎥 <strong>Curated Videos</strong><br />
                Learn from top educators
              </div>
              <div className="bg-white p-4 rounded-xl shadow">
                📄 <strong>Exam Materials</strong><br />
                Papers, notes & books
              </div>
            </div>


            <div className="mb-3">
              <label className="block mb-1 font-medium text-gray-800">Search Your University or Course</label>
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <input
                  type="text"
                  placeholder="Try 'B.Tech CSE - AKTU' or 'MBA - DU'"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition cursor-pointer" onClick={clickHandler}>
                  Search
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
};




