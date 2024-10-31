import { useState } from "react";
import {
  ArchiveIcon,
  HomeIcon,
  UserCircleIcon as UserCircleIconOutline,
  PhotographIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const navigation = [
  { name: "Koti", href: "/profile/home", icon: HomeIcon, current: false },
  { name: "Sähkopostit", href: "/profile/sahkoinenvie", icon: HomeIcon, current: false },
  { name: "Luo uusi", href: "/profile/create", icon: ArchiveIcon, current: false },
  { name: "Galleria", href: "/profile/galleria", icon: PhotographIcon, current: false },
  { name: "Kaikki artikkelit", href: "/profile/artikkelit", icon: PhotographIcon, current: false },
];

const projects = [
  // { id: 1, name: "GraphQL API", href: "#" },
  // { id: 2, name: "iOS App", href: "#" },
  // { id: 3, name: "Marketing Site Redesign", href: "#" },
  // { id: 4, name: "Customer Portal", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar({ page }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex items-center h-16 flex-shrink-0 px-4 text-white bg-gray-900">
              <img className="h-8 w-auto" src="/asa.png" alt="Wadelmasiru" />
              <span className="ml-2">Oma palvelu</span>
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="flex-1 px-2 py-4 bg-gray-800">
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.name === page
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-300"
                            : "text-gray-400 group-hover:text-gray-300",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-10">
                  <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Projects
                  </p>
                  <div className="mt-2 space-y-1">
                    {projects.map((project) => (
                      <a
                        key={project.id}
                        href={project.href}
                        className="group flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700"
                      >
                        <span className="truncate">{project.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div className="lg:hidden top-20">
        <div className={`fixed inset-0 flex z-40 ${sidebarOpen ? '' : 'hidden'}`}>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true" />
          <div className={`relative flex flex-col max-w-xs w-full bg-gray-800 transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4 text-white bg-gray-900">
                <img className="h-8 w-auto" src="/asa.png" alt="Wadelmasiru" />
                <span className="ml-2">Oma palvelu</span>
              </div>
              <nav className="flex-1 px-2 py-4 bg-gray-800">
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.name === page
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-300"
                            : "text-gray-400 group-hover:text-gray-300",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-10">
                  <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Projects
                  </p>
                  <div className="mt-2 space-y-1">
                    {projects.map((project) => (
                      <a
                        key={project.id}
                        href={project.href}
                        className="group flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700"
                      >
                        <span className="truncate">{project.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="flex-shrink-0 w-14" aria-hidden="true" />
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="lg:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="py-4">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
