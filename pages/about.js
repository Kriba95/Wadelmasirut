import Head from "@/components/head";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
const headerData = {
  title: "Meistä - Wadelmasiru",
  description: "Tutustu Wadelmasirun tiimiin ja ota yhteyttä asiakaspalveluumme tai myyntitiimiimme. Saat lisätietoja palveluistamme ja voit pyytää tarjouksen.",
  keywords: "Wadelmasiru, asiakaspalvelu, myynti, yhteystiedot, digitaalinen markkinointi, kotisivut, verkkokaupat",
};

const contactDetails = [
  {
    name: "Asiakaspalvelu",
    email: "asiakaspalvelu@wadelmasiru.fi",
    telephone: "+358 404 601285",
  },
  {
    name: "Myynti",
    email: "asiakaspalvelu@wadelmasiru.fi",
    telephone: "+358 404 466450",
  },
];
const locations = [
  {
    city: "Kivistö",
    address: ["Keltasafiirinpolku 3 D", "01700 Vantaa"],
  },
];

export default function Example() {
  return (
    <>
      {" "}
      <Head props={headerData} />
      <div className="min-h-screen">
        <div className="relative overflow-hidden">
          <main>
            <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                    <div className="lg:py-24">
                      <p
                        href="#"
                        className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                      >
                        <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                          Meistä{" "}
                        </span>
                        <Link href="/tarjouspyynto" className="ml-4 text-sm">
                          Tarjouspyyntö
                        </Link>
                        <ChevronRightIcon
                          className="ml-2 w-5 h-5 text-gray-500"
                          aria-hidden="true"
                        />
                      </p>
                      <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                        <span className="block">Wadelmasiru</span>
                        {/* <span className="block text-indigo-400"></span> */}
                      </h1>
                      <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        Haluatko tietää, miten voimme auttaa sinua? Ota
                        rohkeasti yhteyttä puhelimitse tai sähköpostilla –
                        vastaamme nopeasti ja autamme kaikissa kotisivuihin ja
                        digitaaliseen markkinointiin liittyvissä kysymyksissä.{" "}
                      </p>
                      <div className="mt-10 sm:mt-12">
                        <form
                          action="#"
                          className="sm:max-w-xl sm:mx-auto lg:mx-0"
                        >
                          <div className="sm:flex">
                            <div className="min-w-0 flex-1">
                              <label htmlFor="email" className="sr-only">
                                Sähköpostiosoite
                              </label>
                              <input
                                id="email"
                                type="email"
                                placeholder="Syötä sähköpostiosoitteesi"
                                className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                              />
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                              <button
                                type="submit"
                                className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                              >
                                Lähetä
                              </button>
                            </div>
                          </div>
                          <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                            Otamme sinuun yhteyttä sähköpostitse. Tutustu myös
                            meidän
                            <a
                              href="/yleisetehdot"
                              className="font-medium text-white"
                            >
                              {" "}
                              käyttöehtoihimme
                            </a>
                            .
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                      {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                      <img
                        className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        src="/kuva.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white">
              <div className="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="divide-y divide-warm-gray-200">
                  <section
                    className="lg:grid lg:grid-cols-3 lg:gap-8"
                    aria-labelledby="contact-heading"
                  >
                    <h2
                      id="contact-heading"
                      className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl"
                    >
                      Digitoimisto Wadelmasiru
                    </h2>
                    <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                      {contactDetails.map((item) => (
                        <div key={item.name}>
                          <h3 className="text-lg font-medium text-warm-gray-900">
                            {item.name}
                          </h3>
                          <dl className="mt-2 text-base text-warm-gray-500">
                            <div>
                              <dt className="sr-only">Email</dt>
                              <dd>{item.email}</dd>
                            </div>
                            <div className="mt-1">
                              <dt className="sr-only">Phone number</dt>
                              <dd>{item.telephone}</dd>
                            </div>
                          </dl>
                        </div>
                      ))}
                    </div>
                  </section>
                  <section
                    className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8"
                    aria-labelledby="location-heading"
                  >
                    <h2
                      id="location-heading"
                      className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl"
                    >
                      Sijainti
                    </h2>
                    <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                      {locations.map((location) => (
                        <div key={location.city}>
                          <h3 className="text-lg font-medium text-warm-gray-900">
                            {location.city}
                          </h3>
                          <div className="mt-2 text-base text-warm-gray-500 space-y-1">
                            {location.address.map((line) => (
                              <p key={line}>{line}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
