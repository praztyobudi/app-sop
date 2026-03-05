"use client";

import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowProfileMenu(false);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-16 bg-slate-900 border-b border-slate-800 z-50 px-8 flex items-center justify-between">
        {/* LEFT - Search */}
        <div className="flex items-center gap-4 w-1/3">
          {/* DESKTOP SEARCH */}
          <div className="hidden md:flex items-center justify-center w-1/2">
            <h1 className="text-sm font-semibold text-slate-200 uppercase">
              Product Catalog System
            </h1>
          </div>

          {/* MOBILE SEARCH ICON */}
          <button
            onClick={() => setOpenSearch(true)}
            className="md:hidden p-2 ml-10 rounded-full border border-slate-700 hover:bg-slate-800 transition"
          >
            <svg
              className="w-5 h-5 text-slate-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* CENTER */}
        <div className="hidden md:block relative w-72">
          <input
            type="text"
            placeholder="Search product..."
            className="w-full bg-slate-800 text-slate-100 placeholder-slate-400 border border-slate-700 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
          <svg
            className="absolute left-3 top-2.5 w-4 h-4 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 w-1/3 justify-end">
          {/* Notification */}
          <button className="relative p-2 rounded-full hover:bg-slate-800 transition duration-200">
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <svg
              className="w-5 h-5 text-slate-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 00-4-5.7V5a2 2 0 10-4 0v.3A6 6 0 006 11v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1"
              />
            </svg>
          </button>

          {/* Profile */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-3 rounded-full pl-3 pr-2 py-1.5 border border-slate-700 hover:bg-slate-800 transition duration-200"
            >
              <div className="hidden sm:block text-right leading-tight">
                <p className="text-sm font-medium text-slate-100">Admin User</p>
                <p className="text-xs text-slate-400">Super Admin</p>
              </div>

              <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-semibold text-sm shadow-md">
                A
              </div>
            </button>

            <div
              className={`absolute right-0 mt-3 w-56 bg-slate-800 rounded-xl border border-slate-700 shadow-2xl py-2 transform transition-all duration-200 origin-top-right ${showProfileMenu
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
            >
              {/* <button className="w-full text-left px-4 py-2 text-sm text-slate-200 hover:bg-slate-700 transition">
                My Profile
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-slate-200 hover:bg-slate-700 transition">
                Settings
              </button>
              <div className="border-t border-slate-700 my-2"></div> */}
              <button className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition font-medium">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      {openSearch && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-24 z-60">
          <div className="bg-slate-900 w-[90%] max-w-md rounded-2xl p-4 border border-slate-700 shadow-xl">
            <div className="relative">
              <input
                autoFocus
                type="text"
                placeholder="Search product..."
                className="w-full bg-slate-800 text-slate-100 placeholder-slate-400 border border-slate-700 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <svg
                className="absolute left-3 top-2.5 w-4 h-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <button
              onClick={() => setOpenSearch(false)}
              className="mt-4 w-full text-sm text-slate-400 hover:text-white transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
