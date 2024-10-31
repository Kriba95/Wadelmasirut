import React from "react";
import PageSectionLite from "@/components/Content/PageSectionLite";
import Head from "@/components/head";

const headerData = {
  title: "Sopimusehdot - Wadelmasiru",
  description: 'Lue Wadelmasirun sopimusehdot, jotka koskevat palvelujemme käyttöä. Tässä asiakirjassa määritellään maksaminen, lisätyö, aikataulut ja muut tärkeät ehdot.',
  keywords: 'sopimusehdot, käyttöehdot, palveluehdot, maksaminen, lisätyö, aikataulut, Wadelmasiru',
};

function TermsConditions() {
  const post = {
    transactionsTitle: "Sopimusehdot",
    differenceTitle: "Sopimusehdot",
    text: `
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">1. Maksaminen</h3>
    <p class="mb-4">Projektin alkaessa maksetaan 50% kokonaishinnasta etukäteen. Loppumaksu (50%) suoritetaan projektin valmistuttua, riippumatta julkaisuajankohdasta. Laskutus tapahtuu verkkolaskuna tai maksuportaalissa. Hinnat sisältävät arvonlisäveron (ALV) 25,5%.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">2. Lisätyö ja muutokset</h3>
    <p class="mb-4">Lisätyöstä, joka ylittää tarjouksessa sovitut muokkauskierrokset, veloitetaan 30€/h (sis. ALV 25,5%). Uusista toiminnoista, joita ei ole alkuperäisessä sopimuksessa kuvattu, tehdään erillinen arviointi ja tarjotaan erikseen.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">3. Aikataulut ja materiaalit</h3>
    <p class="mb-4">Projektin aikarajoissa pysyminen edellyttää, että asiakas antaa säännöllisesti palautetta ja toimittaa pyydetyt materiaalit ajoissa.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">4. Omistajuus ja julkaisu</h3>
    <p class="mb-4">Kun projekti on valmis ja loppumaksu on maksettu, projektin omistajuus siirtyy asiakkaalle, ja sivusto julkaistaan sovitun aikataulun mukaisesti.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">5. Virheiden korjaus</h3>
    <p class="mb-4">Virheet sivustossa korjataan ilmaiseksi, mikäli niistä ilmoitetaan kahdenvuoden (24 kuukauden) kuluessa projektin valmistumisesta tai koko määräaikaisen sopimuksen mukaan, riippuen siitä, kumpi on pidempi.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">6. Käyttöoikeudet</h3>
    <p class="mb-4">Asiakas saa rajattoman käyttöoikeuden kaikkiin projekteissa tuotettuihin materiaaleihin, kuten kuviin, grafiikoihin, teksteihin ja videoihin, julkaisuajankohdasta riippumatta.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">7. Markkinointioikeudet</h3>
    <p class="mb-4">Toimittajalla on oikeus käyttää asiakkaan projektia markkinointitarkoituksiin ja esitellä sitä esimerkiksi portfoliossa.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">8. Laillisuus</h3>
    <p class="mb-4">Asiakas vastaa siitä, että julkaistava palvelu on lainmukainen.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">9. Projektin keskeytys ja peruutus</h3>
    <p class="mb-4">Mikäli asiakas tai toimittaja ei ole tyytyväinen työn laatuun tai yhteistyöhön, projekti voidaan keskeyttää ennen julkaisua, ja asiakkaalle palautetaan koko laskutettu summa. Tällöin asiakkaan käyttöoikeus materiaaleihin lakkaa. Jos projekti peruutetaan syistä, jotka eivät liity toimittajaan, asiakas maksaa vain 50% projektin kokonaishinnasta.</p>`,
  };

  return (
    <>
      <Head props={headerData} />
      <PageSectionLite post={post} />
    </>
  );
}

export default TermsConditions;
