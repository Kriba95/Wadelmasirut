import React, { useState } from "react";
import {
  GlobeAltIcon,

} from "@heroicons/react/outline";

const mainadlinks = [
  {
    name: "Perus sivut",
    
    description:"Sivut sisältää perus paketin",
    icon: GlobeAltIcon,
  },
  {
    name: "Premium sivut",
    
    description:"Sivut sisältää perus paketin",
    icon: GlobeAltIcon,
  },
  {
    name: "Enterprise sivut",
    
    description:"Sivut sisältää perus paketin",
    icon: GlobeAltIcon,
  },

];

export default function LRadioGroupsTwoKotisivut({valinta, setValinta,mainadlinks}) {
  const handleSelect = (index) => {
    setValinta([index]);
    // if (valinta.includes(index)) {
    //   setValinta(valinta.filter((i) => i !== index));
    // } else {
    //   setValinta([...valinta, index]);
    // }
  };

  if (mainadlinks)  return (
    <div className="">
LRadioGroupsTwoKotisivut      <section
        className="max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Palvelumme
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-20 lg:gap-x-8">
          {mainadlinks.map((link, index) => (

            <div
              onClick={() => handleSelect(index)}
              key={link.id}
              className={`flex flex-col cursor-pointer  rounded-2xl shadow-xl ${
                valinta[index] === true
                  ? "bg-indigo-600 text-white"
                  : "bg-white"
              }`}
              // className=""
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon
                    className={`duration-150  h-8 w-8  ${
                      valinta[index] === true
                        ? " text-black"
                        : "text-white"
                    }`}
                    // className="h-8 w-8 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 
                       className={`duration-150 text-xl font-medium text-gray-900 ${
                        valinta[index] === true
                          ? " text-white"
                          : "text-gray-900"
                      }`}
                // className="text-xl font-medium text-gray-900"
                >
                  {link.name}
                </h3>
                <p
                  className={`duration-150  mt-4 text-base text-gray-500 ${
                    valinta[index] === true
                      ? " text-white"
                      : "text-gray-500"
                  }`}
                
                // className="mt-4 text-base text-gray-500"
                >
                  {link.description}
                </p>
              </div>
              <div
                className={`p-6 bg-gray-50 rounded-bl-2xl duration-150 rounded-br-2xl md:px-8 ${
                  valinta[index] === true ? "bg-indigo-700" : ""
                }`}
              >
                <p
                  className={`block text-base font-medium duration-150 ${
                    valinta[index] === true
                      ? "text-white"
                      : "text-indigo-700"
                  }`}
                >
                  Valitse
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
