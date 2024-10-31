import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import {
  HomeIcon,
  ArchiveIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
// import './SideNavbar.css'; // Varmista, että tämä tiedosto on olemassa ja linkitetty

function SideNavbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <div className="bg-gray-600 py-2 px-4 flex items-center justify-between sm:px-6">
          <div>
            <span className="text-md text-white">Omat Sivut</span>
          </div>
          <div>
            <button
              type="button"
              className="-mr-3 h-12 w-12 inline-flex items-center justify-center bg-blue-600 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-40 flex ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="inline-flex items-center justify-center p-1 rounded-full text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <div className="flex-1 h-0 overflow-y-auto">
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-2 py-2 z-50 relative text-base font-medium text-white hover:bg-blue-700 rounded-md"
                >
                  <item.icon className="mr-4 h-6 w-6" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div
          className="fixed inset-0 bg-black/40"
          aria-hidden="true"
          onClick={() => setSidebarOpen(false)}
        ></div>
      </div>
    </div>
  );
}

export default SideNavbar;

const navigation = [
  { name: "Koti", href: "/profile/home", icon: HomeIcon, current: false },
  {
    name: "Luo uusi",
    href: "/profile/create",
    icon: ArchiveIcon,
    current: false,
  },
  {
    name: "Galleria",
    href: "/profile/galleria",
    icon: PhotographIcon,
    current: false,
  },
];
