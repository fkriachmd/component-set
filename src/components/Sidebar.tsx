import { CirclePlus, House, Moon, Search, Sun } from "lucide-react";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  isDarkMode: boolean;
  activeItem?: "home" | "component";
  toggleDarkMode: () => void;
}

function Sidebar({
  isDarkMode,
  activeItem = "home",
  toggleDarkMode,
}: SidebarProps) {
  return (
    <div
      className={`side-bar flex justify-between flex-col items-center gap-6 w-20 h-[calc(100vh-48px)] mx-3 my-6 py-6 rounded-3xl transition-all duration-500 shadow-xl sticky top-6 ${
        isDarkMode ? "bg-[#202020]" : "bg-white border border-gray-100"
      }`}
    >
      <div className="flex justify-start flex-col items-center gap-5">
        <SidebarItem
          icon={Search}
          href="/"
          isDarkMode={isDarkMode}
          variant="search"
        />

        <div
          className={`w-10 h-[1px] ${
            isDarkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        ></div>

        <SidebarItem
          icon={House}
          label="Home"
          href="/"
          isDarkMode={isDarkMode}
          isActive={activeItem === "home"}
        />

        <SidebarItem
          icon={CirclePlus}
          label="About"
          href="/about"
          isDarkMode={isDarkMode}
          isActive={activeItem === "component"}
        />
      </div>

      <div className="flex flex-col items-center gap-4">
        <div
          className={`w-10 h-[1px] ${
            isDarkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        ></div>

        <button
          onClick={toggleDarkMode}
          className={`p-3 rounded-2xl transition-all duration-300 ${
            isDarkMode
              ? "bg-neutral-900 hover:bg-neutral-800 text-yellow-400"
              : "bg-gray-100 hover:bg-gray-200 text-gray-600"
          } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isDarkMode ? "focus:ring-yellow-400" : "focus:ring-gray-400"
          }`}
        >
          {isDarkMode ? (
            <Sun className="w-6 h-6" />
          ) : (
            <Moon className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
