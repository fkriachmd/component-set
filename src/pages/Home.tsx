import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import Sidebar from "../components/Sidebar";

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 flex px-4 ${
        isDarkMode ? "bg-[#1a1a1a] text-white" : "bg-white text-gray-900"
      }`}
    >
      <Sidebar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        activeItem="home"
      />

      <div className="flex-1 flex gap-8 ml-6">
        {/* Hero Section */}
        <div className="flex-1 flex flex-col justify-center px-12">
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 ${
                isDarkMode
                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  : "bg-blue-50 text-blue-700 border border-blue-200"
              }`}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              Build with confidence
            </div>

            {/* Main Heading */}
            <h1
              className={`text-6xl font-light leading-tight mb-6 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              fkriachmd's
              <span className="block font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                component pool
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-xl leading-relaxed mb-8 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              This is where I collect the various components and libraries that
              I use during the development process, whether for learning
              purposes, personal projects, or coding experiments.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 mb-12">
              <Link
                to="/about"
                className={`inline-flex items-center px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                  isDarkMode
                    ? "bg-white text-black hover:bg-gray-100 shadow-lg"
                    : "bg-gray-900 text-white hover:bg-gray-800 shadow-lg"
                }`}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <button
                className={`inline-flex items-center px-6 py-4 rounded-full font-medium transition-all duration-300 border-2 ${
                  isDarkMode
                    ? "border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white"
                    : "border-gray-200 text-gray-700 hover:border-gray-300 hover:text-gray-900"
                }`}
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  50+
                </div>
                <div
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Components
                </div>
              </div>
              <div>
                <div
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  100%
                </div>
                <div
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Accessible
                </div>
              </div>
              <div>
                <div
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  TS
                </div>
                <div
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  TypeScript
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${
              isDarkMode
                ? "bg-[#202020] hover:bg-neutral-900"
                : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-tr ${
                isDarkMode
                  ? "from-blue-500/20 to-purple-500/20"
                  : "from-blue-500/10 to-purple-500/0"
              } z-10`}
            ></div>
            <video
              className="w-full h-[600px] object-cover"
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

            {/* Video Overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div
                className={`backdrop-blur-lg rounded-2xl p-4 ${
                  isDarkMode ? "bg-black/30" : "bg-white/30"
                }`}
              >
                <h3
                  className={`font-semibold text-lg ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Component Preview
                </h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Interactive components in action
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
