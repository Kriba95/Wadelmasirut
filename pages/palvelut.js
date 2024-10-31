import Calendar from "@/components/Calendar/Calendar";
import Head from "@/components/head";
import { useRouter } from "next/router";

const palvelut = [
  {
    id: 1,
    palvelu: "Kotisivut yritykselle",
    emphasis: "Toteutamme",
    teksti:
      " Next.js:llä dynaamisia ja nopeasti latautuvia verkkosivustoja. Nämä sivustot eivät vain näytä upeilta, vaan myös toimivat tehokkaasti, mikä parantaa käyttäjäkokemusta ja hakukonenäkyvyyttä.",
    href: "/kotisivut/nettisivut",
  },
  {
    id: 2,
    palvelu: "Verkkokaupan toteuttaminen",
    emphasis: "Rakennamme",
    teksti:
      "verkkokauppoja, jotka tekevät ostokokemuksesta sujuvan ja mukavan. Verkkokaupparatkaisumme sisältävät kaiken tarvittavan, kuten tuoteluettelon hallinnan, maksujärjestelmien integraatiot.",
    href: "/kotisivut/verkkokauppa",
  },
  {
    id: 3,
    palvelu: "Tuotehaku",
    emphasis: "Tehokas tuotehaku",
    teksti:
      "Hyödynnämme Typesenseä, joka mahdollistaa reaaliaikaisen, instantsearch-tyylisen hakukokemuksen, joka on nopea, tarkka ja helposti muokattavissa.",
    href: "/kotisivut/nettisivut",
  },
  {
    id: 4,
    palvelu: "Hakukonemainonta",
    emphasis: "Asiakastyytyväisyys",
    teksti:
      "osoittaa laadun. Tehosta verkkonäkyvyyttäsi Google-mainonnalla ja tavoita oikea kohderyhmä kustannustehokkaasti.",
    href: "/kotisivut/nettisivut",
  },
  {
    id: 5,
    palvelu: "Graafinen suunnittelu",
    emphasis: "Ratkaistut ongelmat",
    teksti:
      "kertovat tehokkuudesta. Erottuva visuaalinen ilme on avain menestykseen. Luomme vaikuttavan visuaalisen identiteetin brändillesi.",
    href: "/kotisivut/nettisivut",
  },
];
const headerData = {
  title: "Palvelut - Wadelmasiru",
  description:
    "Wadelmasiru tarjoaa räätälöityjä digiratkaisuja, jotka parantavat asiakaskokemusta ja tehostavat liiketoimintaasi. Meiltä saat huippunopeat Next.js-verkkosivut, intuitiiviset verkkokaupat, tehokkaat tuotehaku- ja hakukonemainontaratkaisut sekä erottuvan graafisen suunnittelun.",
  keywords:
    "digiratkaisut, Next.js, verkkosivut, verkkokauppa, tuotehaku, hakukonemainonta, graafinen suunnittelu, Wadelmasiru",
};

export default function Palvelut() {
  const router = useRouter();
  return (
    <>
      <Head props={headerData} />
      {/* <Calendar /> */}
      <div className="relative bg-gray-900">
        <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
          <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
              <img
                className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                src="/kuva.png"
                alt="Ihmisiä työskentelemässä kannettavilla tietokoneilla"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
              />
            </div>
          </div>
        </div>
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid"
          style={{ gridTemplateColumns: "77% 23%" }}
        >
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h2 className="text-sm font-semibold text-indigo-300 tracking-wide uppercase">
              Palvelut
            </h2>
            <p
              onClick={() => router.push("https://wadelmasiru.fi/ota-yhteytta")}
              className="cursor-pointer mt-3 text-3xl font-extrabold text-white"
            >
              Räätälöidyt digiratkaisut, jotka parantavat asiakaskokemusta ja
              tehostavat liiketoimintaasi
            </p>
            <p className="mt-5 text-lg text-gray-300">
              Tarjoamme ainutlaatuisia ratkaisuja, kuten huippunopeat ja
              responsiiviset Next.js-verkkosivut, jotka optimoivat
              käyttäjäkokemuksen ja maksimoivat hakukonenäkyvyyden.
              Suunnittelemme myös intuitiivisia verkkokauppoja, joissa kaikki
              tarvittavat toiminnot on otettu huomioon.
            </p>
   

            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
              {palvelut.map((item) => (
                <p
                  className="cursor-pointer"
                  onClick={() => router.push("/" + item.href)}
                  key={item.id}
                >
                  <span className=" block text-2xl font-bold text-white">
                    {item.palvelu}
                  </span>
                  <span className="mt-1 block text-base text-gray-300">
                    <span className="font-medium text-white">
                      {item.emphasis}
                    </span>{" "}
                    {item.teksti}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
