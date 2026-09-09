"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Settings,
  LogOut,
  BarChart3,
  ChevronDown,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const pathname = usePathname(); // Mendapatkan URL path yang sedang aktif secara otomatis

  return (
    <aside
      className={`bg-slate-900 text-white transition-all duration-300 flex flex-col z-20 ${isOpen ? "w-64" : "w-20"}`}>
      <div className="flex items-center justify-between h-16 px-4 border-b border-slate-800">
        {isOpen ? (
          <span className="text-xl font-bold tracking-wider">MyApp</span>
        ) : (
          <span className="text-xl font-bold mx-auto">MA</span>
        )}
      </div>

      <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
        {/* Menggunakan Link ke rute /dashboard */}
        <SidebarItem
          icon={<Home size={20} />}
          label="Home"
          isOpen={isOpen}
          href="/dashboard"
          active={pathname === "/dashboard"}
        />

        {/* Contoh Menu Dropdown dengan Submenu */}
        <SidebarDropdown
          icon={<Users size={20} />}
          label="Users"
          isOpen={isOpen}
          pathname={pathname}
          childrenItems={[
            { label: "All Users", href: "/users" },
            { label: "Roles & Permissions", href: "/roles" },
          ]}
        />

        <SidebarItem
          icon={<BarChart3 size={20} />}
          label="Analytics"
          isOpen={isOpen}
          href="/analytics"
          active={pathname === "/analytics"}
        />
        <SidebarItem
          icon={<Settings size={20} />}
          label="Settings"
          isOpen={isOpen}
          href="/settings"
          active={pathname === "/settings"}
        />
      </nav>

      <div className="p-3 border-t border-slate-800">
        <button
          className={`flex items-center w-full gap-4 px-3 py-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors ${!isOpen && "justify-center"}`}>
          <LogOut size={20} />
          {isOpen && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

// --- Komponen Item Standar dengan Link ---
interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isOpen: boolean;
  href: string;
  active: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  isOpen,
  href,
  active,
}) => (
  <Link
    href={href}
    className={`flex items-center w-full gap-4 px-3 py-2.5 rounded-lg transition-colors ${
      active
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-slate-800 hover:text-white"
    } ${!isOpen && "justify-center"}`}>
    <span className="shrink-0">{icon}</span>
    {isOpen && (
      <span className="text-sm font-medium tracking-wide">{label}</span>
    )}
  </Link>
);

// --- Komponen Dropdown dengan Link ---
interface ChildItem {
  label: string;
  href: string;
}
interface SidebarDropdownProps {
  icon: React.ReactNode;
  label: string;
  isOpen: boolean;
  pathname: string;
  childrenItems: ChildItem[];
}

const SidebarDropdown: React.FC<SidebarDropdownProps> = ({
  icon,
  label,
  isOpen,
  pathname,
  childrenItems,
}) => {
  // Cek apakah salah satu anak aktif berdasarkan URL path saat ini
  const isChildActive = childrenItems.some((child) => pathname === child.href);
  const [isExpanded, setIsExpanded] = useState<boolean>(isChildActive);
  const showDropdown = isOpen && isExpanded;

  return (
    <div>
      <button
        onClick={() => isOpen && setIsExpanded(!isExpanded)}
        className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg transition-colors text-gray-300 hover:bg-slate-800 hover:text-white ${!isOpen && "justify-center"}`}>
        <div className="flex items-center gap-4">
          <span className="shrink-0">{icon}</span>
          {isOpen && (
            <span className="text-sm font-medium tracking-wide">{label}</span>
          )}
        </div>
        {isOpen && (
          <span
            className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
            <ChevronDown size={16} />
          </span>
        )}
      </button>

      {showDropdown && (
        <div className="ml-8 mt-1 space-y-1 border-l border-slate-700 pl-3">
          {childrenItems.map((child, idx) => {
            const isSelected = pathname === child.href;
            return (
              <Link
                key={idx}
                href={child.href}
                className={`flex items-center w-full px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                  isSelected
                    ? "text-blue-400 bg-slate-800/60"
                    : "text-gray-400 hover:text-white hover:bg-slate-800/40"
                }`}>
                {child.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
