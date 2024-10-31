import PageSection from "@/components/Content/PageSection";
import Head from "@/components/head";

const headerData = {
  title: "Blogi Ratkaisut - Wadelmasiru",
  description:
    "Tarjoamme kattavia blogiratkaisuja, jotka kattavat suunnittelun, kehityksen, optimoinnin ja ylläpidon. Käytämme moderneja työkaluja kuten PHP ja Bootstrap varmistaaksemme, että saat parhaan mahdollisen lopputuloksen blogillesi.",
  keywords:
    "blogiratkaisut, blogin kehitys, WordPress teemat, PHP, Bootstrap, sisällön optimointi, verkkosivuston ylläpito, blogin suunnittelu",
};

/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  const post = {
    transactionsTitle: "Täydellinen Verkkosivusto Sinulle",
    differenceTitle: "Pienten Muutosten Tuki",
    differenceText:
      "Panosta laadukkaaseen sisältöön, tekniseen optimointiin ja tehokkaaseen markkinointiin varmistaaksesi verkkokauppasi pitkäaikaisen menestyksen.",
    authorName: "Wadelmasiru",
    text: `<p>Me tarjoamme kattavia blogi ratkaisuja, jotka vastaavat kaikkiin tarpeisiisi. Olipa kyseessä uusi blogi tai olemassa olevan blogin parantaminen, tiimimme asiantuntijat ovat valmiina auttamaan. Tarjoamme kokonaisvaltaista palvelua, joka kattaa suunnittelun, kehityksen, optimoinnin ja ylläpidon. Käytämme moderneja työkaluja, kuten PHP ja Bootstrap, varmistaaksemme, että saat parhaan mahdollisen lopputuloksen.</p>

    <h2 class="text-gray-900 text-xl font-bold mt-6 mb-2">Blogi Ratkaisut – Suunnittelu ja Kehitys</h2>
    <p>Suunnittelemme ja kehitämme blogisi yksilöllisten tarpeidesi mukaan. Ymmärrämme, että jokainen blogi on ainutlaatuinen ja tarvitsee oman ilmeensä ja toiminnallisuutensa. Siksi tarjoamme räätälöityjä ratkaisuja, jotka on suunniteltu vastaamaan erityisesti sinun tarpeitasi ja toiveitasi.</p>

    <h2 class="text-gray-900 text-xl font-bold mt-6 mb-2">PHP ja Bootstrap – Tehokkaat Työkalut Blogisi Kehityksessä</h2>
    <p>Käytämme PHP ja Bootstrapia blogien kehityksessä. Nämä modernit työkalut tarjoavat lukuisia etuja, jotka auttavat meitä luomaan nopeita, responsiivisia ja käyttäjäystävällisiä blogeja.</p>

    <h3 class="text-gray-900 text-lg font-bold mt-4 mb-2">PHP</h3>
    <p>PHP on yksi suosituimmista ohjelmointikielistä verkkosivustojen kehityksessä, ja se on erityisen hyvin yhteensopiva WordPressin kanssa. Sen etuja ovat muun muassa:</p>
    <ul class="list-disc pl-6">
        <li>Joustavuus: PHP on erittäin monipuolinen ja mahdollistaa monenlaisten toimintojen toteuttamisen.</li>
        <li>Yhteensopivuus: PHP toimii saumattomasti WordPressin kanssa, mikä tekee teemojen kehittämisestä tehokasta ja sujuvaa.</li>
        <li>Yhteisö: Laaja ja aktiivinen yhteisö tarjoaa runsaasti resursseja ja tukea.</li>
    </ul>

    <h3 class="text-gray-900 text-lg font-bold mt-4 mb-2">Bootstrap</h3>
    <p>Bootstrap on suosittu avoimen lähdekoodin käyttöliittymäkehys, joka helpottaa responsiivisten ja visuaalisesti houkuttelevien verkkosivustojen luomista. Sen etuja ovat muun muassa:</p>
    <ul class="list-disc pl-6">
        <li>Responsiivisuus: Bootstrapin avulla blogisi näyttää hyvältä kaikilla laitteilla.</li>
        <li>Nopeus: Bootstrapin esityylitetyt komponentit nopeuttavat kehitysprosessia.</li>
        <li>Mukautettavuus: Helppo mukauttaa ja laajentaa oman brändin mukaiseksi.</li>
    </ul>

    <h2 class="text-gray-900 text-xl font-bold mt-6 mb-2">Pienten Muutosten Tuki</h2>
    <p>Ymmärrämme, että joskus tarvitset vain pieniä muutoksia tai päivityksiä blogiisi. Olipa kyseessä tekstimuutos, kuvien päivittäminen tai uuden ominaisuuden lisääminen, tiimimme on täällä auttamassa. Tarjoamme joustavaa ja nopeaa tukea varmistaaksemme, että blogisi pysyy ajan tasalla ja vastaa tarpeitasi.</p>

    <h3 class="text-gray-900 text-lg font-bold mt-4 mb-2">Esimerkkejä Pienistä Muutoksista:</h3>
    <ul class="list-disc pl-6">
        <li>Sisällön Päivitykset: Tekstin, kuvien tai videoiden lisääminen ja muokkaaminen.</li>
        <li>Ulkoasun Muutokset: Pienten tyylimuutosten tekeminen, kuten värien tai fonttien vaihtaminen.</li>
        <li>Toiminnalliset Muutokset: Uusien ominaisuuksien tai widgetien lisääminen, kuten sosiaalisen median syötteet tai uutiskirjeiden tilauslomakkeet.</li>
        <li>SEO-Päivitykset: Meta-tietojen, avainsanojen ja muiden SEO-elementtien päivittäminen.</li>
    </ul>

    <h2 class="text-gray-900 text-xl font-bold mt-6 mb-2">Asiakaslähtöinen Lähestymistapa</h2>
    <p>Asiakkaidemme tyytyväisyys on meille ensiarvoisen tärkeää. Siksi panostamme vahvasti asiakaslähtöiseen lähestymistapaan kaikessa toiminnassamme. Työskentelemme tiiviissä yhteistyössä asiakkaidemme kanssa varmistaaksemme, että heidän toiveensa ja tarpeensa täyttyvät.</p>
`,
    helpTitle: "Olemme täällä auttaaksemme",
    cta1Text: "Artikkelit",
    cta2Text: "Lue lisää",
    authorName: "Wadelmasiru",
    authorTitle: "Wadelmasiru",
    nothanks: true,
  };

  return (
    <>
      <Head props={headerData} />

      <div className="relative bg-gray-800 pt-16 overflow-hidden sm:pt-16 ">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-base font-semibold tracking-wider text-indigo-500 uppercase">
              {" "}
              Blogit
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Blogi Ratkaisut
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-200">
              Temme WordPress-teemoja ja tarjoamme apua pienissä muutoksissa.
              Olipa kyseessä yksinkertainen päivitys tai monimutkaisempi
              mukautus, asiantuntijamme ovat valmiina auttamaan.
            </p>
          </div>
          <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
            <img
              className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="  shadow-xl  ">
        <div className="-mt-16">
          <PageSection post={post} />
        </div>
      </div>
    </>
  );
}
