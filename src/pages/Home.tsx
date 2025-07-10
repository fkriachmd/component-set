import { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl p-12 max-w-md w-full text-center border border-slate-200">
        {/* Logo Section */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <a
            href="https://vite.dev"
            target="_blank"
            className="group transition-transform duration-300 hover:scale-110"
          >
            <img
              src={viteLogo}
              className="h-16 w-16 transition-all duration-300 group-hover:drop-shadow-lg"
              alt="Vite logo"
            />
          </a>
          <div className="w-px h-12 bg-slate-200"></div>
          <a
            href="https://react.dev"
            target="_blank"
            className="group transition-transform duration-300 hover:scale-110"
          >
            <img
              src={reactLogo}
              className="h-16 w-16 animate-spin-slow transition-all duration-300 group-hover:drop-shadow-lg"
              alt="React logo"
            />
          </a>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-slate-800 mb-4 tracking-tight">
          Welcome Home
        </h1>
        <p className="text-slate-600 mb-8">This is your beautiful homepage</p>

        {/* Counter Card */}
        <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-100">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 mb-4"
          >
            Count is {count}
          </button>
          <p className="text-slate-600 text-sm">
            Click the button to increase the counter
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 justify-center">
          <Link
            to="/about"
            className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
          >
            About Page
          </Link>
        </div>

        {/* Footer */}
        <p className="text-slate-500 text-sm mt-8">
          Navigate between pages using React Router
        </p>
      </div>
    </div>
  );
}

export default Home;
