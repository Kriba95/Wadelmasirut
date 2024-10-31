import React from "react";
import { getStaticPaths, getStaticProps } from "@/lib/laskuri";
import NotFound from "@/components/NotFound/NotFound";
import Verkkokauppa from "@/components/Subsivut/Verkkokauppa";
import Kotisivut from "@/components/Subsivut/Kotisivut";
import { GlobeAltIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Head from "@/components/head";

export { getStaticPaths, getStaticProps };
const headerData = {
  title: "Kotisivujen hintalaskuri - Wadelmasiru",
  description: "Tarkista nopeasti projektisi kustannukset käyttämällä helppokäyttöistä hintalaskuriamme.",
  keywords: "hintalaskuri, kustannukset, arvio, Wadelmasiru",
  url: "https://wadelmasiru.fi/hintalaskuri",
  ogImage: "/asa.png",
};
function Index({ page }) {
  if (!page || page.length === 0) {
    return (
      <NotFound teksti="Hupsista, sivua ei löytynyt. Kukakohan meni poistamaan sen?" />
    );
  }

  let sivu = page[0]?.page;

  switch (sivu) {
    case "verkkokauppa":
      return <Verkkokauppa data={page[0]?.data} />;
    case "kotisivut":
      return (
        <>
      <Head props={headerData} />
      <div className="py-16 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
              <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto"></div>

              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  Hintalaskuri
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Arvio kustannuksista
                </p>
              <div className=" text-gray-500">
                Tarkista nopeasti projektisi kustannukset käyttämällä
                helppokäyttöistä hintalaskuriamme.
              </div>
              </div>
            </div>{" "}
          </div>
          <Kotisivut data={page[0]?.data} />;
        </>
      );
    default:
      return (
        <NotFound teksti="Hupsista, sivua ei löytynyt. Kukakohan meni poistamaan sen?" />
      );
  }
}

export default Index;
