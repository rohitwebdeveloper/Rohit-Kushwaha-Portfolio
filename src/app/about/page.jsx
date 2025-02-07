'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

export default function About() {
  const [bgIndex, setBgIndex] = useState(0);
  const backgrounds = [
    "#ffccb3",
    "#b3ffcc",
    "#b3ccff",
    "#ffb3e6",
    "#fff2b3",
    "#b3ffff"
  ]

  const skills = [
    "JavaScript",
    "React.js",
    "Redux Toolkit",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Socket.io",
    "Razorpay API",
    "Jwt Authentication",
    "Git & GitHub",
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-6 py-2 sm:py-4 mb-10">
      <h1 className=" text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 text-center border-b-2 border-gray-800 pb-0 sm:pb-1">
        About Me
      </h1>
      {/* ✅ Brief Introduction */}
      <section className="mt-6 sm:mt-10 md:mt-12 flex flex-col md:flex-row items-center gap-5 sm:gap-8 slide-in">
        <div className="w-full md:w-1/3 relative">
          <div
            className="relative w-32 h-32  md:w-44 md:h-44 mx-auto rounded-full shadow-lg transition-all"
            style={{ backgroundColor: backgrounds[bgIndex] }}
          >
            <Image
              src="/linkedinphoto2.png"
              alt="Profile Picture"
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <div className="w-full p-3 sm:p-5 rounded-md bg-tertiarybg md:w-2/3 fade-in">
          <h2 className="text-base sm:text-lg md:text-xl text-gray-800">Brief Introduction</h2>
          <p className=" mt-1 sm:mt-2 md:mt-4 text-xs sm:text-sm md:text-base text-gray-600 italic">
            I am a Full Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js). I have hands-on experience in building scalable and responsive web applications, focusing on clean code and efficient problem-solving. I enjoy continuously learning, and delivering reliable software solutions.
          </p>
        </div>
      </section>

      {/* ✅ What I Do */}
      <section className="mt-7 md:mt-12 flex flex-col md:flex-row items-center gap-5 md:gap-8  ">
        <div className="w-full md:w-2/3 bg-tertiarybg p-3 sm:p-5 rounded-md">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">What I Do</h2>
          <p className="mt-1 sm:mt-2 md:mt-4 text-xs sm:text-sm md:text-base text-gray-600 ">
            🔹 Full Stack Developmen – Developing scalable applications with React.js (frontend) and Node.js + Express.js (backend).<br />
            🔹 Next.js Applications – Creating SSR & SSG-based applications with performance optimization.<br />
            🔹 E-commerce Solutions – Built an end-to-end e-commerce platform integrating Razorpay payment gateway.<br />
            🔹 Real-Time Web Apps – Developed real-time chat applications using Socket.io.<br />
          </p>
        </div>
        <div className="w-full md:w-1/3">
          {/* Work Illustration Placeholder */}
          <div className="relative w-44 h-44 sm:h-52 sm:w-52 md:w-60 md:h-60 lg:w-72 lg:h-72 mx-auto">
            <Image
              src="/workplaceholder.png" // Replace with your actual image
              alt="Work Illustration"
              layout="fill"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ✅ Skills & Technologies */}
      <section className=" mt-10 sm:mt-14 md:mt-20">
        <h2 className=" text-base sm:text-lg md:text-xl font-semibold text-gray-800 text-center fade-in">
          Skills & Technologies
        </h2>
        <div className="overflow-hidden mt-3 md:mt-6 relative h-12">
          <div className="flex gap-3 animate-slide">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-600  text-white px-2 sm:px-4 py-1 sm:py-2 rounded-sm sm:rounded-md md:rounded-lg text-xs sm:text-sm whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
            {/* Duplicate to ensure smooth infinite scrolling */}
            {skills.map((skill, index) => (
              <span
                key={`dup-${index}`}
                className="bg-blue-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-sm sm:rounded-md md:rounded-lg text-xs sm:text-sm whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-slide {
          display: flex;
          white-space: nowrap;
          animation: slide 10s linear infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeIn 1s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .slide-in {
          animation: slideIn 1s ease-out;
        }
      `}</style>

      {/* ✅ Education */}
      <section className=" mt-6 sm:mt-10 md:mt-16 flex flex-col sm:flex-row items-center gap-5  md:gap-8">
        <div className="sm:w-1/3">
          {/* Education Illustration Placeholder */}
          <div className="relative w-52 h-36 md:w-64 md:h-44 mx-auto">
            <Image
              src="https://i.ytimg.com/vi/HDGi6QFy8yA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAuYMXXGhKMizjUI7idWx4tUkr0vQ" // Replace with your actual image
              alt="Education"
              layout="fill"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="w-full  md:w-2/3 bg-tertiarybg rounded-md p-3 md:p-5">
          <h2 className=" text-base sm:text-lg md:text-xl font-semibold text-gray-800">Education</h2>
          <p className="mt-2 sm:mt-4 text-sm md:text-base text-gray-600">
            <b className="font-semibold text-gray-800"> {`Bachelor of Commerce (Computer Applications) `} </b> <br />
            Dr. Shyama Prasad Mukherjee Science and Commerce College, Bhopal  <br />
            📅 August 2021 – June 2024
          </p>
        </div>
      </section>
    </div>
  );
}
