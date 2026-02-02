import { NavLink } from "react-router-dom";
import { House, User, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavigationBarProps = {
  isExpanded: boolean;
  onExpand: () => void;
};

const NavigationBar = ({ isExpanded, onExpand }: NavigationBarProps) => {
  const NavLinkWrapper = (path: string, label: string, Icon: LucideIcon) => {
    return (
      <NavLink to={path} className="flex items-center gap-4 whitespace-nowrap">
        <Icon size={20} className="shrink-0" />
        <span className={`transition-opacity duration-300 ${isExpanded ? "opacity-100" : "opacity-0"}`}>
          {label}
        </span>
      </NavLink>
    );
  };

  return (
    <aside
      className={`relative pr-4 transition-all duration-300 ease-in-out ${isExpanded ? "w-48" : "w-22"}`}
    >
      <nav className="flex flex-col justify-between bg-pwu-primary p-4 gap-4 m-2 border border-black rounded-md overflow-hidden">
        {NavLinkWrapper("/saints", "Home", House)}
        {NavLinkWrapper("/users", "Users", User)}
        {NavLinkWrapper("/settings", "Settings", Settings)}
      </nav>
      <button
        onClick={onExpand}
        className="absolute top-4 right-0 -translate-x-1/2 bg-pwu-primary border border-black rounded-full p-1"
      >
        {isExpanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>
    </aside>
  );
};

export default NavigationBar;
