/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";

const kotisivutFeatures = [
  "Sisällöntuotanto",
  "Hakukoneoptimointi",
  "Palvelintila ja www-osoite",
  "SSL-suojaus",
  "Responsiivinen suunnittelu",
];
const verkkokauppaFeatures = [
  "Analytiikka ja raportointi",
  "Markkinointityökalut",
  "Monikielisyystuki",
  "Asiakashallintajärjestelmä",
];
const growthFeatures = [
  "Tuoteluettelon hallinta",
  "Maksujärjestelmien integraatiot",
  "Tilauksen seuranta",
  "Tuotteiden lisäys  seuranta",
  "Automaattinen laskutus",
  "Integrointi Shopifyhin",
];

export default function PriceTag() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="">
      <div className="pt-12 navbar-blurpx-4 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
            Hinnat
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Kotisivut yritykselle
          </p>
          <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl">
            Kotisivut 250€ + ALV
            <br />
            Verkkokauppa 950€ + ALV
          </p>
        </div>
      </div>

      <div className="mt-16 pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 lg:h-2/3" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              {/* Perus kotisivupaketti */}
              <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <div
                  style={{
                    boxShadow:
                      hoveredIndex === 1
                        ? "0 0 15px rgba(255, 255, 255, 0.5)"
                        : "0 0 10px rgba(255, 255, 255, 0.3)",
                  }}
                  className={`${
                    hoveredIndex === 1 ? "border-gray-200" : "border-gray-900"
                  }
                  border-2 h-full duration-300 flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg`}
                >
                  <div className="flex-1 flex flex-col">
                    <div className="bg-neutral-950 px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-2xl font-medium text-gray-100"
                          id="tier-kotisivut"
                        >
                          Perus kotisivupaketti
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-100">
                      
                            <span className="font-extrabold">250</span>
                          </span>
                          <span className="text-xl font-medium text-gray-200">
                          <span className="mt-2 mr-2 text-4xl font-medium">
                              €
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`navbar-blur flex-1 flex flex-col justify-between border-t-2 border-gray-900 p-6 bg-transparent sm:p-10 lg:p-6 xl:p-10
                      ${hoveredIndex === 1 ? "bg-stone-900" : ""}`}
                    >
                      <ul className="space-y-4">
                        {kotisivutFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-200">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div
                          onMouseEnter={() => setHoveredIndex(1)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          className="rounded-lg shadow-md"
                        >
                          <Link
                            style={{
                              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                            }}
                            href="/tarjouspyynto"
                            className={`
                              ${
                                hoveredIndex === 1
                                  ? "text-white bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border text-base hover:from-purple-700 hover:to-indigo-700"
                                  : "text-indigo-600 bg-transparent"
                              }
                              block w-full text-center duration-150 rounded-lg border border-transparent px-6 py-3 text-base font-medium`}
                            aria-describedby="tier-kotisivut"
                          >
                            Katso lisää
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verkkokauppa */}
              <div
                style={{
                  zIndex: "11",
                  boxShadow:
                    hoveredIndex === 2
                      ? "0 0 15px rgba(255, 255, 255, 0.5)"
                      : "0 0 10px rgba(255, 255, 255, 0.3)",
                }}
                className="group mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4"
              >
                <div    className="relative z-10 shadow-xl">
                  <div style={{zIndex: "11" }}
                    className={`pointer-events-none duration-300 absolute inset-0 rounded-lg border-2 
                      ${
                        hoveredIndex === 2
                          ? "border-gray-200"
                          : "border-gray-900"
                      }`}
                    aria-hidden="true"
                  />
                  <div style={{zIndex: "21" } } className="absolute inset-x-0 top-0 transform translate-y-px">
                    <div  className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border hover:from-purple-700 hover:to-indigo-700 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                        Suosituin
                      </span>
                    </div>
                  </div>
                  <div className="bg-neutral-950 rounded-t-lg px-6 pt-12 pb-10">
                    <div>
                      <h3
                        className="text-center text-3xl font-semibold text-gray-100 sm:-mx-6"
                        id="tier-growth"
                      >
                        Verkkokauppa
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <p className="px-3 flex items-start text-6xl tracking-tight text-gray-100 sm:text-6xl">
                          <span className="font-extrabold">950</span>
                          <span className="mt-2 ml-2 text-4xl font-medium">
                            €
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`navbar-blur border-t-2 border-gray-900 rounded-b-lg pt-10 pb-8 px-6 bg-transparent sm:px-10 sm:py-10
                      ${hoveredIndex === 2 ? "bg-stone-900" : ""}`}
                  >
                    <ul className="space-y-4">
                      {growthFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="flex-shrink-0 h-6 w-6 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-200">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div
                      onMouseEnter={() => setHoveredIndex(2)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="mt-10"
                    >
                      <div className="rounded-lg shadow-md">
                        <Link
                          style={{
                            boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                          }}
                          href="/kotisivut/verkkokauppa"
                          className={`
                            ${
                              hoveredIndex === 2
                                ? "bg-indigo-700 text-white"
                                : hoveredIndex === null
                                ? "bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border text-base hover:from-purple-700 hover:to-indigo-700 text-white"
                                : "text-indigo-600"
                            } block w-full duration-300 text-center rounded-lg border border-transparent px-6 py-4 text-xl leading-6 font-medium`}
                          aria-describedby="tier-growth"
                        >
                          Katso lisää
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skaalautuvat kotisivut */}
              <div
                style={{
                  boxShadow:
                    hoveredIndex === 3
                      ? "0 0 15px rgba(255, 255, 255, 0.5)"
                      : "0 0 10px rgba(255, 255, 255, 0.3)",
                }}
                className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3"
              >
                <div
                  className={`${
                    hoveredIndex === 3 ? "border-gray-200" : "border-gray-900"
                  } border-2 h-full duration-300 flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg`}
                >
                  <div className="flex-1 flex flex-col">
                    <div className="bg-neutral-950 px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-2xl font-medium text-gray-100"
                          id="tier-scale"
                        >
                          Skaalautuvat kotisivut
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-100">
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              €
                            </span>
                            <span className="font-extrabold">100</span>
                          </span>
                          <span className="text-xl font-medium text-gray-200">
                            /kk
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`navbar-blur flex-1 flex flex-col justify-between border-t-2 border-gray-900 p-6 bg-transparent sm:p-10 lg:p-6 xl:p-10
                      ${hoveredIndex === 3 ? "bg-stone-900" : ""}`}
                    >
                      <ul className="space-y-4">
                        {verkkokauppaFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-200">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div
                          onMouseEnter={() => setHoveredIndex(3)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          className="rounded-lg shadow-md"
                        >
                          <Link
                            href="/laskuri/kotisivut"
                            style={{
                              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                            }}
                            className={`
                              ${
                                hoveredIndex === 3
                                  ? "text-white bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border text-base hover:from-purple-700 hover:to-indigo-700"
                                  : "text-indigo-600 bg-transparent"
                              }
                              block w-full text-center duration-150 rounded-lg border border-transparent px-6 py-3 text-base font-medium`}
                            aria-describedby="tier-kotisivut"
                          >
                            Katso lisää
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
