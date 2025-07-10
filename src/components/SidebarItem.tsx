import type { LucideIcon } from "lucide-react";

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
    "flex items-center justify-center min-w-[52px] h-[52px] rounded-xl transition-all duration-300";

  const variantClasses = {
    search: `rounded-[16px] ${isDarkMode ? "bg-slate-700" : "bg-[#F1D3F9]"}`,
    default: `flex-col ${
      isDarkMode ? "hover:bg-slate-700" : "hover:bg-gray-200"
    } ${
      isActive
        ? isDarkMode
          ? "bg-slate-700"
          : "bg-gray-200 hover:bg-gray-300"
        : ""
    }`,
  };

  const iconClasses = `${isDarkMode ? "text-slate-300" : "text-[#4d4256]"} ${
    variant === "search" ? "w-4 h-4" : ""
  }`;

  const textClasses = `text-[10px] font-bold ${
    isDarkMode ? "text-slate-300" : "text-[#4d4256]"
  }`;

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      <Icon
        className={iconClasses}
        strokeWidth={variant === "search" ? 3 : 2}
      />
      {label && variant === "default" && <p className={textClasses}>{label}</p>}
    </Component>
  );
}

export default SidebarItem;
