import Link from "next/link";

export default function Esimerkki() {
    return (
      <div className="pb-16 bg-black overflow-hidden  ">
        <div className="max-w-7xl mx-auto px-4  space-y-8 sm:px-6 lg:px-8">
          <div className="text-base max-w-prose py-12 mx-auto lg:max-w-none">
            <h2 className="text-base text-gray-200 pt-24 font-semibold tracking-wide uppercase">Räätälöidyt verkkosivut ja verkkokaupat</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
              Modernit ja käyttäjäystävälliset ratkaisut juuri sinun tarpeisiisi
            </p>
          </div>
          <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
            <p className="text-lg text-gray-200">
              Etsitkö luotettavaa kumppania verkkosivustosi tai verkkokauppasi kehittämiseen? Me toteutamme sivustosi tai verkkokauppasi käyttäen uusimpia tekniikoita kuten React ja Next.js. Tarjoamme sinulle mahdollisuuden helposti muokata sivustosi sisältöä jälkikäteen, oli kyse sitten tekstin päivityksestä, kuvien vaihdosta tai uusien tuotteiden lisäämisestä verkkokauppaasi.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="relative z-10">
              <div className="prose prose-indigo text-gray-200 mx-auto lg:max-w-none">
                <p>
                  Tarjoamme asiakkaillemme räätälöityjä ratkaisuja, jotka sopivat täydellisesti heidän liiketoimintansa tarpeisiin. Oli kyseessä sitten pieni yritys tai jo vakiintunut toimija, meiltä saat sivuston tai verkkokaupan, joka ei ainoastaan näytä upealta vaan myös toimii tehokkaasti.
                </p>
                <ul>
                  <li>Laadukas suunnittelu ja toteutus</li>
                  <li>Helppo käyttää ja ylläpitää</li>
                  <li>SEO-optimoidut ratkaisut, jotka auttavat sinua löytymään paremmin verkosta</li>
                </ul>
                <p>
                  Ota yhteyttä ja keskustellaan, miten voimme auttaa sinua saavuttamaan tavoitteesi verkossa!
                </p>
                <h3>Olemme täällä auttamassa</h3>
                <p>
                  Meidän tehtävämme on varmistaa, että sinulla on käytössäsi paras mahdollinen verkkosivusto tai verkkokauppa, joka tukee liiketoimintaasi kasvussa.
                </p>
              </div>
              <div className="mt-10 pb-24 flex text-base max-w-prose mx-auto lg:max-w-none">
                <div className="rounded-md shadow">
                  <Link style={{
                      boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                    }}
                    href="/tarjouspyynto"
                    className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                  >
                    Ota yhteyttä myyntiin
                  </Link>
                </div>
           
              </div>
            </div>
          
          </div>
        </div>
      </div>
    )
  }
  