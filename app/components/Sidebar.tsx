"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Layers,
  PackagePlus,
  UserRoundCog,
  TextAlignJustify
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const pathActive = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: TextAlignJustify, href: "/dashboard", exact: true },
    { name: "Product Catalog", icon: Layers, href: "/produk", exact: false },
    { name: "Add Product", icon: PackagePlus, href: "/produk/create", exact: true },
    { name: "User Control", icon: UserRoundCog, href: "/users", exact: false },
  ];

  return (
    <>
      {/* MOBILE TOGGLE */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-3 left-4 z-999 lg:hidden p-2 rounded-xl shadow-md border border-slate-700"
      >
        <Menu size={20} />
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-998 lg:hidden"
        />
      )}

      {/* SIDEBAR FLOATING ROUNDED */}
      <aside
        className={`
          fixed top-20 left-6 z-999
          h-[calc(100vh-6rem)] w-64
          bg-white rounded-2xl border border-gray-200 shadow-lg
          transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-[120%] lg:translate-x-0"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* HEADER */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Main Menu
            </h2>

            {/* Close button mobile */}
            <button onClick={() => setOpen(false)} className="lg:hidden">
              <X size={18} />
            </button>
          </div>

          {/* MENU */}
          <div className="flex-1 px-4 space-y-2">
            {menuItems.map((item) => {
              const isActive = (() => {
                if (item.exact) return pathActive === item.href;
                if (item.href === "/produk") {
                  return (
                    pathActive === "/produk" ||
                    (pathActive.startsWith("/produk/") &&
                      !pathActive.startsWith("/produk/add-product"))
                  );
                }

                return pathActive.startsWith(item.href);
              })();
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`
                flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-500 text-gray-700 ease-out
                ${isActive
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/20"
                      : "hover:bg-slate-800 hover:text-slate-100"
                    }
              `}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* FOOTER */}
          <div className="px-6 py-4 border-t border-gray-100 text-xs text-gray-400">
            © 2026 Catalog System
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
