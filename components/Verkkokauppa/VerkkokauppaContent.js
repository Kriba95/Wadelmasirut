import { CameraIcon } from "@heroicons/react/solid";

export default function Example() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Tutustu verkkokaupan rakentamiseen
            </h2>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
          
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="https://res.cloudinary.com/deo7pv2rv/image/upload/v1720693167/t39cfd3yfp1twvwiqfdr.png"
                    alt=""
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">Couponizza | Wadelmasiru</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 text-base max-w-prose mx-auto lg:max-w-none">
            <div className="mt-8 lg:mt-0 text-base max-w-prose mx-auto lg:max-w-none">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Alkukartoitus
              </h3>
              <p className="text-gray-500">
                Kartoitamme asiakkaan tarpeet, tavoitteet ja toiveet. Laadimme
                yhdessä suunnitelman verkkokaupan rakenteesta, sisällöistä ja
                ulkoasusta.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-2 mt-4 lg:mt-8">
                Suunnitteluvaihe
              </h3>
              <p className="text-gray-500">
                Suunnittelemme verkkokaupalle visuaalisesti houkuttelevan ja
                käyttäjäystävällisen ilmeen. Määrittelemme tarvittavat toiminnot
                ja käyttöliittymäratkaisut asiakkaan tarpeiden pohjalta.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-2 mt-4 lg:mt-8">
                Ulkoasuehdotus
              </h3>
              <p className="text-gray-500">
                Esitämme ensimmäisen ulkoasuehdotuksen asiakkaalle PDF-muodossa.
                Asiakas antaa palautetta ja tekee tarvittavat muutokset.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-2 mt-4 lg:mt-8">
                Verkkokaupan rakentaminen
              </h3>
              <p className="text-gray-500">
                Kehitämme ja rakennamme verkkokaupan hyväksytyn suunnitelman
                perusteella. Tarjoamme asiakkaalle demoversion testattavaksi ja
                hyväksyttäväksi.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-2 mt-4 lg:mt-8">
                Julkaisu ja käyttökoulutus
              </h3>
              <p className="text-gray-500">
                Julkaisemme verkkokaupan tuotannossa. Järjestämme
                käyttökoulutuksen, jossa opastamme verkkokaupan käytön perusteet
                ja hallintatoiminnot.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-2 mt-4 lg:mt-8">
                Jatkokehitys ja markkinointi
              </h3>
              <p className="text-gray-500">
                Tarjoamme jatkokehityspalveluita tarpeen mukaan, kuten uusien
                ominaisuuksien integrointia. Huolehdimme verkkokaupan
                markkinoinnista ja optimoinnista, kuten hakukoneoptimoinnista ja
                digitaalisesta markkinoinnista.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
