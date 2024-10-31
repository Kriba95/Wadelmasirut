import PriceTag from "@/components/aa/Asa.js/PriceTag";
import HeaderOne from "@/components/aa/Asa.js/HeaderOne";
import HeaderTwo from "@/components/aa/Asa.js/HeaderTwo";
import HeaderThree from "@/components/aa/Asa.js/HeaderThree";
import Head from "@/components/head";
import WadelmasiruObj from "@/components/WadelmasiruObj";
import FooterIndex from "@/components/footer/FooterIndex";
import { useRouter } from "next/router";

const headerData = {
  title: "Wadelmasiru",
  description:
    "Tutustu Wadelmasirun hinnoitteluun eri verkkosivustojen ja verkkokauppojen kehittämispalveluista. Tarjoamme kilpailukykyiset hinnat ja kattavat palvelut, jotka parantavat liiketoimintaasi ja asiakaskokemustasi.",
  keywords:
    "hinnoittelu, kotisivut, verkkokauppa, sisällöntuotanto, hakukoneoptimointi, Wadelmasiru",
};

export default function Etusivu() {
  const router = useRouter();
  return (
    <>
      <Head props={headerData} />
      <div className="h-64 bg-black"> </div>
      <div className="">
        <WadelmasiruObj />
      </div>
      <div className="bg-black -mt-32">
        <div className="max-w-4xl pb-14 mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
          <div className="relative  pb-64 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h1 className="text-sm font-semibold text-white tracking-wide uppercase">
              Nettisivut yritykselle - Wadelmasiru
            </h1>
            <h2
              onClick={() => router.push("https://wadelmasiru.fi/ota-yhteytta")}
              className="text-4xl cursor-pointer ubuntu-bold font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl"
            >
              <span className="block xl:inline">{"Koodilla "}</span>
              <span className="block bg-gradient-to-r from-red-100 to-red-600 bg-clip-text text-transparent">
                Rakennamme{" "}
                <span className="bg-red-600 bg-clip-text text-transparent">
                  verkkosivustosi
                </span>
              </span>
            </h2>

            <p className="mt-12 text-1xl  md:text-2xl f sm:text-3xl font-extrabold text-white">
              Modernit ja käyttäjäystävälliset Verkkosivut juuri sinun
              tarpeisiisi
            </p>
            <p className="mt-5 text-lg text-gray-300">
              Etsitkö luotettavaa kumppania verkkosivustosi tai verkkokauppasi
              kehittämiseen? Me toteutamme sivustosi tai verkkokauppasi käyttäen
              uusimpia tekniikoita kuten React ja Next.js. Tarjoamme sinulle
              mahdollisuuden helposti muokata sivustosi sisältöä jälkikäteen,
              oli kyse sitten tekstin päivityksestä, kuvien vaihdosta tai uusien
              tuotteiden lisäämisestä verkkokauppaasi.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2"></div>
          </div>
        </div>{" "}
        <main className="relative">
          <PriceTag />
          <HeaderOne />
          <HeaderThree />
          <HeaderTwo />
        </main>
        {/* <FooterIndex /> */}
      </div>{" "}
      <div></div>{" "}
    </>
  );
}
