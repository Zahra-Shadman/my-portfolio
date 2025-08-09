interface NavbarProps {
  scrollToSection: (section: "about" | "skills" | "projects" | "hireMe") => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  return (
    <div className="flex justify-center">
      <div className="flex bg-[#123458] font-sans text-[#F5F5F5] shadow-xl sm:rounded-b-3xl h-12 justify-center sm:w-[900px] w-screen sm:gap-12 gap-7">
        <button
          onClick={() => scrollToSection("about")}
          className="hover:text-[#FCFAEE] cursor-pointer"
        >
          about me
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="hover:text-[#FCFAEE] cursor-pointer"
        >
          skills
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="hover:text-[#FCFAEE] cursor-pointer"
        >
          projects
        </button>
        <button
          onClick={() => scrollToSection("hireMe")}
          className="hover:text-white cursor-pointer"
        >
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
