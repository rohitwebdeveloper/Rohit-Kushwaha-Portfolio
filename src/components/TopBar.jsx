'use client'
// import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

export default function TopBar() {

  const [showText, setShowText] = useState(false);

  return (
    <div className="py-1 flex justify-between px-[10px] sm:px-6  items-center w-full bg-tertiarybg ">
      <Link href='/'>
      <img src="/mainlogo.png" alt="" className=" h-8 sm:h-12 md:h-14" />
      </Link>
      <div className="flex items-center gap-4 sm:gap-6 md:gap-7 bg-primarybg border sm:border-2 border-secondary py-1 sm:py-2 px-3 sm:px-5 rounded-full shadow-lg">
      <Link
        href="https://linkedin.com/in/rohitkushwaha-developer"
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary text-2xl hover:text-black transition"
      >
        {/* <FaLinkedin /> */}
        <img src="/linkedin.svg" alt="Linkedin" className="h-[22px] sm:h-6 md:h-7" />
      </Link>
      <Link
        href="https://github.com/rohitwebdeveloper"
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary text-2xl hover:text-black transition"
      >
        {/* <FaGithub /> */}
        <img src="/github.svg" alt="Linkedin" className="h-5  md:h-6" />
      </Link>
      <Link
        href="mailto:rohitkushwaha.developer@gmail.com"
        className="text-secondary text-2xl hover:text-black transition"
      >
        {/* <FaEnvelope /> */}
        <img src="/mail.svg" alt="Linkedin" className="h-[22px] sm:h-6 md:h-7" />
      </Link>
      <div
        className="relative flex items-center gap-2"
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
      >
        <Link
          href="https://drive.google.com/file/d/1yh69B8NtljgLFlBq9eHM-Edm2xyyv5Zy/view?usp=sharing"
           target="_blank"
          download
          className="text-secondary text-2xl hover:text-black transition flex items-center gap-2"
        >
          {/* <FaDownload /> */}
          <img src="/download.svg" alt="Linkedin" className="h-[22px] sm:h-6 md:h-7" />
        </Link>
        {showText && (
          <span className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md">
            Download Resume
          </span>
        )}
      </div>
      </div>
    </div>
  );
}