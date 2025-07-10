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
      className={`side-bar flex justify-between flex-col items-center gap-4 w-20 min-h-[calc(100vh-16px)] mx-2 py-4 rounded-xl transition-all duration-500 ${
        isDarkMode ? "bg-[#1C1B1D]" : "bg-[#F2ECEE]"
      }`}
    >
      <div className="flex justify-start flex-col items-center gap-4">
        <SidebarItem
          icon={Search}
          href="/"
          isDarkMode={isDarkMode}
          variant="search"
        />

        <SidebarItem
          icon={House}
          label="Home"
          href="/"
          isDarkMode={isDarkMode}
          isActive={activeItem === "home"}
        />

        <SidebarItem
          icon={CirclePlus}
          label="Component"
          href="/components"
          isDarkMode={isDarkMode}
          isActive={activeItem === "component"}
        />
      </div>
      <button
        onClick={toggleDarkMode}
        className={`p-2 rounded-full transition-all duration-300 ${
          isDarkMode
            ? "bg-[#343336] hover:bg-slate-700 text-yellow-400"
            : "bg-neutral-300 hover:bg-slate-300 text-slate-600"
        } focus:outline-none focus:ring-0 focus:ring-opacity-50`}
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}

export default Sidebar;
