import React, { useState } from "react";
import {
  GlobeAltIcon,
  ShoppingCartIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const mainadlinks = [
  {
    name: "Kotisivut",
    href: "/kotisivut/nettisivut",
    description:
      "Tarjoamme tyylikkäät ja käyttäjäystävälliset kotisivut, jotka tuovat yrityksesi parhaat puolet esiin ja auttavat asiakkaitasi löytämään sinut helposti.",
    icon: GlobeAltIcon,
  },
  {
    name: "Verkkokaupat",
    href: "/kotisivut/verkkokauppa",
    description:
      "Tarjoamme täydelliset ratkaisut, jotka tekevät ostokokemuksesta sujuvan ja mukavan.",
    icon: ShoppingCartIcon,
  },
  {
    name: "Hakukoneoptimointi",
    href: "/ota-yhteytta",
    description:
      "Näy paremmin Googlessa! Hakukoneoptimointipalvelumme auttavat sinua saavuttamaan parempia sijoituksia ja lisäämään näkyvyyttäsi verkossa.",
    icon: SearchIcon,
  },
];

export default function Example() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const router = useRouter()


  return (
    <div className="-mt-16">
      <div className="relative pb-32">
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-100 md:text-5xl lg:text-6xl">
            Wadelmasiru
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-200 ">
            Etsitkö ammattitaitoista kumppania, joka rakentaa tyylikkäät ja
            toimivat kotisivut tai verkkokaupan nopeasti ja luotettavasti?
            Wadelmasiru on juuri sinua varten! Tarjoamme yrityksellesi
            visuaalisesti upeita ja käyttäjäystävällisiä kotisivuja ja
            verkkokauppoja, jotka ovat myös hakukoneoptimoituja, jotta
            asiakkaasi löytävät sinut helposti Googlesta ja auttavat sinua
            kasvattamaan myyntiäsi.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Palvelumme
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {mainadlinks.map((link, index) => (
            <div 
            onClick={() => router.push(link.href)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}
              key={link.name}
              className={`navbar-blur  duration-150  border-r border-l border-t  flex flex-col  rounded-2xl shadow-xl ${
                hoveredIndex === index ? "cursor-pointer bg-stone-950 border-2 border-red-600" : "border-2 bg-transparent"
              }`}
            >
              <div
                className={`  flex-1 relative pt-16 px-6 pb-8 md:px-8 ${
                  hoveredIndex === index ? " " : ""
                }`}
              >
                <div
                  style={{ backgroundColor: "#333", filter: "blur(5px)" }}
                  className="h-64 absolute  top-0 left-0"
                />
                <div className="">
                  <div
                    className={`absolute -top-10 p-5 inline-block  bg-origin-border   hover:from-purple-700 hover:to-indigo-700  rounded-xl shadow-lg transform -translate-y-1/2 ${
                      hoveredIndex === index ? "" : ""
                    }`}
                  >
                    <link.icon
                      className="h-8 w-8 text-white"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-xl font-medium text-gray-100">
                    {link.name}
                  </h3>
                  <p className="mt-4 text-base text-gray-200">
                    {link.description}
                  </p>
                </div>
              </div>
              <div
                className="p-6 bg-transparent  mb-1  duration-150  md:px-8 "
   
              >
                <Link
                  href={link.href}
                  className={`block text-base font-medium  duration-150  ${
                    hoveredIndex === index ? "text-white" : "text-indigo-700"
                  }`}
                >
                  Katso lisää <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
