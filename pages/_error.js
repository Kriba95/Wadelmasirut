// /pages/404.js

import Head from "@/components/head";
import React from "react";

const headerData = {
  title: "404 - Sivua ei löydy - Wadelmasiru",
  description:
    "Hupsista! Valitettavasti etsimääsi sivua ei löydy. Tarkista linkki tai siirry etusivulle löytääksesi tarvitsemasi tiedot.",
  keywords: "404, sivua ei löydy, virhe, Wadelmasiru",
  index: true,
};

const NotFoundPage = ({ teksti }) => {
  return (
    <>
      {" "}
      <Head props={headerData} />
      <div className="flex flex-col">
        <main className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 my-auto py-16 sm:py-32">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
              404 Sivua ei löydy
            </p>

            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Hupsista keikkaa!
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Hupsista, sivua ei löytynyt. Kukakohan meni poistamaan sen?
            </p>
            <div className="mt-6">
              <a
                href="/"
                className="text-base font-medium text-indigo-600 hover:text-indigo-500"
              >
                Mene Etusivulle, ei täällä muuta ole{" "}
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default NotFoundPage;
