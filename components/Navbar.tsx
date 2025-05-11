
"use client";
import Link from "next/link";
import React, { useState } from "react";
const Navbar: React.FC = () => {
  const [hover, isHover] = useState(false);
  return (
    <div className="flex justify-end left-[188px] gap-10 relative w-[1064px] text-gray-200">

        <div className="mt-10 flex gap-10">
      <Link href={"/hireMe"}>همکاری با من</Link>
      <Link href={"/projects"}>پروژه ها</Link>
      <Link href={"/expriences"}>سوابق</Link>
      <Link href={"/aboutMe"}>درباره من</Link>
      </div>
    </div>
  );
};
export default Navbar;
