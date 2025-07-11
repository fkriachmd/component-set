import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarItemProps {
  icon: LucideIcon;
  label?: string;
  href?: string;
  onClick?: () => void;
  isDarkMode: boolean;
  isActive?: boolean;
  variant?: "default" | "search";
}

function SidebarItem({
  icon: Icon,
  label,
  href,
  onClick,
  isDarkMode,
  isActive = false,
  variant = "default",
}: SidebarItemProps) {
  const baseClasses =
    "flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    search: `${
      isDarkMode
        ? "bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white focus:ring-gray-400"
        : "bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 focus:ring-gray-400"
    }`,
    default: `${
      isActive
        ? isDarkMode
          ? "bg-blue-600 text-white shadow-lg focus:ring-blue-400"
          : "bg-blue-600 text-white shadow-lg focus:ring-blue-400"
        : isDarkMode
        ? "bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white focus:ring-gray-400"
        : "bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 focus:ring-gray-400"
    }`,
  };

  const iconClasses = `w-6 h-6`;

  if (href) {
    return (
      <Link
        to={href}
        className={`${baseClasses} ${variantClasses[variant]} group`}
        title={label}
      >
        <Icon className={iconClasses} />
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} group`}
      title={label}
    >
      <Icon className={iconClasses} />
    </button>
  );
}

export default SidebarItem;
