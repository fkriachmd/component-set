import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Code,
  Zap,
  Palette,
  Shield,
  Rocket,
} from "lucide-react";
import Sidebar from "../components/Sidebar";

function About() {
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

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Modern Development",
      description:
        "Built with React, TypeScript, and Vite for exceptional developer experience",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description:
        "Optimized performance with modern build tools and lazy loading",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Beautiful Design",
      description:
        "Google Material Design inspired UI with Tailwind CSS styling",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Type Safe",
      description:
        "Full TypeScript support for better code quality and maintainability",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Production Ready",
      description:
        "Optimized builds, automated deployments, and best practices",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Developer Friendly",
      description:
        "Clean code, comprehensive documentation, and easy customization",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-all duration-500 flex px-4 ${
        isDarkMode ? "bg-[#1a1a1a] text-white" : "bg-white text-gray-900"
      }`}
    >
      <Sidebar
        isDarkMode={isDarkMode}
        activeItem="component"
        toggleDarkMode={toggleDarkMode}
      />

      <div className="flex-1 flex gap-8 ml-6">
        <div className="flex-1 flex flex-col justify-start px-10 py-6">
          <div className="mx-auto">
            {/* Header */}
            <div
              className={`rounded-3xl shadow-xl p-6 mb-12 border ${
                isDarkMode
                  ? "bg-[#202020] border-gray-700/0"
                  : "bg-white border-gray-100"
              }`}
            >
              <div className="flex items-start justify-between mb-8">
                <Link
                  to="/"
                  className={`flex items-center gap-3 px-4 rounded-full transition-all duration-300 ${
                    isDarkMode
                      ? "text-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
                      : "text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="font-medium">Back to Home</span>
                </Link>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="text-center">
                <h1
                  className={`text-5xl font-light mb-6 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  About
                  <span className="block font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Component Set
                  </span>
                </h1>
                <p
                  className={`text-xl leading-relaxed max-w-3xl mx-auto ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  A modern React application showcasing beautiful UI design,
                  smooth animations, and efficient routing. Built with Google's
                  Material Design principles in mind.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 shadow-lg border transition-all duration-300 hover:shadow-xl ${
                    isDarkMode
                      ? "bg-[#202020] border-gray-700/0 hover:bg-neutral-900"
                      : "bg-white border-gray-100 hover:bg-gray-50"
                  }`}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg">
                    {feature.icon}
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-3 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div
              className={`rounded-3xl shadow-xl p-10 border ${
                isDarkMode
                  ? "bg-[#202020] border-gray-700/0"
                  : "bg-white border-gray-100"
              }`}
            >
              <h2
                className={`text-3xl font-light text-center mb-8 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Built with Modern
                <span className="block font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Technology Stack
                </span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "React", color: "from-blue-400 to-blue-600" },
                  { name: "TypeScript", color: "from-blue-500 to-blue-700" },
                  { name: "Vite", color: "from-purple-400 to-purple-600" },
                  { name: "Tailwind CSS", color: "from-teal-400 to-teal-600" },
                  { name: "React Router", color: "from-red-400 to-red-600" },
                  {
                    name: "Lucide Icons",
                    color: "from-yellow-400 to-yellow-600",
                  },
                  { name: "ESLint", color: "from-indigo-400 to-indigo-600" },
                  { name: "GitHub Pages", color: "from-gray-400 to-gray-600" },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className={`rounded-xl p-4 text-center  transition-all duration-300 ${
                      isDarkMode
                        ? "bg-neutral-900  hover:bg-neutral-800"
                        : "bg-gray-50 border border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl mx-auto mb-3 shadow-lg`}
                    ></div>
                    <span
                      className={`font-medium text-sm ${
                        isDarkMode ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <Link
                to="/"
                className={`inline-flex items-center px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode
                    ? "bg-white text-black hover:bg-gray-100 shadow-lg"
                    : "bg-gray-900 text-white hover:bg-gray-800 shadow-lg"
                }`}
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Back to Components
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
