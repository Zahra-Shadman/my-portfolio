"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-end gap-10 relative w-full max-w-[1064px] text-gray-200 px-4 font-medium">
      <div className="mt-10 flex flex-wrap gap-10">
        <Link
          href={"/hireMe"}
          className="hover:text-blue-300 transition duration-200"
        >Hire Me
        </Link>
        <Link
          href={"/projects"}
          className="hover:text-blue-300 transition duration-200"
        >
          Projects
        </Link>
        <Link
          href={"/experiences"}
          className="hover:text-blue-300 transition duration-200"
        >
          Experiences
        </Link>
        <Link
          href={"/aboutMe"}
          className="hover:text-blue-300 transition duration-200"
        >
          About Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
