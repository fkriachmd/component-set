import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen transition-allduration-500 flex py-2 ${
        isDarkMode
          ? "bg-[#141314] text-[#E6E1E3]"
          : "bg-[#FEFBFF] text-[#1C1B1D]"
      }`}
    >
      <Sidebar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        activeItem="home"
      />
      <div className="flex w-full gap-2  me-4">
        <div
          className={`h-[calc(100vh-30%)] w-full flex flex-col justify-center px-10 ${
            isDarkMode ? "bg-[#1C1B1D]" : "bg-[#F2ECEE]"
          } rounded-xl`}
        >
          <div className="hero-section">
            <h1 className="text-[82px] font-semibold leading-none mb-4">
              Component Set
            </h1>
            <p className="text-[24px]">
              Design with clarity Build with confidence
            </p>
          </div>
          <Link
            to="/about"
            className="text-[#F2ECEE] text-center text-xl font-semibold w-40 px-2 py-4 mt-4 bg-[#6442D6] rounded-full shadow-md hover:bg-[#5537b6] transition-colors duration-300"
          >
            Component
          </Link>
        </div>
        <div className="h-[calc(100vh-30%)] w-full bg-[#F2ECEE] rounded-xl overflow-hidden flex items-center justify-center">
          <video
            className="w-full h-full object-cover rounded-xl"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://kstatic.googleusercontent.com/files/d0a463d1d4b767b9a327739835737f23ee04e75e7e5835c2b6d657acc0ae6c046d3bb09fec5c169c20298a10ac74e04552d98c80aba4a82acce083ef0887f50e"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Home;
