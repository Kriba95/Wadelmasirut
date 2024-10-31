import React, { useState } from "react";
import {
  GlobeAltIcon,
  ShoppingCartIcon,
  SearchIcon,
} from "@heroicons/react/outline";

const mainadlinks = [
  {
    name: "Kotisivut",
    href: "#",
    description:
      "Tarjoamme tyylikkäät ja käyttäjäystävälliset kotisivut, jotka tuovat yrityksesi parhaat puolet esiin ja auttavat asiakkaitasi löytämään sinut helposti.",
    icon: GlobeAltIcon,
  },
  {
    name: "Verkkokaupat",
    href: "#",
    description:
      "Rakenna menestyvä verkkokauppa kanssamme. Tarjoamme täydelliset ratkaisut, jotka tekevät ostokokemuksesta sujuvan ja mukavan.",
    icon: ShoppingCartIcon,
  },
  {
    name: "Hakukoneoptimointi",
    href: "#",
    description:
      "Näy paremmin Googlessa! Hakukoneoptimointipalvelumme auttavat sinua saavuttamaan parempia sijoituksia ja lisäämään näkyvyyttäsi verkossa.",
    icon: SearchIcon,
  },
];

export default function Example() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [price, setPrice] = useState(50); // Alkuarvo on 50

  const handleChange = (event) => {
    setPrice(event.target.value);
  };
  return (
    <div className="-mt-32">   
      <div className="relative pb-32">
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-black md:text-5xl lg:text-6xl">
            Hinta laskuri
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-black">
      Etsitkö laskuria
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
        asdad
        </div>
      </section>
    </div>
  );
}
