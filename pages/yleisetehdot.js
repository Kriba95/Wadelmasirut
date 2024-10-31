
import React from "react";
import PageSectionLite from "@/components/Content/PageSectionLite";
import Head from "@/components/head";


const headerData = {
  title: "Yleiset ehdot - Wadelmasiru",
  description: 'Lue Wadelmasirun yleiset ehdot, jotka koskevat verkkosivuston ja palvelujen käyttöä. Yleiset ehdot määrittelevät käyttöoikeuden, vastuukysymykset ja muut tärkeät tiedot.',
  keywords: 'yleiset ehdot, käyttöehdot, verkkosivuston käyttö, palveluehdot, vastuukysymykset, Wadelmasiru',
};

function Yleisetehdot() {
  const post = {
    transactionsTitle: "Yleiset ehdot",
    differenceTitle: "Yleiset ehdot",
    text: `
    <h2 class="text-2xl text-gray-900 font-bold mb-4">Yleiset ehdot</h2>

    <h3 class="text-xl text-gray-900 font-bold mb-2">1. Sopimuksen hyväksyminen</h3>
    <p class="mb-4">Käyttämällä Wadelmasiru-verkkosivustoa tai sen tarjoamia palveluja, hyväksyt nämä yleiset ehdot. Jos et hyväksy näitä ehtoja, älä käytä verkkosivustoa tai sen palveluja.</p>

    <h3 class="text-xl text-gray-900 font-bold mb-2">2. Palvelujen käyttö</h3>
    <p class="mb-4">Wadelmasiru tarjoaa palveluja, kuten verkkosivustojen suunnittelua ja kehittämistä. Käyttäjän on varmistettava, että kaikki käyttö on lakien ja sääntöjen mukaista, ja käyttäjä on vastuussa omista toimistaan.</p>

    <h3 class="text-xl text-gray-900 font-bold mb-2">3. Immateriaalioikeudet</h3>
    <p class="mb-4">Kaikki Wadelmasiru-verkkosivustolla tai sen palveluissa käytettävät materiaalit, mukaan lukien tekstit, kuvat, grafiikat ja ohjelmistot, ovat Wadelmasiru:n tai sen lisenssinantajien omaisuutta. Käyttäjällä ei ole oikeutta käyttää näitä materiaaleja ilman nimenomaista lupaa.</p>

    <h3 class="text-xl text-gray-900 font-bold mb-2">4. Vastuunrajoitus</h3>
    <p class="mb-4">Wadelmasiru ei ole vastuussa mahdollisista vahingoista, jotka johtuvat verkkosivuston tai sen palvelujen käytöstä tai käyttöoikeuden menetyksestä. Wadelmasiru ei takaa, että verkkosivusto on keskeytyksettömästi saatavilla tai virheettömästi toimiva.</p>

    <h3 class="text-xl text-gray-900 font-bold mb-2">5. Muutokset ja päivitykset</h3>
    <p class="mb-4">Wadelmasiru pidättää oikeuden muuttaa näitä yleisiä ehtoja milloin tahansa ilman erillistä ilmoitusta. Muutokset tulevat voimaan heti niiden julkaisemisen jälkeen verkkosivustolla. On käyttäjän vastuulla tarkistaa ehdot säännöllisesti.</p>

    <h3 class="text-xl text-gray-900 font-bold mb-2">6. Linkit kolmansien osapuolien sivustoille</h3>
    <p class="mb-4">Wadelmasiru voi sisältää linkkejä kolmansien osapuolien verkkosivustoille. Nämä linkit tarjotaan vain mukavuuden vuoksi, eikä Wadelmasiru ole vastuussa näiden verkkosivustojen sisällöstä tai tietosuojakäytännöistä.</p>

    <h3 class="text-xl text-gray-900 font-bold mb-2">7. Sovellettava laki</h3>
    <p class="mb-4">Näihin ehtoihin sovelletaan [maan nimi] lakia. Kaikki erimielisyydet, jotka liittyvät näihin ehtoihin tai verkkosivuston käyttöön, ratkaistaan [maan nimi] toimivaltaisissa tuomioistuimissa.</p>

    <h3 class="text-xl text-gray-900 font-bold mb-2">8. Yhteystiedot</h3>
    <p class="mb-4">Jos sinulla on kysyttävää näistä ehdoista tai tarvitset lisätietoja, ota meihin yhteyttä sähköpostitse osoitteeseen asiakaspalvelu@wadelmasiru.fi.</p>
    `,
};

  return (
    <>
      <Head props={headerData} />
      <PageSectionLite post={post} />
    </>
  );
}

export default Yleisetehdot;
