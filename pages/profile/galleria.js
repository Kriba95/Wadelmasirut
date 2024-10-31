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
import sha1 from "sha1";

const fetcher = async (uri) => {
  const response = await fetch(uri);
  return response.json();
};
const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: false },
  { name: "All Files", href: "#", icon: ViewGridIconOutline, current: false },
  { name: "Photos", href: "#", icon: PhotographIcon, current: true },
  { name: "Shared", href: "#", icon: UserGroupIcon, current: false },
  { name: "Albums", href: "#", icon: CollectionIcon, current: false },
  { name: "Settings", href: "#", icon: CogIcon, current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
const tabs = [
  { name: "Recently Viewed", href: "#", current: true },
  { name: "Recently Added", href: "#", current: false },
  { name: "Favorited", href: "#", current: false },
];

// const files = [

//   {
//     name: "IMG_4985.HEIC",
//     size: "3.9 MB",
//     source:
//       "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
//     current: false,
//   },
// ];

const currentFile = {
  name: "IMG_4985.HEIC",
  size: "3.9 MB",
  source:
    "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  information: {
    "Uploaded by": "Marie Culver",
    Created: "June 8, 2020",
    "Last modified": "June 8, 2020",
    Dimensions: "4032 x 3024",
    Resolution: "72 x 72",
  },
  sharedWith: [
    {
      id: 1,
      name: "Aimee Douglas",
      imageUrl:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80",
    },
    {
      id: 2,
      name: "Andrea McMillan",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

import { useUser } from "@auth0/nextjs-auth0/client";
import SideNavbar from "@/components/navbar/SideNavbar";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [jarmo, setJarmo] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const { user } = useUser();

  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await fetch("/api/wadelmaimages");
      const data = await response.json();

      setFiles(data.files);
    } catch (error) {
      console.error("Failed to fetch files", error);
    }
  };
  const { data, error } = useSWR("/api/redirect_protected", fetcher, {});

  if (error) return <div>oops...{JSON.stringify(data)}</div>;
  if (data === undefined) return <div>Loading...</div>;
  if (data.protected === false) {
    <Loading />;
  }

  const uploadWidget = async (files) => {
    const upload_preset = "allosasa";

    if (window.cloudinary) {
      window.cloudinary.openUploadWidget(
        {
          cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
          uploadPreset: upload_preset,
          sources: ["local", "url", "camera"],
          multiple: true,
          maxFiles: 10,
          resourceType: "image",
        },
        async (error, result) => {
          if (error) {
            console.error("Upload error:", error);
            return;
          }

          if (result && result.event === "queues-end") {
            // Check if result.info and result.info.files are defined
            const files = result.data.info.files || [];
            // Lähetä tiedostot yksi kerrallaan
            for (const file of files) {
              file.user = user.nickname;

              try {
                const response = await fetch("/api/contactimages", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify([file]), // Lähetä tiedosto yksitellen
                });

                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                fetchFiles();
              } catch (error) {
                console.error("Error sending data to server:", error);
              }
            }
          } else {
            console.log("No files uploaded or an error occurred");
          }
        }
      );
    } else {
      console.error("Cloudinary script not loaded yet");
    }
  };

  const handleDelete = async () => {
    if (selectedFile) {
      const formData = new FormData();
      const publicId = selectedFile.publicId;
      const timestamp = new Date().getTime();
      const string = `public_id=${publicId}&timestamp=${timestamp}${process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET}`;
      const signature = sha1(string);
      const upload_preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESENT;

      formData.append("public_id", publicId);
      formData.append("signature", signature);
      formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
      formData.append("timestamp", timestamp);
      formData.append("upload_preset", upload_preset);

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/deo7pv2rv/image/destroy",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.result === "ok") {
        try {
          const response = await fetch(`/api/deletefile/${selectedFile._id}`, {
            method: "DELETE",
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          fetchFiles();
          setSelectedFile(null);
        } catch (error) {
          console.error("Error deleting file:", error);
        }
      }
    }
  };

  if (data.protected === true) {
    return (
      <div className="relative h-screen bg-gray-50 flex overflow-hidden">
        <Sidebar page="Galleria"></Sidebar>
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
                    onClick={uploadWidget}
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
                    Photos
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
                          <a
                            key={tab.name}
                            href={tab.href}
                            aria-current={tab.current ? "page" : undefined}
                            className={classNames(
                              tab.current
                                ? "border-indigo-500 text-indigo-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                              "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                            )}
                          >
                            {tab.name}
                          </a>
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
                    {files &&
                      files.map((file) => (
                        <li
                          key={file._id}
                          className="relative"
                          onClick={() => setSelectedFile(file)}
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
                              src={file.src}
                              alt=""
                              className={classNames(
                                file.current ? "" : "group-hover:opacity-75",
                                "object-cover pointer-events-none"
                              )}
                            />
                            <button
                              type="button"
                              className="absolute inset-0 focus:outline-none"
                            >
                              <span className="sr-only">
                                View details for {file.name}
                              </span>
                            </button>
                          </div>
                          <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                            {file.name}
                          </p>
                          <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                            {file.size / 1024 > 1024
                              ? (file.size / (1024 * 1024)).toFixed(2) + " MB"
                              : (file.size / 1024).toFixed(2) + " KB"}
                          </p>
                        </li>
                      ))}
                  </ul>
                </section>
              </div>
            </main>

            {/* Details sidebar */}

            <aside
              className={`w-96 bg-white p-8 border-l border-gray-200 overflow-y-auto ${
                selectedFile ? "block" : "hidden"
              }`}
            >
              {selectedFile && (
                <div className="pb-16 space-y-6">
                  <div onClick={() => setSelectedFile(false)} className="flex border-b border-gray-200 justify-between">
                    <span className="bold">Sulje</span>
                    <div className="w-8 h-8 text-red-600">
                      <XIcon />
                    </div>
                  </div>
                  <div>
                    <div className="block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src={selectedFile.src}
                        alt=""
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4 flex items-start justify-between">
                      <div>
                        <h2 className="text-lg font-medium text-gray-900">
                          <span className="sr-only">Details for </span>
                          {selectedFile.name}
                        </h2>
                        <p className="text-sm font-medium text-gray-500">
                          {selectedFile.size / 1024 > 1024
                            ? (selectedFile.size / (1024 * 1024)).toFixed(2) +
                              " MB"
                            : (selectedFile.size / 1024).toFixed(2) + " KB"}
                        </p>
                        <p className="text-xs font-medium text-gray-500">
                          {(selectedFile.size / (1024 * 1024)).toFixed(4) +
                            " MB"}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <HeartIcon className="h-6 w-6" aria-hidden="true" />
                        <span className="sr-only">Favorite</span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Information</h3>
                    <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                      <div className="py-3 flex justify-between text-sm font-medium">
                        <dt className="text-gray-500">Resolution</dt>
                        <dd className="text-gray-900">{`${selectedFile.dimensions[0]} x ${selectedFile.dimensions[1]}`}</dd>
                      </div>
                      <div className="py-3 flex justify-between text-sm font-medium">
                        <dt className="text-gray-500">Type</dt>
                        <dd className="text-gray-900 uppercase">
                          {selectedFile.format}
                        </dd>
                      </div>
                      <div className="py-3 flex justify-between text-sm font-medium">
                        <dt className="text-gray-500">Uploaded</dt>
                        <dd className="text-gray-900">
                          {new Date(
                            selectedFile.uploadedAt
                          ).toLocaleDateString()}
                        </dd>
                      </div>
                      <div className="py-3 flex justify-between text-sm font-medium">
                        <dt className="text-gray-500">Uploaded By</dt>
                        <dd className="text-gray-900">
                          {selectedFile.nickname}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Description</h3>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-sm text-gray-500 italic">
                        Add a alt-description to this image.
                      </p>

                      <button
                        type="button"
                        className="bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <PencilIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="sr-only">Add description</span>
                      </button>
                    </div>
                  </div>
                  <div className="overflow-auto">
                    <h3 className="font-medium text-gray-900">Image URL</h3>

                    <p className="text-sm text-gray-500 italic">
                      {selectedFile.src}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900">Shared with</h3>
                    <ul className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                      {selectedFile.sharedWith &&
                        selectedFile.sharedWith.map((person) => (
                          <li
                            key={person.id}
                            className="py-3 flex justify-between items-center"
                          >
                            <div className="flex items-center">
                              <img
                                src={person.imageUrl}
                                alt=""
                                className="w-8 h-8 rounded-full"
                              />
                              <p className="ml-4 text-sm font-medium text-gray-900">
                                {person.name}
                              </p>
                            </div>
                            <button
                              type="button"
                              className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Remove
                              <span className="sr-only"> {person.name}</span>
                            </button>
                          </li>
                        ))}
                      <li className="py-2 flex justify-between items-center">
                        <button
                          type="button"
                          className="group -ml-1 bg-white p-1 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <span className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                            <PlusIconSolid
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                          <span className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                            Share
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="flex">
                    <button
                      type="button"
                      onClick={""}
                      className="flex-1 bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Lataa
                    </button>
                    <button
                      type="button"
                      onClick={handleDelete}
                      className="flex-1 ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Poista
                    </button>
                  </div>
                </div>
              )}
            </aside>
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
