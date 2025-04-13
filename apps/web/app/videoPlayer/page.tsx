"use client"

import React, { useState } from "react";

const chapters = [
  "Chapter 1: Introduction",
  "Chapter 2: Basics",
  "Chapter 3: Intermediate",
  "Chapter 4: Advanced",
  "Chapter 5: Conclusion"
];

const videoLinks = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ", // Chapter 1
  "https://www.youtube.com/embed/tgbNymZ7vqY", // Chapter 2
  "https://www.youtube.com/embed/V-_O7nl0Ii0", // Chapter 3
  "https://www.youtube.com/embed/kJQP7kiw5Fk", // Chapter 4
  "https://www.youtube.com/embed/3JZ_D3ELwOQ"  // Chapter 5
];

const StructXLayoutPage = () => {
  const [currentChapter, setCurrentChapter] = useState(0);

  const handleChapterClick = (index: number) => {
    setCurrentChapter(index);
  };

  return (
    <div className="min-h-screen bg-gray-200">
    

      {/* Main Content Layout */}
      <main className="px-28 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Left video player */}
        <div className="md:col-span-2 w-full">
          <div className="h-full">
            <iframe
              className="w-full h-full min-h-[500px] rounded-3xl border-2 border-blue-500"
              src={videoLinks[currentChapter]}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right side - Chapters */}
        <div className="flex flex-col gap-4 h-full justify-around">
          {chapters.map((chapter, index) => (
            <div
              key={index}
              onClick={() => handleChapterClick(index)}
              className={`h-14 flex items-center justify-center rounded-xl border cursor-pointer transition-all duration-300 text-center px-2 text-sm md:text-base font-medium shadow-sm ${
                index < currentChapter
                  ? "bg-green-300 border-green-700 text-black"
                  : index === currentChapter
                  ? "bg-blue-200 border-blue-700 text-black"
                  : "border-blue-500 bg-white text-gray-800"
              }`}
            >
              {chapter}
            </div>
          ))}

{/* <Seeker/> */}
        </div>
      </main>

      {/* Note-taking section */}
      <div className="px-6 pb-10 pt-10">
        <div className="bg-white rounded-xl shadow mx-auto max-w-5xl p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Capture Key Insights Instantly</h2>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 text-lg font-medium">
            Start Taking Notes
          </button>
        </div>
      </div>

     
    </div>
  );
};

export default StructXLayoutPage;


function Seeker() {
    return (
        <>
        


        <ol className="space-y-4 w-72">
    <li>
        <div className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50" role="alert">
            <div className="flex items-center justify-between">
                <span className="sr-only">User info</span>
                <h3 className="font-medium">1. User info</h3>
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </div>
        </div>
    </li>
    <li>
        <div className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 " role="alert">
            <div className="flex items-center justify-between">
                <span className="sr-only">Account info</span>
                <h3 className="font-medium">2. Account info</h3>
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </div>
        </div>
    </li>
    <li>
        <div className="w-full p-4 text-blue-700 bg-blue-100 border border-blue-300 rounded-lg" role="alert">
            <div className="flex items-center justify-between">
                <span className="sr-only">Social accounts</span>
                <h3 className="font-medium">3. Social accounts</h3>
                <svg className="rtl:rotate-180 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </div>
        </div>
    </li>
    <li>
        <div className="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg" role="alert">
            <div className="flex items-center justify-between">
                <span className="sr-only">Review</span>
                <h3 className="font-medium">4. Review</h3>
            </div>
        </div>
    </li>
        <li>
        <div className="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg" role="alert">
            <div className="flex items-center justify-between">
                <span className="sr-only">Confirmation</span>
                <h3 className="font-medium">5. Confirmation</h3>
            </div>
        </div>
    </li>
</ol>


        </>
    )
}