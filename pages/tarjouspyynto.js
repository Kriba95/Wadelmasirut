
import { Fragment, useRef } from "react";

import LaskuriLomake from "@/components/Laskuri/LaskuriLomake";
import Head from "@/components/head";

const headerData = {
  title: "Pyydä tarjous - Wadelmasiru",
  description: 'Pyydä räätälöity tarjous Wadelmasirulta projektillesi. Täytä lomake ja kerro tarpeistasi, niin tarjoamme sinulle parhaan mahdollisen ratkaisun. Saat myös lisätietoja palveluistamme ja ehdotuksistamme.',
  keywords: 'tarjouspyyntö, räätälöity tarjous, verkkosivut, verkkokauppa, digitoimisto, Wadelmasiru, palvelutarjous',
};
export default function Tarjouspyynto() {
  const scrollRef = useRef(null);

  return (
<>
    <Head props={headerData} />

    <div className="relative min-vh-90 bg-gray-800 overflow-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
             <LaskuriLomake scrollRef={scrollRef} />
          </div>
        </main>
      </div>
    </div></>
  );
}
