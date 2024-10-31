
import React from "react";
import PageSectionLite from "@/components/Content/PageSectionLite";
import Head from "@/components/head";

const headerData = {
  title: "Tietosuojaseloste - Wadelmasiru",
  description: 'Wadelmasiru tietosuojaseloste. Tässä asiakirjassa kerromme, miten käsittelemme ja suojaamme henkilökohtaisia tietojasi. Lue lisää tietosuojakäytännöistämme ja oikeuksistasi.',
  keywords: 'tietosuojaseloste, tietosuoja, henkilötiedot, tietosuojakäytännöt, Wadelmasiru, GDPR, tietosuojalainsäädäntö',
};


function Tietosuojaseloste() {
  const post = {
    transactionsTitle: "Tietosuojaseloste",
    differenceTitle: "Tietosuojaseloste",
    text: `
    <h2 class="text-2xl text-gray-900 font-bold mb-4">Tietosuojaseloste</h2>
    
    <p class="mb-4">Wadelmasiru, joka sijaitsee osoitteessa [https://wadelmasiru.fi](https://wadelmasiru.fi), pitää tietosuojaa etusijalla. Tämä tietosuojaseloste selittää, millaisia tietoja keräämme ja tallennamme sekä miten käytämme niitä.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">1. Henkilötietojen kerääminen ja käyttö</h3>
    <p class="mb-4">Henkilötietojen keräämisemme ja käyttämisemme perusteet riippuvat keräämämme tiedon tyypistä ja siitä, miten keräämme tiedot. Wadelmasiru voi kerätä tietoja seuraavista syistä:
    - Wadelmasiru tarvitsee tietoja sopimuksen täyttämiseksi.
    - Olet antanut Wadelmasirulle luvan käyttää tietoja.
    - Henkilötietojen käsittely on Wadelmasiru:n oikeutettu etu.
    - Wadelmasiru tarvitsee noudattaa lakia.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">2. Tietojen säilyttäminen</h3>
    <p class="mb-4">Wadelmasiru säilyttää henkilötietojasi vain niin kauan kuin on tarpeen tämän tietosuojaselosteen mukaisiin tarkoituksiin. Käytämme tietoja myös laillisten velvoitteidemme täyttämiseen, riitojen ratkaisemiseen ja sääntöjemme täytäntöönpanoon.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">3. EU:n yleinen tietosuoja-asetus (GDPR)</h3>
    <p class="mb-4">Jos olet Euroopan talousalueen (ETA) asukas, sinulla on tietyt tietosuojan oikeudet. Jos haluat tietää, mitä henkilötietoja meillä on sinusta tai haluat, että tiedot poistetaan järjestelmistämme, ota yhteyttä meihin. Tietyissä tilanteissa sinulla on seuraavat oikeudet:
    - Oikeus käyttää, päivittää tai poistaa tiedot, joita meillä on sinusta.
    - Oikeus oikaisuun.
    - Oikeus vastustaa.
    - Oikeus rajoittamiseen.
    - Oikeus tietojen siirrettävyyteen.
    - Oikeus peruuttaa suostumus.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">4. Lokitiedostot</h3>
    <p class="mb-4">Wadelmasiru käyttää lokitiedostoja vieraillessaan verkkosivustolla. Näihin tiedostoihin tallennetaan IP-osoitteet, selaintyyppi, Internet-palveluntarjoaja (ISP), päivämäärä ja aikaleima, viittaus-/poistumissivut ja mahdollisesti klikkien määrä. Näitä tietoja käytetään trendien analysoimiseen, verkkosivuston hallintaan, käyttäjien liikkeiden seuraamiseen ja demografisten tietojen keräämiseen. Tiedot eivät ole henkilökohtaisesti tunnistettavissa.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">5. Evästeet ja verkkosignaalit</h3>
    <p class="mb-4">Wadelmasiru käyttää evästeitä verkkosivustolla. Evästeet tallentavat tietoja, kuten vieraiden mieltymyksiä ja verkkosivustolla vieraillut sivut. Näitä tietoja käytetään käyttäjäkokemuksen optimointiin mukauttamalla verkkosivuston sisältöä vieraiden selain- tai muiden tietojen mukaan.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">6. Kolmannen osapuolen evästeet</h3>
    <p class="mb-4">Google on yksi kolmannen osapuolen mainostajistamme ja käyttää DART-evästeitä mainosten näyttämiseen käyttäjille, jotka ovat vieraillut Wadelmasirussa ja muilla verkkosivustoilla. Käyttäjät voivat kieltäytyä DART-evästeiden käytöstä vierailemalla Googlen mainos- ja sisältöverkon tietosuojakäytännöissä osoitteessa [https://policies.google.com/technologies/ads](https://policies.google.com/technologies/ads)</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">7. Mainostajien tietosuojakäytännöt</h3>
    <p class="mb-4">Sivustollamme mainostavat voivat käyttää evästeitä ja verkkosignaaleja. Mainostajamme on listattu alla. Jokaisella mainostajallamme on oma tietosuojakäytäntö, ja olemme lisänneet linkit heidän tietosuojakäytäntöihinsä alla:
    - Google: [https://policies.google.com/technologies/ads](https://policies.google.com/technologies/ads)</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">8. Kolmannen osapuolen tietosuojakäytännöt</h3>
    <p class="mb-4">Wadelmasirun tietosuojakäytäntö ei koske muita mainostajia tai verkkosivustoja. Suosittelemme tutustumaan näiden kolmansien osapuolien mainosverkkopalveluiden tietosuojakäytäntöihin saadaksesi tarkempaa tietoa heidän käytännöistään ja ohjeistaan opt-out-vaihtoehdoista.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">9. Lasten tietosuoja</h3>
    <p class="mb-4">Meille on tärkeää suojata lasten yksityisyys verkossa. Kannustamme vanhempia ja huoltajia seuraamaan, osallistumaan ja/tai valvomaan lasten verkkotoimintaa.</p>
    <p class="mb-4">Wadelmasiru ei tietoisesti kerää henkilökohtaisia tietoja alle 18-vuotiailta. Jos uskot, että lapsesi on antanut tällaisia tietoja verkkosivustollamme, ota meihin heti yhteyttä sähköpostitse osoitteeseen asiakaspalvelu@wadelmasiru.fi, ja teemme parhaamme poistaaksemme tiedot rekisteristämme.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">10. Verkkosivuston tietosuojakäytäntö</h3>
    <p class="mb-4">Tietosuojakäytäntömme koskee vain verkkotoimintaa ja on voimassa verkkosivustollamme ja niihin liittyvissä tiedoissa, joita keräämme tai jotka jaetaan Wadelmasirulle. Tämä käytäntö ei koske tietoja, joita kerätään offline-tilassa tai muilla kanavilla.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">11. Suostumus</h3>
    <p class="mb-4">Käyttämällä verkkosivustoamme hyväksyt tämän tietosuojakäytännön ja suostut sen ehtoihin.</p>`,
};

  return (
    <>
      <Head props={headerData} />
      <PageSectionLite post={post} />
    </>
  );
}

export default Tietosuojaseloste;
