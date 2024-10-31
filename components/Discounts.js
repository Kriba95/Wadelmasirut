import Link from "next/link";
import React, { useState, useEffect } from "react";
import TagManager from "react-gtm-module";

function Discounts() {
  const [showCookieDiscounts, setShowCookieDiscounts] = useState(false);

  useEffect(() => {
    setShowCookieDiscounts(true);
  }, []);

  if (!showCookieDiscounts) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
      <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
        <div
          style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)" }}
          className="border-gray-900 border-2 h-full duration-300 flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg"
        >
          <div className="flex-1 flex flex-col">
            <div className="bg-neutral-950 px-6 py-10">
              <div>
                <h2
                  className="text-center text-4xl pb-4 font-medium text-gray-100"
                  id="tier-kotisivut"
                >
                  Tarjous!
                </h2>
                <h3
                  className="text-center text-2xl font-medium text-gray-100"
                  id="tier-kotisivut"
                >
                  Kotisivut suunnittelu ja toteutus
                </h3>
                <div className="mt-4 flex items-center justify-center">
                  <span className="px-3 flex items-start text-6xl tracking-tight text-gray-100">
                    <span className="font-extrabold">50</span>
                  </span>
                  <span className="text-xl font-medium text-gray-200">
                    <span className="mt-2 mr-2 text-4xl font-medium">€</span>
                  </span>
                </div>
                <p className="text-center pt-4 font-medium text-gray-100">
                  Voimassa 26.8. tai 5 ensimmäiselle. 
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-900 p-6 bg-transparent sm:p-10 lg:p-6 xl:p-10 overflow-y-auto max-h-[50vh]">
              <ul className="space-y-4 overflow-y-auto">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                      className="flex-shrink-0 h-6 w-6 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-base font-medium text-gray-200">
                    1-3 Sivua
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                      className="flex-shrink-0 h-6 w-6 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-base font-medium text-gray-200">
                    Laadukas teeman suunnittelu
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                      className="flex-shrink-0 h-6 w-6 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-base font-medium text-gray-200">
                    Vapaa alusta (React, Vue, Wordpress, ...)
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                      className="flex-shrink-0 h-6 w-6 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-base font-medium text-gray-200">
                    Meidän CMS tai Wordpress + muut
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                      className="flex-shrink-0 h-6 w-6 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-base font-medium text-gray-200">
                    Maksu vain valmiista projektista
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                      className="flex-shrink-0 h-6 w-6 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-base font-medium text-gray-200">
                    Avaimet käteen periaatteela
                  </p>
                </li>
              </ul>
              <div className="mt-8">
                <div className="rounded-lg mb-4 shadow-md">
                  <Link
                    onClick={() => setShowCookieDiscounts(false)}
                    href="https://werkkosivut.fi/"
                    style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
                    className="text-indigo-600 bg-transparent block w-full text-center duration-150 rounded-lg border border-transparent px-6 py-3 text-base font-medium"
                    aria-describedby="tier-kotisivut"
                  >
                    Katso lisää
                  </Link>
                </div>
                <div
                  onClick={() => setShowCookieDiscounts(false)}
                  className="rounded-lg mt-4 cursor-pointer shadow-md"
                >
                  <p
                    style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
                    className="text-indigo-600 bg-transparent block w-full text-center duration-150 rounded-lg border border-transparent px-6 py-3 text-base font-medium"
                    aria-describedby="tier-kotisivut"
                  >
                    Sulje
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discounts;
