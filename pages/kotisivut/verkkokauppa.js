/* This example requires Tailwind CSS v2.0+ */
import Head from "@/components/head";
import VerkkokauppaContent from "@/components/Verkkokauppa/VerkkokauppaContent";
import { InboxIcon, SparklesIcon } from "@heroicons/react/outline";
import Link from "next/link";

const headerData = {
  title: "Verkkokauppa Ratkaisut – Wadelmasiru",
  description: "Rakennamme verkkokauppoja, jotka eivät ainoastaan myy, vaan luovat kokemuksia. Verkkokaupparatkaisumme sisältävät kaiken tarvittavan, kuten tuotekatalogin hallinnan, maksujärjestelmien integraatiot ja automaattisen laskutuksen.",
  keywords: "verkkokauppa, verkkokaupparatkaisut, tuotekatalogi, maksujärjestelmät, Wadelmasiru",
  url: "https://wadelmasiru.fi/kotisivut/verkkokauppa",
  ogImage: "/asa.png", // Esimerkki kuva, vaihda tarvittaessa
};

export default function Verkkokauppa() {
  return (
    <>      <Head props={headerData} />

      <main>
        <section
    style={{
      background:
        "linear-gradient(to bottom, #889ca7, #edf6fd), linear-gradient(to right, transparent, #aabcc6)",
      backgroundBlendMode: "screen",
    }}
          className="lg:relative"
        >
          <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div         className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl ">
                <span className="block xl:inline">Verkkokauppa</span>{" "}
                <span className="block bg-gradient-to-r from-gray-900 to-indigo-600 bg-clip-text text-transparent pb-3  xl:inline">
                  ratkaisut yritykselle
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-600 sm:text-xl md:mt-5 md:max-w-3xl">
                Rakennamme verkkokauppoja, jotka eivät ainoastaan myy, vaan
                luovat kokemuksia. Verkkokaupparatkaisumme sisältävät kaiken
                tarvittavan, kuten tuotekatalogin hallinnan, maksujärjestelmien
                integraatiot ja automaattisen laskutuksen.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                <Link
                        href="/tarjouspyynto"
                        className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                      >
                        Pyydä hintatarjous
                      </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="/wadelmasiruheader.png"
              alt=""
            />
          </div>
        </section>{" "}
        <VerkkokauppaContent />
        <section className="relative bg-white pt-16 pb-32 overflow-hidden">
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                      <InboxIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Räätälöidyt ratkaisut
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Ymmärrämme, että jokainen liiketoiminta on erilainen.
                      Tarjoamme räätälöityjä digitaalisia ratkaisuja, jotka
                      vastaavat juuri sinun tarpeitasi. Käytämme uusinta
                      teknologiaa varmistaaksemme, että ratkaisumme ovat
                      innovatiivisia ja toimivia.
                    </p>
                    <div className="mt-6">
                 
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6"></div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://res.cloudinary.com/deo7pv2rv/image/upload/f_auto,q_auto/v1/1wademasiru/mlclpk5ucyigxnkrx13q"
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                      <SparklesIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Responsiivinen suunnittelu
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Huolehdimme siitä, että sivustosi näkyy moitteettomasti
                      kaikilla laitteilla, olipa kyseessä sitten tietokone,
                      tabletti tai älypuhelin. Responsiivinen suunnittelu
                      varmistaa, että käyttäjäkokemus on saumaton ja miellyttävä
                      riippumatta siitä, mitä laitetta asiakkaasi käyttävät.
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/tarjouspyynto"
                        className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                      >
                        Pyydä hintatarjous
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://res.cloudinary.com/deo7pv2rv/image/upload/f_auto,q_auto/v1/1wademasiru/ml3tnzqpvfiskhaduncg"
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}