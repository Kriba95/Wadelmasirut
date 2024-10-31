import Head from "@/components/head";
import {
  InboxIcon,
  UsersIcon,
  ReplyIcon,
  EyeIcon,
  SearchIcon,
  SparklesIcon,
  TrashIcon,
  PencilAltIcon,
  DocumentReportIcon,
  ChatAltIcon,
  HeartIcon,
} from "@heroicons/react/outline";

import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

const features = [
  {
    name: "Kattava Sisällönhallinta",
    description:
      "Tarjoamme työkalut, joilla voit hallita sisältöäsi tehokkaasti ja joustavasti. Luo, muokkaa ja julkaise sisältöä helposti.",
    icon: InboxIcon,
  },
  {
    name: "Tiimiyhteistyö",
    description:
      "Tehosta tiimisi yhteistyötä sisällöntuotannossa. Määritä roolit, seuraa edistymistä ja paranna tuottavuutta.",
    icon: UsersIcon,
  },
  {
    name: "Laadunvarmistus",
    description:
      "Automaattiset työkalut auttavat varmistamaan, että sisältösi on virheetöntä ja laadukasta ennen julkaisua.",
    icon: TrashIcon,
  },
  {
    name: "SEO-Optimointi",
    description:
      "Hyödynnä yksinkertaista Markdown-syntaksia sisällön nopeaan ja tehokkaaseen muotoiluun.",
    icon: SearchIcon,
  },
  {
    name: "Edistynyt Raportointi",
    description:
      "Paranna sisältösi näkyvyyttä hakukoneissa sisäänrakennettujen SEO-työkalujen avulla, jotka optimoivat avainsanoja ja metatietoja",
    icon: DocumentReportIcon,
  },
  {
    name: "Tallennetut Vastaukset",
    description:
      "Käytä esivalmisteltuja vastauksia nopeuttamaan asiakaskyselyihin vastaamista ja parantaaksesi asiakaspalvelua.",
    icon: ReplyIcon,
  },
  {
    name: "Kommentointiominaisuudet",
    description:
      "Integroitu kommentointijärjestelmä parantaa tiimin sisäistä viestintää ja yhteistyötä sisällön parissa.",
    icon: ChatAltIcon,
  },
  {
    name: "Asiakasyhteydet",
    description:
      "Rakennamme vahvoja asiakassuhteita tarjoamalla asiakkaille relevanttia ja arvokasta sisältöä.",
    icon: HeartIcon,
  },
];

const headerData = {
  title: "Sisällöntuotanto - Wadelmasiru",
  description:
    "Wadelmasiru tarjoaa tehokasta sisällöntuotantoa, joka hyödyntää uusinta teknologiaa ja luovaa ajattelua. Tarjoamme kohdennettua sisältöä, visuaalista sisältöä ja innovatiivisia työkaluja, jotka parantavat sisällönhallintaa ja SEO-optimointia.",
  keywords:
    "sisällöntuotanto, kohdennettu sisältö, visuaalinen sisältö, sisällönhallinta, SEO-optimointi, Wadelmasiru, digitoimisto",
};

export default function Example() {
  return (
    <>
      <Head props={headerData} />
      <div className="bg-white">
        <main>
          {/* Hero section */}
          <div className="relative">
            <div className="absolute inset-x-0  bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl pt-16 mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="https://res.cloudinary.com/deo7pv2rv/image/upload/f_auto,q_auto/v1/1wademasiru/lw7xvhxzol7mtkkr7tp5"
                    // src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-indigo-800 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">
                      Tehokas sisällöntuotanto
                    </span>
                    <span className="block text-indigo-200">
                      {" "}
                      Avain menestykseen{" "}
                    </span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                    Hyödynnämme uusinta teknologiaa ja luovaa ajattelua.
                    Tuloksena on laadukasta ja vaikuttavaa sisältöä.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
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
            </div>
          </div>

          {/* Logo Cloud */}
          {/* <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
              LUOTETTAVA YLI 5 PIENYRITYKSEN KESKUUDESSA
            </p>
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                  alt="Tuple"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                  alt="Mirage"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                  alt="StaticKit"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                  alt="Transistor"
                />
              </div>
              <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                  alt="Workcation"
                />
              </div>
            </div>
          </div>
        </div> */}

          {/* Alternating Feature Sections */}
          <div className="relative pt-16 pb-32 overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
            />
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
                        Kohdennettu sisältö markkinoinnin ytimessä
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        Kohdennettu sisältö on keskeinen tekijä markkinoinnin
                        menestyksessä. Tuntemalla yleisönsä ja sen tarpeet
                        yritykset voivat luoda sisältöä, joka resonoi paremmin
                        ja tuottaa parempia tuloksia. Personoitu sisältö, joka
                        vastaa käyttäjän toiveisiin ja kysymyksiin, parantaa
                        käyttäjäkokemusta ja sitoutumista. Analytiikan avulla
                        voidaan seurata käyttäjäkäyttäytymistä ja mukauttaa
                        sisältöä vastaamaan tarkemmin heidän odotuksiaan, mikä
                        johtaa parempaan asiakastyytyväisyyteen ja
                        konversioihin.
                      </p>
                      <div className="mt-6"></div>
                    </div>
                  </div>
                  <div className="mt-8 border-t border-gray-200 pt-6"></div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                  <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                    <img
                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://res.cloudinary.com/deo7pv2rv/image/upload/v1720693167/t39cfd3yfp1twvwiqfdr.png"
                      alt="Interface design"
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
                        Visuaalinen sisältö ja sen vaikutus
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        Visuaalisella sisällöllä on suuri merkitys
                        nykyaikaisessa sisällöntuotannossa. Kuvat, videot ja
                        infografiikat voivat välittää viestin tehokkaammin ja
                        houkuttelevammin kuin pelkkä teksti. Visuaalinen sisältö
                        kiinnittää huomion ja voi tehdä monimutkaisista
                        tiedoista helpommin ymmärrettäviä. Lisäksi visuaalinen
                        sisältö on usein jaettavampaa sosiaalisessa mediassa,
                        mikä lisää brändin näkyvyyttä ja sitoutumista.
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
                      src="https://res.cloudinary.com/deo7pv2rv/image/upload/v1720692546/szaabatvdvghuzs537d7.jpg"
                      alt="Customer profile user interface"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient Feature Section */}
          <div className="bg-gradient-to-r from-gray-900 to-indigo-700">
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Innovatiiviset ratkaisut digitaaliseen sisällönhallintaan
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-purple-200">
                Tarjoamme innovatiivisia työkaluja, jotka tehostavat
                sisällönhallintaprosessejasi ja parantavat tuottavuutta.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <div>
                      <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h3 className="text-lg font-medium text-white">
                        {feature.name}
                      </h3>
                      <p className="mt-2 text-base text-purple-200">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>{" "}
    </>
  );
}
