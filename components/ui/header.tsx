"use client";

import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, User, Key, LogOut } from "lucide-react";

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  onSelectMenu: (menu: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isSidebarOpen,
  toggleSidebar,
  onSelectMenu,
}) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10 shadow-sm">
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none"
        aria-label="Toggle Sidebar">
        {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className="relative" ref={profileMenuRef}>
        <button
          onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
          className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            JD
          </div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-medium text-gray-800">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <ChevronDown
            size={16}
            className={`text-gray-500 transition-transform duration-200 ${isProfileMenuOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isProfileMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
            <button
              onClick={() => {
                onSelectMenu("Profile Settings");
                setIsProfileMenuOpen(false);
              }}
              className="flex items-center gap-2.5 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
              <User size={16} className="text-gray-500" />
              <span>Edit Profil</span>
            </button>
            <button
              onClick={() => {
                onSelectMenu("Change Password");
                setIsProfileMenuOpen(false);
              }}
              className="flex items-center gap-2.5 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
              <Key size={16} className="text-gray-500" />
              <span>Ubah Password</span>
            </button>
            <div className="border-t border-gray-100 my-1"></div>
            <button
              onClick={() => {
                alert("Logging out...");
                setIsProfileMenuOpen(false);
              }}
              className="flex items-center gap-2.5 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
              <LogOut size={16} className="text-red-500" />
              <span>Keluar (Logout)</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
