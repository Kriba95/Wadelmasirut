import React from "react";
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const navigation = [
  { name: "Etusivu", href: "/" },
  { name: "Palvelut", href: "/palvelut" },
  { name: "Hintalaskuri", href: "/laskuri/kotisivut" },
  // { name: "Referenssit", href: "/referenssit" },
  { name: "Ota yhteyttä", href: "/ota-yhteytta" },
  { name: "Pyydä tarjous", href: "/tarjouspyynto" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function IndexNavbarDark() {
  const router = useRouter();

  const { user } = useUser();
  let session = user;

  const userNavigation = [
    {
      name: "Dashboard",
      href: "/profile/create",
    },
    {
      name: "Logout",
      href: "/api/auth/logout",
    },
  ];

  return (
    <>
      <div className=" relative " />

      <div
        style={
          router.asPath === "/"
            ? {
                backdropFilter: "contrast",
                backgroundColor: "rgba(17, 0, 0, 0.77)",
              }
            : {}
        }
        className={`${
          router.asPath === "/"
            ? "bg-transparent  border-b border-black   border-2"
            : "bg-gray-800"
        }  fixed w-full z-20 top-0 navbar-blur`}
      >
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className=" border-gray-700">
                  <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                    <div className="flex  items-center ">
                      <div
                        onClick={() => router.push("/")}
                        className="flex-shrink-0  cursor-pointer "
                      >
                        <img
                          href="/"
                          className="h-16 w-16"
                          src="https://res.cloudinary.com/deo7pv2rv/image/upload/f_auto,q_auto/v1/1wademasiru/n81j0sgrcnbmljeylbct"
                          alt="Wadelmasiru logo"
                        />
                      </div>
                      <div
                        onClick={() => router.push("/")}
                        className="text-center cursor-pointer"
                      >
                        <h2 className="text-white font-medium tracking-wide text-md">
                          Wadelmasiru
                        </h2>
                        <p className="text-white font-medium tracking-wide text-xs ">
                          Digitoimisto
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                          {navigation.map((item, itemIdx) =>
                            item.href === router.asPath ? (
                              <Fragment key={item.name}>
                                {/* Current: "bg-stone-950 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                <Link
                                  href="/"
                                  className={`${
                                    router.asPath === "/"
                                      ? "bg-stone-950"
                                      : "bg-gray-800"
                                  } text-white px-3 py-2 rounded-md text-sm font-medium `}
                                >
                                  {item.name}
                                </Link>
                              </Fragment>
                            ) : (
                              <Link
                                key={item.name}
                                href={item.href}
                                className={`${
                                  router.asPath === "/"
                                    ? "hover:text-black hover:bg-white"
                                    : "hover:text-white hover:bg-gray-500"
                                } text-gray-300  px-3 py-2 rounded-md text-sm font-medium`}
                              >
                                {item.name}
                              </Link>
                            )
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="bg-whitea inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>

                    <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                      {session?.email ? (
                        <>
                          {/* Profile dropdown */}
                          <Menu
                            as="div"
                            className="flex-shrink-0 relative ml-4"
                          >
                            <div>
                              <Menu.Button className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open user menu</span>
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={session?.picture}
                                  alt="MyPicture"
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
                              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                                {userNavigation.map((item, i) => (
                                  <Menu.Item key={i}>
                                    {({ active }) => (
                                      <a
                                        href={item.href}
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block py-2 px-4 text-sm text-gray-700"
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
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile menu */}
              <Disclosure.Panel className="border-b border-gray-700 md:hidden">
                <div className="px-2 py-3 space-y-1 sm:px-3">
                  {navigation.map((item, itemIdx) =>
                    item.href === router.asPath ? (
                      <Fragment key={item.name}>
                        {/* Current: "bg-stone-950 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <a
                          href={item.href}
                          className="bg-stone-950 text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                          {item.name}
                        </a>
                      </Fragment>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                  {session?.email && (
                    <Menu as="div" className="flex-shrink-0 relative ml-4">
                      <div>
                        <Menu.Button className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Minä
                          </a>{" "}
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={session?.picture}
                            alt="MyPicture"
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
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                          {userNavigation.map((item, i) => (
                            <Menu.Item key={i}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block py-2 px-4 text-sm text-gray-700"
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
                  )}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}

export default IndexNavbarDark;
