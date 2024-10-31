import React from "react";
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Router, useRouter } from "next/router";
import Link from "next/link";

const navigation = [
  { name: "Etusivu", href: "/" },
  { name: "Palvelut", href: "/palvelut" },
  { name: "Hintalaskuri", href: "/laskuri/kotisivut" },
  // { name: "Referenssit", href: "/referenssit" },
  { name: "Ota yhteyttä", href: "/ota-yhteytta" },
  { name: "Pyydä tarjous", href: "/tarjouspyynto" },

];
const profile = ["Your Profile", "Settings", "Sign out"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function IndexNavbar() {
  const router = useRouter();

  return (
    <>
      <div className="bg-gray-800 ">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="border-b border-gray-700">
                  <div className="flex items-center justify-between h-32 px-4 sm:px-0">
                    <div className="flex  items-center ">
                      <div
                        onClick={() => router.push("/")}
                        className="flex-shrink-0  cursor-pointer "
                      >
                        <img
                          href="/"
                          className="h-32 w-32"
                          src="/asa.png"
                          alt="Wadelmasiru logo"
                        />
                      </div>
                      <div
                        onClick={() => router.push("/")}
                        className="text-center cursor-pointer"
                      >
                        <h2 className="text-white font-medium tracking-wide text-xl">
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
                                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                <Link
                                  href="/"
                                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                  {item.name}
                                </Link>
                              </Fragment>
                            ) : (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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
                      <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
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
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="border-b border-gray-700 md:hidden">
                <div className="px-2 py-3 space-y-1 sm:px-3">
                  {navigation.map((item, itemIdx) =>
                    item.href === router.asPath ? (
                      <Fragment key={item.name}>
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <a
                          href={item.href}
                          className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                          {item.name}
                        </a>
                      </Fragment>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                        {item.name}
                      </a>
                    )
                  )}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <div className="py-4"></div>
      </div>
    </>
  );
}

export default IndexNavbar;
