"use client"

import { Divide } from "lucide-react";
import React, { useState } from "react";
import Seeker from "../components/Seeker";
import Note from "../components/Note";

// database integration ....
const chapters = [
  " Introduction",
  " Basics",
  " Intermediate",
  " Advanced",
  " Conclusion"
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



  return (
    <div className="min-h-screen bg-gray-200">


      {/* Main Content Layout */}
      <main className="px-28 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Left video player */}
        <div className="md:col-span-2 w-full">
          <div className="h-full">
            <iframe
              className="w-full h-full min-h-[500px] rounded-3xl"
              src={videoLinks[currentChapter]}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right side - Chapters */}
        <div className="flex flex-col h-full justify-evenly mx-auto">

          {/* <Seeker/> */}
          <div className=" p-3 rounded-xl shadow-sm bg-slate-200">
            <Seeker chapters={chapters} setCurrentChapter={setCurrentChapter} currentChapter={currentChapter} />
          </div>

        </div>
      </main>

      {/* Note-taking section */}
      <Note/>
    </div>
  );
};

export default StructXLayoutPage;

