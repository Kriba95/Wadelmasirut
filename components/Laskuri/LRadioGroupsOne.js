import React from "react";
import { GlobeAltIcon, ShoppingCartIcon } from "@heroicons/react/outline";

const mainadlinks = [
  {
    name: "Kotisivut",
    description:
      "Tarjoamme tyylikkäät ja käyttäjäystävälliset kotisivut, jotka tuovat yrityksesi parhaat puolet esiin ja auttavat asiakkaitasi löytämään sinut helposti.",
    icon: GlobeAltIcon,
  },
  {
    name: "Verkkokaupat",
    description:
      "Rakenna menestyvä verkkokauppa kanssamme. Tarjoamme täydelliset ratkaisut, jotka tekevät ostokokemuksesta sujuvan ja mukavan.",
    icon: ShoppingCartIcon,
  },
];

export default function LRadioGroupsOne({ valinta, setValinta, valinnat }) {
  const handleSelect = (index) => {
    if (valinta.includes(index)) {
      setValinta(valinta.filter((i) => i !== index));
    } else {
      setValinta([index]);
    }
  };

  return (
    <div className="">
            {/* Overlapping cards */}
      <section
        className="max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Palvelumme
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
          {mainadlinks.map((link, index) => {
            if (valinta.length !== 0) {
              if (valinta[0] !== index) {
                return;
              }
            }

            if ((valinnat[0] !== index)) {
              return (
                <div
                  onClick={() => handleSelect(index)}
                  key={link.name}
                  className={`flex flex-col cursor-pointer rounded-2xl shadow-xl ${
                    valinta.includes(index)
                      ? "bg-indigo-600 text-white"
                      : "bg-white"
                  }`}
                >
                  <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                    <div
                      className={`duration-150 absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2 ${
                        valinta.includes(index) ? "text-white" : "text-white"
                      }`}
                    >
                      <link.icon
                        className={`duration-150 h-8 w-8 ${
                          valinta.includes(index) ? "text-white" : "text-white"
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                    <h3
                      className={`duration-150 text-xl font-medium text-gray-900 ${
                        valinta.includes(index) ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {link.name}
                    </h3>
                    <p
                      className={`duration-150 mt-4 text-base text-gray-500 ${
                        valinta.includes(index) ? "text-white" : "text-gray-500"
                      }`}
                    >
                      {link.description}
                    </p>
                  </div>
                  <div
                    className={`p-6 bg-gray-50 rounded-bl-2xl duration-150 rounded-br-2xl md:px-8 ${
                      valinta.includes(index) ? "bg-indigo-700" : ""
                    }`}
                  >
                    <p
                      className={`block text-base font-medium duration-150 ${
                        valinta.includes(index)
                          ? "text-white"
                          : "text-indigo-700"
                      }`}
                    >
                      Valitse
                    </p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>
    </div>
  );
}
