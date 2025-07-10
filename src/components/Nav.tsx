import { Component, Moon, Sun, Search } from "lucide-react";

interface NavProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

function Nav({ isDarkMode, toggleDarkMode }: NavProps) {
  return (
    <div className="w-full flex items-center justify-between p-6">
      <h1
        className={`text-xl flex items-center font-bold ${
          isDarkMode ? "text-[#C1C3CF]" : "text-slate-800"
        }`}
      >
        <Component className="w-[24px] h-[24px]" />
        <a href="/" className="ml-2">
          Component Set
        </a>
      </h1>

      <div className="flex items-center space-x-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search components..."
            className={`pl-10 pr-4 py-2 rounded-full transition-all duration-300 ${
              isDarkMode
                ? "bg-slate-600 hover:bg-slate-700 text-white placeholder-slate-400 focus:border-slate-500"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700 placeholder-slate-500 focus:border-slate-400"
            } focus:outline-none focus:ring-0 focus:ring-opacity-50 `}
          />
          <button
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
              isDarkMode ? "text-slate-600" : "text-slate-700"
            }`}
          >
            <Search className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full transition-all duration-300 ${
            isDarkMode
              ? "bg-slate-600 hover:bg-slate-700 text-yellow-400"
              : "bg-slate-100 hover:bg-slate-200 text-slate-600"
          } focus:outline-none focus:ring-0 focus:ring-opacity-50`}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Nav;
