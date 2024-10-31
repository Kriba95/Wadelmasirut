import React from "react";
import PageSectionLite from "@/components/Content/PageSectionLite";
import Head from "@/components/head";

const headerData = {
  title: "Evästekäytäntö - Wadelmasiru",
  description: 'Wadelmasiru:n evästekäytäntö selittää, miten käytämme evästeitä verkkosivustollamme parantaaksemme käyttäjäkokemusta ja verkkosivuston toimivuutta. Opi, miten voit hallita evästeitä ja mitä kolmansien osapuolien evästeet tarkoittavat.',
  keywords: 'evästekäytäntö, evästeet, Wadelmasiru, tietosuoja, verkkosivuston toiminta',
};


function TermsConditions() {
  const post = {
    transactionsTitle: "Evästekäytäntö",
    differenceTitle: "Evästekäytäntö",
    text: `
    <h2 class="text-2xl text-gray-900 font-bold mb-4">Evästekäytäntö</h2>
    
    <p class="mb-4">Wadelmasiru käyttää evästeitä parantaakseen verkkosivustonsa käyttäjäkokemusta. Tämä evästekäytäntö selittää, mitä evästeet ovat, miten käytämme niitä, ja miten voit hallita niitä.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">Mitä evästeet ovat?</h3>
    <p class="mb-4">Evästeet ovat pieniä tiedostoja, jotka tallennetaan käyttäjän laitteelle verkkosivuston käynnin aikana. Ne auttavat verkkosivustoja muistamaan käyttäjän toiminnot ja asetukset, jotta käyttäjä ei joudu syöttämään niitä uudelleen jokaisella vierailulla.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">Miten käytämme evästeitä?</h3>
    <p class="mb-4">Wadelmasiru käyttää evästeitä seuraaviin tarkoituksiin:</p>
    <ul class="list-disc pl-4 mb-4">
        <li><strong>Toiminnallisuus:</strong> Jotkin evästeet ovat välttämättömiä verkkosivuston perustoimintojen, kuten kirjautumisen ja asetusten muistamisen, kannalta.</li>
        <li><strong>Analytiikka:</strong> Käytämme evästeitä kerätäksemme tietoja siitä, miten käyttäjät vuorovaikuttavat verkkosivuston kanssa, kuten kävijämäärät ja sivustolla vietetty aika. Tämä auttaa meitä parantamaan sivuston toimivuutta ja sisältöä.</li>
        <li><strong>Markkinointi:</strong> Evästeitä käytetään myös näyttämään kohdennettua mainontaa ja seuraamaan mainoskampanjoiden tehokkuutta.</li>
    </ul>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">Evästeiden hallinta</h3>
    <p class="mb-4">Voit hallita evästeiden käyttöä verkkoselaimesi asetuksista. Useimmat selaimet sallivat evästeiden poistamisen tai estämisen. Huomaa, että evästeiden poistaminen tai estäminen voi vaikuttaa verkkosivuston toimintaan ja käytettävyyteen.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">Kolmansien osapuolien evästeet</h3>
    <p class="mb-4">Verkkosivustollamme voi olla myös kolmansien osapuolien asettamia evästeitä, kuten mainosverkostojen tai analytiikkatyökalujen evästeitä. Emme hallitse näitä evästeitä, ja niiden käyttöön sovelletaan kyseisten kolmansien osapuolien evästekäytäntöjä.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">Evästekäytännön muutokset</h3>
    <p class="mb-4">Voimme päivittää tätä evästekäytäntöä aika ajoin. Suosittelemme tarkistamaan tämän sivun säännöllisesti mahdollisten muutosten varalta. Käyttämällä verkkosivustoamme hyväksyt muutokset evästekäytännössämme.</p>
    
    <h3 class="text-xl text-gray-900 font-bold mb-2">Yhteystiedot</h3>
    <p class="mb-4">Jos sinulla on kysyttävää tästä evästekäytännöstä tai tarvitset lisätietoja, ota meihin yhteyttä sähköpostitse osoitteeseen <a href="mailto:asiakaspalvelu@wadelmasiru.fi">asiakaspalvelu@wadelmasiru.fi</a>.</p>
    `,
};


  return (
    <>
      <Head props={headerData} />
      <PageSectionLite post={post} />
    </>
  );
}

export default TermsConditions;
