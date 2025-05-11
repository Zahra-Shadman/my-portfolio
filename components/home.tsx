import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="bg-[#04152D] w-full min-h-screen relative">
      <Navbar />
      <div className="bg-[#19376DB2] blur-[200px] animate-[wiggle_1s_ease-in-out_infinite] w-[760px] h-[674px] rounded-full opacity-70 absolute top-[-128px] left-[-216px]"></div>
    </div>
  );
}
