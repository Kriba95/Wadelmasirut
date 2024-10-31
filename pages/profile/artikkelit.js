/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useEffect, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  CogIcon,
  CollectionIcon,
  HeartIcon,
  HomeIcon,
  MenuAlt2Icon,
  PhotographIcon,
  PlusIcon as PlusIconOutline,
  UserGroupIcon,
  ViewGridIcon as ViewGridIconOutline,
  XIcon,
} from "@heroicons/react/outline";
import {
  PencilIcon,
  PlusIcon as PlusIconSolid,
  SearchIcon,
  ViewGridIcon as ViewGridIconSolid,
  ViewListIcon,
} from "@heroicons/react/solid";
import Sidebar from "@/components/navbar/Sidebar";
import Loading from "@/components/Loading/Loading";
import useSWR from "swr";

const fetcher = async (uri) => {
  const response = await fetch(uri);
  return response.json();
};

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
const tabs = [
  { name: "Recently Viewed", href: "#", current: true },
  { name: "Recently Added", href: "#", current: false },
  { name: "Favorited", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

import { useUser } from "@auth0/nextjs-auth0/client";
import SideNavbar from "@/components/navbar/SideNavbar";
import { useRouter } from "next/router";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [jarmo, setJarmo] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const { user } = useUser();
  const [selectedTab, setSelectedTab] = useState("Recently Viewed");

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, [selectedTab]);

  const fetchFiles = async () => {
    try {
      const response = await fetch("http://192.168.1.166:3333/api/artikkelit");
      const data = await response.json();
      console.log(data.result);

      // Sort articles based on the selected tab
      if (selectedTab === "Recently Added") {
        setArticles(
          data.result.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          )
        );
      } else {
        setArticles(data.result);
      }
    } catch (error) {
      console.error("Failed to fetch files", error);
    }
  };


  const router = useRouter()
  const { data, error } = useSWR("/api/redirect_protected", fetcher, {});

  if (error) return <div>oops...{JSON.stringify(data)}</div>;
  if (data === undefined) return <div>Loading...</div>;
  if (data.protected === false) {
    <Loading />;
  }

  if (data.protected === true) {
    return (
      <div className="relative h-screen bg-gray-50 flex overflow-hidden">
        <Sidebar page="Kaikki artikkelit"></Sidebar>
        {/* Mobile menu */}

        {/* Content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="w-full">
            <SideNavbar />

            <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
              <button
                type="button"
                className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex-1 flex justify-between px-4 sm:px-6">
                <div className="flex-1 flex">
                  <form className="w-full flex md:ml-0" action="#" method="GET">
                    <label htmlFor="desktop-search-field" className="sr-only">
                      Search all files
                    </label>
                    <label htmlFor="mobile-search-field" className="sr-only">
                      Search all files
                    </label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                        <SearchIcon
                          className="flex-shrink-0 h-5 w-5"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        name="mobile-search-field"
                        id="mobile-search-field"
                        className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden"
                        placeholder="Search"
                        type="search"
                      />
                      <input
                        name="desktop-search-field"
                        id="desktop-search-field"
                        className="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block"
                        placeholder="Search all files"
                        type="search"
                      />
                    </div>
                  </form>
                </div>
                <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative flex-shrink-0">
                    <div>
                      <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://res.cloudinary.com/deo7pv2rv/image/upload/f_auto,q_auto/v1/1wademasiru/n81j0sgrcnbmljeylbct"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  <button
                    type="button"
                    className="flex bg-indigo-600 p-1 rounded-full items-center justify-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <PlusIconOutline className="h-6 w-6" aria-hidden="true" />
                    <span className="sr-only">Add file</span>
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Main content */}
          <div className="flex-1 flex items-stretch overflow-hidden">
            <main className="flex-1 overflow-y-auto">
              <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex">
                  <h1 className="flex-1 text-2xl font-bold text-gray-900">
                    Kaikki artikkelit
                  </h1>
                  <div className="ml-6 bg-gray-100 p-0.5 rounded-lg flex items-center sm:hidden">
                    <button
                      type="button"
                      className="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <ViewListIcon className="h-5 w-5" aria-hidden="true" />
                      <span className="sr-only">Use list view</span>
                    </button>
                    <button
                      type="button"
                      className="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <ViewGridIconSolid
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Use grid view</span>
                    </button>
                  </div>
                </div>

                {/* Tabs */}
                <div className="mt-3 sm:mt-2">
                  <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">
                      Select a tab
                    </label>
                    <select
                      onChange={(e) => setSelectedTab(e.target.value)}
                      id="tabs"
                      name="tabs"
                      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      defaultValue="Recently Viewed"
                    >
                      <option>Recently Viewed</option>
                      <option>Recently Added</option>
                      <option>Favorited</option>
                    </select>
                  </div>
                  <div className="hidden sm:block">
                    <div className="flex items-center border-b border-gray-200">
                      <nav
                        className="flex-1 -mb-px flex space-x-6 xl:space-x-8"
                        aria-label="Tabs"
                      >
                        {tabs.map((tab) => (
                          <span
                            onClick={() => setSelectedTab(tab.name)}
                            key={tab.name}
                            href={tab.href}
                            aria-current={tab.current ? "page" : undefined}
                            className={classNames(
                              tab.current
                                ? "border-indigo-500 text-indigo-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                              "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer"
                            )}
                          >
                            {tab.name}
                          </span>
                        ))}
                      </nav>
                      <div className="hidden ml-6 bg-gray-100 p-0.5 rounded-lg items-center sm:flex">
                        <button
                          type="button"
                          onClick={() => setJarmo(true)}
                          className="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                          <ViewListIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Use list view</span>
                        </button>
                        <button
                          type="button"
                          className="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                          <ViewGridIconSolid
                            onClick={() => setJarmo(false)}
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Use grid view</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gallery */}
                <section
                  className="mt-8 pb-16"
                  aria-labelledby="gallery-heading"
                >
                  <h2 id="gallery-heading" className="sr-only">
                    Recently viewed
                  </h2>
                  <ul
                    role="list"
                    className={
                      jarmo
                        ? "grid grid-cols-1"
                        : "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                    }
                    // "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                  >
                    {articles &&
                      articles.map((article) => (
                        <li
                          onClick={() =>
                            router.push(
                              "https://wadelmasiru.fi/artikkelit/" + article.url
                            )
                          }
                          key={article._id}
                          className="relative"
                        >
                          <div
                            className={classNames(
                              selectedFile
                                ? "ring-2 ring-offset-2 ring-indigo-500"
                                : "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500",
                              "group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden"
                            )}
                          >
                            <img
                              src={article?.imagesArray[0]}
                              alt=""
                              className={classNames(
                                article.current ? "" : "group-hover:opacity-75",
                                "object-cover pointer-events-none"
                              )}
                            />
                            <button
                              type="button"
                              className="absolute inset-0 focus:outline-none"
                            >
                              <span className="sr-only">
                                View details for {article.name}
                              </span>
                            </button>
                          </div>
                          <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                            {article.title}
                          </p>
                          <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                            {article.user && article.user + " | "}{" "}
                            {article?.author?.title}
                          </p>
                        </li>
                      ))}
                  </ul>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative h-screen flex items-center justify-center bg-blue-gray-50 overflow-hidden">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Et ole kirjautunut</h1>
          <p className="mb-6 text-lg text-gray-600">
            Pääsy tämän sivun sisältöön edellyttää kirjautumista. Kirjaudu
            sisään päästäksesi käyttämään kaikkia palveluita ja ominaisuuksia.
          </p>
          <a
            href="/api/auth/login"
            className="inline-block px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
          >
            Kirjaudu sisään
          </a>
        </div>
      </div>
    );
  }
}
