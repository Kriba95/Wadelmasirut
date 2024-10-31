import LaskuriHeader from "@/components/aa/Asa.js/LaskuriHeader";
import ItseLaskuris from "../Laskuri/ItseLaskuris";
import ItseLaskurisYks from "../Laskuri/ItseLaskurisYks";
import { useState, useEffect, Fragment } from "react";
import {
  GlobeAltIcon,
  ShoppingCartIcon,
  XIcon,
} from "@heroicons/react/outline";
import { CheckIcon } from "@heroicons/react/solid";
import SelectedProducts from "./SelectedProducts";
import SelectedProductsMobil from "./SelectedProductsMobil";
const loput = [
  {
    name: "Sivuston ulkoasu",
    description:
      "Valitse sivustosi ulkoasun suunnitteluun sopiva vaihtoehto alla olevista kategorioista.",
    select: true,

    sub: [
      {
        name: "Valmisulkoasu",
        description:
          "Käytä valmista ulkoasua, joka on optimoitu hakukoneita varten ja nopea ottaa käyttöön. Tämä vaihtoehto sopii pienemmille yrityksille ja yksityishenkilöille, jotka haluavat nopean ja kustannustehokkaan ratkaisun.",
        icon: "GlobeAltIcon",
        price: 0,
      },
      {
        name: "Mukautettu valmisulkoasu",
        description:
          "Valitse valmisulkoasu, jota voidaan mukauttaa yrityksesi brändin mukaisesti. Tämä tarjoaa nopean käyttöönoton mahdollisuuden, mutta sisältää myös räätälöintiä.",
        icon: "GlobeAltIcon",
        price: 100,
      },
      {
        name: "Figma-malli",
        description:
          "Suunnittele ulkoasu käyttäen Figma-työkalua, joka mahdollistaa yksityiskohtaisen ja ainutlaatuisen ulkoasun. Tämä vaihtoehto sopii yrityksille, jotka haluavat erottua ja tarjota käyttäjilleen ensiluokkaisen käyttökokemuksen.",
        icon: "GlobeAltIcon",
        price: 200,
      },
    ],
    icon: "GlobeAltIcon",
  },
  {
    name: "Hakukoneoptimointi",
    description: "Paranna sivustosi näkyvyyttä hakukoneissa.",
    select: true,

    sub: [
      {
        name: "Perus SEO",
        description:
          "Perustason hakukoneoptimointi, joka parantaa sivuston näkyvyyttä.",
        icon: "GlobeAltIcon",
        price: 0,
      },
      {
        name: "Laajennettu SEO",
        description:
          "Kehittyneempi hakukoneoptimointi, joka sisältää syvällisempiä optimointeja. Mm. JSON Schema -merkinnät, sivuston nopeuden parannukset, sisällön optimointi käyttäjäkokemuksen perusteella, kattava tekninen SEO-auditointi, mobiilioptimointi, paikallinen SEO, ja linkkien rakennusstrategiat. Tavoitteemme on parantaa sivustosi näkyvyyttä ja hakukonesijoituksia kokonaisvaltaisesti.",

        icon: "GlobeAltIcon",
        price: 90,
      },
    ],
    icon: "GlobeAltIcon",
  },
  {
    name: "Sosiaalisen median hallinta",
    description:
      "Hallinnoi ja kasvata yrityksesi läsnäoloa sosiaalisessa mediassa.",
    sub: [
      {
        name: "Peruspaketti",
        description:
          "Perustason sosiaalisen median hallintapaketti, Facebook, Instagram, X.",
        icon: "GlobeAltIcon",
        price: 0,
      },
      {
        name: "Custom",
        description:
          "Perustason sosiaalisen median hallintapaketti pienille yrityksille.",
        icon: "GlobeAltIcon",
        price: 300,
      },
    ],
    icon: "GlobeAltIcon",
  },

  {
    name: "Mainoskampanjat",
    description: "Tehosta markkinointia mainoskampanjoilla.",
    sub: [
      {
        name: "Google-mainonta",
        description: "Mainosta Googlen hakutuloksissa.",
        icon: GlobeAltIcon,
        price: false,
      },
      {
        name: "Some-mainonta",
        description: "Mainosta sosiaalisessa mediassa.",
        icon: GlobeAltIcon,
        price: false,
      },
      {
        name: "Display-mainonta",
        description: "Mainosta kuvamainoksilla verkossa.",
        icon: GlobeAltIcon,
        price: false,
      },
    ],
    icon: GlobeAltIcon,
  },
  {
    name: "Graafinen suunnittelu",
    description: "Luovat ja ammattimaiset graafiset suunnittelupalvelut.",
    sub: [
      {
        name: "Ai Logo-suunnittelu",
        description:
          "Ainutlaatuinen ja ammattimainen logo, joka edustaa yritystäsi.",
        icon: "GlobeAltIcon",
        price: 0,
      },
      {
        name: "Logo-suunnittelu",
        description:
          "Ainutlaatuinen ja ammattimainen logo, joka edustaa yritystäsi.",
        icon: "GlobeAltIcon",
        price: 300,
      },

      {
        name: "Täydellinen brändäys",
        description:
          "Kattava brändäyspaketti, joka sisältää logon, värit, typografian ja muita brändielementtejä.",
        icon: "GlobeAltIcon",
        price: 3000,
      },
    ],
    icon: "GlobeAltIcon",
  },
  {
    name: "Verkkosivujen ylläpito",
    description: "Pidä sivustosi ajan tasalla ja turvallisena.",
    select: true,
    sub: [
      {
        name: "Perusylläpito",
        description:
          "Perustason ylläpitopalvelu, joka sisältää säännölliset päivitykset ja varmuuskopiot.",
        icon: "GlobeAltIcon",
        price: "200kk",
      },
      {
        name: "Laajennettu ylläpito",
        description:
          "Kehittyneempi ylläpitopalvelu, joka sisältää nopeusoptimoinnin ja tietoturvatarkastukset.",
        icon: "GlobeAltIcon",
        price: "200kk",
      },
      {
        name: "Mukautettu ylläpito",
        description:
          "Täysin räätälöity ylläpitopalvelu, joka vastaa yrityksesi erityistarpeisiin.",
        icon: "GlobeAltIcon",
        price: "200kk",
      },
    ],
    icon: "GlobeAltIcon",
  },

  {
    name: "Käyttäjäanalytiikka",
    description:
      "Seuraa käyttäjien toimintaa ja optimoi sivustosi käyttökokemusta.",
    sub: [
      {
        name: "Google Analytics",
        description: "Käytä Google Analyticsia tarkkailemaan kävijätilastoja.",
        icon: GlobeAltIcon,
        price: 250,
      },
    ],
    icon: GlobeAltIcon,
  },
];

const extra = [
  {
    name: "Sivuston Laajuus",
    description:
      "Millaiset sivut vastaavat tarpeitasi? Valitse sopivin vaihtoehto alla olevista kategorioista.",
    select: true,
    sub: [
      {
        name: "Yhden sivun sivut",
        description:
          "Onepage-sivut ovat yksinkertaisia ja elegantteja ratkaisuja, joissa kaikki tärkeä tieto löytyy yhdeltä sivulta. Tämä vaihtoehto on ihanteellinen pienille yrityksille, freelancereille ja henkilökohtaisille portfoliosivuille.",
        icon: "GlobeAltIcon",
        price: 0,
      },
      {
        name: "Pieni sivusto",
        description:
          "Stattiset sivut, jotka sisältävät yhteydenottolomakkeen ja perustiedot yrityksestä. Tämä vaihtoehto sopii yrityksille, jotka haluavat esitellä palveluitaan ja tarjota asiakkaille helpon tavan ottaa yhteyttä.",
        icon: "GlobeAltIcon",
        price: 0,
      },
      {
        name: "Keskikokoinen sivusto",
        description:
          "Stattiset sivut, jotka sisältävät yhteydenottolomakkeen, tietoa yrityksestä, ja muita tärkeitä osioita, kuten palvelut, referenssit ja blogi. Tämä vaihtoehto sopii kasvaville yrityksille, jotka tarvitsevat enemmän tilaa sisällölle.",
        icon: "GlobeAltIcon",
        price: 250,
      },
      {
        name: "Dynaamiset ja laajenevat sivustot",
        description:
          "Tämä vaihtoehto tarjoaa täyden hallinnan sivustosi sisällön päivityksiin ja laajennuksiin. Dynaamiset sivut ovat ihanteellisia yrityksille, jotka tarvitsevat joustavuutta ja mahdollisuutta kasvattaa sivustoaan ajan myötä. Sisältää CMS-järjestelmän, käyttäjätilit ja monimutkaisempia toiminnallisuuksia.",
        icon: "GlobeAltIcon",
        price: 500,
      },
    ],
    icon: "GlobeAltIcon",
  },
  ...loput,
];

const extraEpremiem = [
  {
    name: "Sivuston Laajuus",
    description:
      "Millaiset sivut vastaavat tarpeitasi? Valitse sopivin vaihtoehto alla olevista kategorioista.",
    select: true,
    sub: [
      {
        name: "Yhden sivun sivut",
        description:
          "Onepage-sivut ovat yksinkertaisia ja elegantteja ratkaisuja, joissa kaikki tärkeä tieto löytyy yhdeltä sivulta. Tämä vaihtoehto on ihanteellinen pienille yrityksille, freelancereille ja henkilökohtaisille portfoliosivuille.",
        icon: "GlobeAltIcon",
        price: 0,
      },
      {
        name: "Pieni sivusto",
        description:
          "Stattiset sivut, jotka sisältävät yhteydenottolomakkeen ja perustiedot yrityksestä. Tämä vaihtoehto sopii yrityksille, jotka haluavat esitellä palveluitaan ja tarjota asiakkaille helpon tavan ottaa yhteyttä.",
        icon: "GlobeAltIcon",
        price: 0,
      },
      {
        name: "Keskikokoinen sivusto",
        description:
          "Stattiset sivut, jotka sisältävät yhteydenottolomakkeen, tietoa yrityksestä, ja muita tärkeitä osioita, kuten palvelut, referenssit ja blogi. Tämä vaihtoehto sopii kasvaville yrityksille, jotka tarvitsevat enemmän tilaa sisällölle.",
        icon: "GlobeAltIcon",
        price: 0,
      },
      {
        name: "Dynaamiset ja laajenevat sivustot",
        description:
          "Tämä vaihtoehto tarjoaa täyden hallinnan sivustosi sisällön päivityksiin ja laajennuksiin. Dynaamiset sivut ovat ihanteellisia yrityksille, jotka tarvitsevat joustavuutta ja mahdollisuutta kasvattaa sivustoaan ajan myötä. Sisältää CMS-järjestelmän, käyttäjätilit ja monimutkaisempia toiminnallisuuksia.",
        icon: "GlobeAltIcon",
        price: 0,
      },
    ],
    icon: "GlobeAltIcon",
  },
  ...loput,
];

const extrapremiem = [
  {
    name: "Sivuston Laajuus",
    description:
      "Millaiset sivut vastaavat tarpeitasi? Valitse sopivin vaihtoehto alla olevista kategorioista.",
    select: true,
    sub: [
      {
        name: "Yhden sivun sivut",
        description:
          "Onepage-sivut ovat yksinkertaisia ja elegantteja ratkaisuja, joissa kaikki tärkeä tieto löytyy yhdeltä sivulta. Tämä vaihtoehto on ihanteellinen pienille yrityksille, freelancereille ja henkilökohtaisille portfoliosivuille.",
        icon: "GlobeAltIcon",
        price: 0,
      },
      {
        name: "Pieni sivusto",
        description:
          "Stattiset sivut, jotka sisältävät yhteydenottolomakkeen ja perustiedot yrityksestä. Tämä vaihtoehto sopii yrityksille, jotka haluavat esitellä palveluitaan ja tarjota asiakkaille helpon tavan ottaa yhteyttä.",
        icon: "GlobeAltIcon",
        price: 0,
      },
      {
        name: "Keskikokoinen sivusto",
        description:
          "Stattiset sivut, jotka sisältävät yhteydenottolomakkeen, tietoa yrityksestä, ja muita tärkeitä osioita, kuten palvelut, referenssit ja blogi. Tämä vaihtoehto sopii kasvaville yrityksille, jotka tarvitsevat enemmän tilaa sisällölle.",
        icon: "GlobeAltIcon",
        price: 0,
      },
      {
        name: "Dynaamiset ja laajenevat sivustot",
        description:
          "Tämä vaihtoehto tarjoaa täyden hallinnan sivustosi sisällön päivityksiin ja laajennuksiin. Dynaamiset sivut ovat ihanteellisia yrityksille, jotka tarvitsevat joustavuutta ja mahdollisuutta kasvattaa sivustoaan ajan myötä. Sisältää CMS-järjestelmän, käyttäjätilit ja monimutkaisempia toiminnallisuuksia.",
        icon: "GlobeAltIcon",
        price: 250,
      },
    ],
    icon: "GlobeAltIcon",
  },
  ...loput,
];

const extro = [
  {
    name: "Sivuston Laajuus",
    description:
      "Millaiset sivut vastaavat tarpeitasi? Valitse sopivin vaihtoehto alla olevista kategorioista.",
    select: true,
    sub: [
      {
        name: "Yhden sivun sivut",
        description:
          "Onepage-sivut ovat yksinkertaisia ja elegantteja ratkaisuja, joissa kaikki tärkeä tieto löytyy yhdeltä sivulta. Tämä vaihtoehto on ihanteellinen pienille yrityksille, freelancereille ja henkilökohtaisille portfoliosivuille.",
        icon: "GlobeAltIcon",
        price: 0,
      },
      {
        name: "Pieni sivusto",
        description:
          "Stattiset sivut, jotka sisältävät yhteydenottolomakkeen ja perustiedot yrityksestä. Tämä vaihtoehto sopii yrityksille, jotka haluavat esitellä palveluitaan ja tarjota asiakkaille helpon tavan ottaa yhteyttä.",
        icon: "GlobeAltIcon",
        price: 0,
      },
      {
        name: "Keskikokoinen sivusto",
        description:
          "Stattiset sivut, jotka sisältävät yhteydenottolomakkeen, tietoa yrityksestä, ja muita tärkeitä osioita, kuten palvelut, referenssit ja blogi. Tämä vaihtoehto sopii kasvaville yrityksille, jotka tarvitsevat enemmän tilaa sisällölle.",
        icon: "GlobeAltIcon",
        price: 250,
      },
      {
        name: "Dynaamiset ja laajenevat sivustot",
        description:
          "Tämä vaihtoehto tarjoaa täyden hallinnan sivustosi sisällön päivityksiin ja laajennuksiin. Dynaamiset sivut ovat ihanteellisia yrityksille, jotka tarvitsevat joustavuutta ja mahdollisuutta kasvattaa sivustoaan ajan myötä. Sisältää CMS-järjestelmän, käyttäjätilit ja monimutkaisempia toiminnallisuuksia.",
        icon: "GlobeAltIcon",
        price: 500,
      },
    ],
    icon: "GlobeAltIcon",
  },
  ...loput,
];

let peruspaketti = {
  name: "Peruspaketti",
  description:
    "Perus kotisivut, joka sopii pienille yrityksille ja aloitteleville verkkokaupoille. Sisältää kaiken oleellisen eli avaimet käteen -periaatteella",

  icon: GlobeAltIcon,
  price: 250,
  extra: extra,
};

const extrapienet = [
  {
    name: "Lomakkeen lisäys",
    description:
      "Millaiset sivut vastaavat tarpeitasi? Valitse sopivin vaihtoehto alla olevista kategorioista.",
    sub: [
      {
        name: "Ota yhteyttä lomake",
        description:
          "Kustomoitu yhteydenottolomake, johon voi syöttää ja lähettää viestejä sisältäen Google Captchan suojauksen.",

        icon: "GlobeAltIcon",
        price: 10,
      },
    ],
    icon: "GlobeAltIcon",
  },
  {
    name: "Navigointivalikon muokkaus",
    description:
      "Lisää tai poista valikkokohteita parantaaksesi käyttäjäkokemusta. Responsiivinen navigointivalikko, joka toimii suurissa ja mobiilinäytöissä.",

    sub: [
      {
        name: "Navbar",
        description:
          "Muokkaa navigointipalkkia vastaamaan yrityksesi tarpeita ja tyyliä.",
        icon: "GlobeAltIcon",
        price: 50,
      },
      {
        name: "Header",
        description:
          "Optimoi sivuston yläpalkki käyttäjäystävällisemmäksi ja houkuttelevammaksi.",
        icon: "GlobeAltIcon",
        price: 30,
      },
      {
        name: "Footer",
        description: "Paranna sivuston alapalkkia ja sen toiminnallisuutta.",
        icon: "GlobeAltIcon",
        price: 35,
      },
    ],
    icon: "GlobeAltIcon",
  },
  {
    name: "Napin lisäys",
    description:
      "Millaiset sivut vastaavat tarpeitasi? Valitse sopivin vaihtoehto alla olevista kategorioista.",

    sub: [
      {
        name: "Call to Action (CTA) -napin lisääminen",
        description:
          "Lisää tehokas CTA-nappi ohjaamaan käyttäjiä toivottuun toimintaan.",
        icon: "GlobeAltIcon",
        price: 90,
      },
      {
        name: "Sosiaalisen median jakonapit",
        description:
          "Lisää sosiaalisen median jakonapit, jotta käyttäjät voivat helposti jakaa sisältöä.",
        icon: "GlobeAltIcon",
        price: 50,
      },
      {
        name: "Ostoskoriin lisäämisen nappi",
        description: "Lisää 'Lisää ostoskoriin' -nappi verkkokauppasivulle.",
        icon: "GlobeAltIcon",
        price: 100,
      },
      {
        name: "Palaa ylös -nappi",
        description:
          "Lisää 'Palaa ylös' tai 'Palaa kohtaan' -nappi, joka helpottaa sivun selaamista.",
        icon: "GlobeAltIcon",
        price: 10,
      },
      {
        name: "Lataa lisää -nappi",
        description:
          "Lisää 'Lataa lisää' -nappi, joka tuo lisää sisältöä näkyville sivua lataamatta uudelleen.",
        icon: "GlobeAltIcon",
        price: 70,
      },
    ],
    icon: "GlobeAltIcon",
  },
  {
    name: "Sivun optimointi",
    description:
      "Optimoi sivustosi paremmin hakukoneita ja käyttäjäkokemusta varten.",
    sub: [
      {
        name: "Sivun otsikon muutos",
        description:
          "Päivitä sivun otsikko vastaamaan paremmin sisältöä tai hakukoneoptimointia.",
        icon: "GlobeAltIcon",
        price: 30,
      },
      {
        name: "Meta-kuvauksen optimointi",
        description:
          "Paranna meta-kuvausta, jotta se houkuttelee enemmän klikkauksia hakutuloksissa.",
        icon: "GlobeAltIcon",
        price: 40,
      },
      {
        name: "Kuvien optimointi",
        description: "Pienennä kuvien kokoa ja paranna niiden latausnopeutta.",
        icon: "GlobeAltIcon",
        price: 50,
      },
      {
        name: "Alt-tekstien lisääminen",
        description:
          "Lisää alt-tekstit kuviin parantaaksesi saavutettavuutta ja SEO.",
        icon: "GlobeAltIcon",
        price: 20,
      },
    ],
    icon: "GlobeAltIcon",
  },
  {
    name: "Sisällön hallinta",
    description: "Pidä sivustosi sisältö ajankohtaisena ja kiinnostavana.",
    sub: [
      {
        name: "Sisällön päivitys",
        description: "Päivitä vanhentunut sisältö ajankohtaisemmaksi.",
        icon: "GlobeAltIcon",
        price: 60,
      },
      {
        name: "Uuden blogikirjoituksen lisääminen",
        description: "Julkaise uusi artikkeli blogiin.",
        icon: "GlobeAltIcon",
        price: 80,
      },
      {
        name: "Linkkien tarkistus ja korjaus",
        description: "Tarkista rikkinäiset linkit ja korjaa ne.",
        icon: "GlobeAltIcon",
        price: 70,
      },
      {
        name: "Navigointivalikon muokkaus",
        description:
          "Lisää tai poista valikkokohteita parantaaksesi käyttäjäkokemusta.",
        icon: "GlobeAltIcon",
        price: 90,
      },
    ],
    icon: "GlobeAltIcon",
  },
  {
    name: "UI/UX Parannukset",
    description: "Paranna sivustosi käytettävyyttä ja ulkoasua.",
    sub: [
      {
        name: "Väri- ja fonttimuutokset",
        description: "Muuta sivuston värejä ja fontteja brändin mukaisiksi.",
        icon: "GlobeAltIcon",
        price: 50,
      },
      {
        name: "Kuvakarusellin lisääminen",
        description: "Lisää kuvakaruselli parantamaan visuaalista ilmettä.",
        icon: "GlobeAltIcon",
        price: 120,
      },
      {
        name: "Asiakastestimonialien lisääminen",
        description: "Lisää asiakaspalautteet sivustolle.",
        icon: "GlobeAltIcon",
        price: 60,
      },
      {
        name: "FAQ-osion luominen",
        description: "Luo usein kysyttyjen kysymysten osio.",
        icon: "GlobeAltIcon",
        price: 80,
      },
    ],
    icon: "GlobeAltIcon",
  },
  {
    name: "SEO ja Analytiikka",
    description:
      "Paranna sivustosi näkyvyyttä hakukoneissa ja seuraa käyttäjädataa.",
    sub: [
      {
        name: "SEO-ystävällisten URL-osoitteiden optimointi",
        description: "Päivitä URL-osoitteet hakukoneystävällisiksi.",
        icon: "GlobeAltIcon",
        price: 100,
      },
      {
        name: "Sivustokartan (sitemap) luominen",
        description:
          "Luo ja lisää sivustokartta parantamaan hakukonenäkyvyyttä.",
        icon: "GlobeAltIcon",
        price: 70,
      },
      {
        name: "Google Analyticsin asennus",
        description: "Asenna Google Analytics seuraamaan kävijätilastoja.",
        icon: "GlobeAltIcon",
        price: 50,
      },
      {
        name: "404-virhesivun mukauttaminen",
        description: "Suunnittele mukautettu 404-virhesivu.",
        icon: "GlobeAltIcon",
        price: 40,
      },
    ],
    icon: "GlobeAltIcon",
  },
  {
    name: "Turvallisuus ja Ylläpito",
    description: "Pidä sivustosi turvallisena ja ajan tasalla.",
    sub: [
      {
        name: "SSL-sertifikaatti",
        description:
          "Turvaa sivustosi SSL-sertifikaatilla, joka suojaa käyttäjätietoja salatulla yhteydellä.",
        icon: "GlobeAltIcon",
        price: 10,
      },
      {
        name: "WWW-ohjaukset",
        description:
          "Ohjaa kävijät automaattisesti www-osoitteeseen varmistaaksesi yhtenäisen käyttäjäkokemuksen.",
        icon: "GlobeAltIcon",
        price: 10,
      },
      {
        name: "DNS-asetusten optimointi",
        description:
          "Optimoi DNS-asetukset parantamaan sivuston suorituskykyä ja käytettävyyttä.",
        icon: "GlobeAltIcon",
        price: 10,
      },
      {
        name: "Sivuston varmuuskopiointi",
        description: "Ota varmuuskopio sivustosta.",
        icon: "GlobeAltIcon",
        price: 10,
      },
      {
        name: "Tietoturvan parantaminen",
        description: "Päivitä tietoturva-asetuksia suojellaksesi sivustoa.",
        icon: "GlobeAltIcon",
        price: 80,
      },
      {
        name: "Käyttäjätilien hallinta",
        description: "Luo ja hallitse käyttäjätilejä sivustolla.",
        icon: "GlobeAltIcon",
        price: 50,
      },
      {
        name: "Kommentointijärjestelmän lisääminen",
        description:
          "Lisää kommentointimahdollisuus blogiin tai artikkeleihin.",
        icon: "GlobeAltIcon",
        price: 30,
      },
    ],
    icon: "GlobeAltIcon",
  },
  {
    name: "Uusien ominaisuuksien lisääminen",
    description:
      "Laajenna sivustosi toiminnallisuuksia ja paranna käyttäjäkokemusta.",
    sub: [
      {
        name: "Videon upottaminen",
        description: "Upota videoita sivustolle parantamaan sisältöä.",
        icon: "GlobeAltIcon",
        price: 90,
      },
      {
        name: "Monikielisyysominaisuuden lisääminen",
        description: "Lisää monikielisyystuki sivustolle.",
        icon: "GlobeAltIcon",
        price: 200,
      },
      {
        name: "Google Maps -kartta",
        description: "Lisää Google Maps -kartta näyttämään yrityksen sijainti.",
        icon: "GlobeAltIcon",
        price: 50,
      },
      {
        name: "Chatbotin integrointi",
        description: "Lisää chatbot parantamaan asiakaspalvelua.",
        icon: "GlobeAltIcon",
        price: 150,
      },
    ],
    icon: "GlobeAltIcon",
  },
];
const medialinkspienet = [
  {
    name: "Yksittäiset päivitykset ",
    description:
      "Tarjoamme päivityksiä nykyisiin sivustoihin, jotka pitävät sivustosi optimoituna.",
    icon: GlobeAltIcon,
    mediadata: [
      {
        name: "Sivuston päivitys",
        description:
          "Pienet päivitykset ovat nopeita ja kustannustehokkaita parannuksia sivustoosi, jotka pitävät sen ajan tasalla ja optimoituna",
        icon: GlobeAltIcon,
        price: 30,
        extra: extrapienet,
      },
      {
        name: "Tuntityö",
        description:
          "Tarjoamme tuntiveloitteista työtä eri ohjelmointikielillä ja teknologioilla.",
        icon: GlobeAltIcon,
        price: false,
        extra: [
          {
            name: "Koodaus WWW-sivut",
            description:
              "Millaiset sivut vastaavat tarpeitasi? Valitse sopivin vaihtoehto alla olevista kategorioista.",
            select: true,
            sub: [
              {
                name: "WordPress koodaus",
                description:
                  "Räätälöimme ja konfiguroimme WordPress-sivustoja tarpeidesi mukaan.",
                icon: "GlobeAltIcon",
                price: "30tt",
              },
              {
                name: "Next.js sovelluskehitys",
                description:
                  "Kehitämme nopeita ja tehokkaita web-sovelluksia Next.js:llä.",
                icon: "GlobeAltIcon",
                price: "30tt",
              },
              {
                name: "React komponenttien kehitys",
                description:
                  "Suunnittelemme ja kehitämme joustavia ja moderneja käyttöliittymäkomponentteja Reactilla.",
                icon: "GlobeAltIcon",
                price: "30tt",
              },
              {
                name: "API-integraatiot",
                description:
                  "Integroimme erilaisia API-rajapintoja ja palveluita osaksi sivustoasi tai sovellustasi.",
                icon: "GlobeAltIcon",
                price: "30tt",
              },
              {
                name: "HTML ja CSS muokkaukset",
                description:
                  "Toteutamme räätälöityjä muokkauksia HTML:n ja CSS:n avulla sivustosi ulkoasuun ja toiminnallisuuksiin.",
                icon: "GlobeAltIcon",
                price: "30tt",
              },
              {
                name: "Graafinen suunnittelu",
                description:
                  "Luomme visuaalisesti houkuttelevia ja toimivia käyttöliittymiä ja graafisia elementtejä.",
                icon: "GlobeAltIcon",
                price: "30tt",
              },
            ],
            icon: "GlobeAltIcon",
          },
        ],
      },
    ],
  },
];
const medialinks = [
  {
    name: "Kotisivujen hintalaskuri",
    description:
      "Haluatko tietää, kuinka paljon kotisivujen tekeminen yrityksellesi maksaa? Yleinen hinta-arvio on 250 - 500 euroa. Jos kustannukset mietityttävät, valitse alla oleva hintalaskuri tarpeidesi mukaan, niin saat arvion, joka perustuu arvioituun työmäärään ja ohjelmoijan palkkatoivomuksiin.",
    icon: GlobeAltIcon,
    mediadata: [
      peruspaketti,
      {
        name: "Premium-paketti",
        description: "Sisältää laajemmat kotisivut ja lisäominaisuuksia.",
        icon: GlobeAltIcon,
        price: 500,
        extra: extrapremiem,
      },
      {
        name: "Erikoispaketti",
        description: "Sisältää räätälöidyt erikoissivut.",
        icon: GlobeAltIcon,
        price: 700,
        extra: extraEpremiem,
      },
    ],
  },
];
const medialinkz = [
  {
    name: "Verkkokaupat",
    description:
      "Sisältää kaiken oleellisen ja tarvittavan avaimet käteen -periaatteella. Luo menestyvä verkkokauppa kanssamme. Tarjoamme täydelliset ratkaisut, jonka avulla asiakkaasi tekevät ostoksensa helposti ja vaivattomasti.",
    icon: ShoppingCartIcon,
    mediadata: [
      {
        name: "Pieni Verkkokauppa peruspaketti",
        description:
          "Perus verkkokaupparatkaisu, joka sopii pienille yrityksille ja aloitteleville verkkokaupoille.",
        icon: GlobeAltIcon,
        price: 800,
        extra: extro,
      },
      {
        name: "Keskikokoinen Verkkokauppa -paketti",
        description:
          "Kehittyneempi verkkokauppa, joka sisältää enemmän tuotteita ja lisäominaisuuksia.",
        icon: GlobeAltIcon,
        price: 1250,
        extra: extra,
      },
      {
        name: "Suuri verkkokauppa",
        description:
          "Täysin räätälöity verkkokaupparatkaisu, joka sopii suurille yrityksille ja laajoille tuotevalikoimille.",
        icon: GlobeAltIcon,
        price: 3000,
        extra: extra,
      },
    ],
  },
];

export default function Example() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [valinta, setValinta] = useState([true, true, true]);
  const [valintasss, setValintass] = useState([true, true, true]);

  const [total, setTotal] = useState({
    numerical: 0,
    monthly: 0,
    hourly: 0,
    mediaPrice: 0,
  });

  const addToCart = ({
    media,
    mediaPrice,
    extraService,
    subService,
    price,
    select,
  }) => {
    const newItem = {
      media: media,
      extraService: extraService,
      subService: subService,
      price: price,
      mediaPrice: mediaPrice,
    };

    if (select) {
      setSelectedProducts((prev) => {
        const index = prev.findIndex(
          (product) =>
            product.media === media &&
            product.extraService === newItem.extraService
        );
        if (index !== -1) {
          const updatedProducts = [...prev];
          updatedProducts[index] = newItem;
          return updatedProducts;
        } else {
          return [...prev, newItem];
        }
      });
      return;
    }
    setSelectedProducts((prev) => {
      const itemExists = prev.some(
        (product) =>
          product.media === media &&
          product.extraService === extraService &&
          product.subService.name === subService.name
      );

      if (!itemExists) {
        return [...prev, newItem];
      } else {
        const updatedProducts = prev.filter(
          (product) =>
            !(
              product.media === media &&
              product.extraService === extraService &&
              product.subService.name === subService.name
            )
        );

        const newTotalMediaPrice = updatedProducts.reduce(
          (acc, product) => acc + product.mediaPrice,
          0
        );

        setTotal((prevTotal) => ({
          ...prevTotal,
          mediaPrice: newTotalMediaPrice,
        }));
        return updatedProducts;
      }
    });
  };

  const handleRemove = (media, subService) => {
    if (subService === undefined) {
      setSelectedProducts((prev) =>
        prev.filter((product) => !(product.media === media))
      );
    } else {
      setSelectedProducts((prev) =>
        prev.filter(
          (product) =>
            !(product.media === media && product.subService.name === subService)
        )
      );
    }
  };
  return (
    <div>
      <div className="relative min-h-screen bg-gray-100">
        <div className="py-10">
          <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <main className="lg:col-span-9 xl:col-span-8">
              <div className="mt-0">
                <h1 className="sr-only">Hintalaskuri</h1>
                <ul className="space-y-4">
                  <div className="">

                    <div
                      className={`duration-300 transition-all  ${
                        valinta[0] && valinta[1]
                          ? "grid grid-cols-1 sm:grid-cols-2"
                          : "grid grid-cols-1"
                      }`}
                    >
                      {valinta[0] && (
                        <ItseLaskuris
                          setValinta={setValinta}
                          addToCart={addToCart}
                          selectedProducts={selectedProducts}
                          setSelectedProducts={setSelectedProducts}
                          medialinks={medialinks}
                          extra={extra}
                        />
                      )}
                      {valinta[1] && (
                        <ItseLaskuris
                          setValinta={setValinta}
                          addToCart={addToCart}
                          selectedProducts={selectedProducts}
                          setSelectedProducts={setSelectedProducts}
                          medialinks={medialinkz}
                          extra={extra}
                        />
                      )}
                    </div>
                    <div
                      className={
                        valinta[0] && valinta[1]
                          ? "grid grid-cols-1"
                          : "grid grid-cols-1"
                      }
                    >
                      {valinta[0] && valinta[1] ? null : (
                        <>
                          {!valinta[0] && (
                            <ItseLaskuris
                              setValinta={setValintass}
                              addToCart={addToCart}
                              selectedProducts={selectedProducts}
                              setSelectedProducts={setSelectedProducts}
                              medialinks={medialinks}
                              extra={extra}
                            />
                          )}
                          {!valinta[1] && (
                            <ItseLaskuris
                              setValinta={setValintass}
                              addToCart={addToCart}
                              selectedProducts={selectedProducts}
                              setSelectedProducts={setSelectedProducts}
                              medialinks={medialinkz}
                              extra={extra}
                            />
                          )}
                        </>
                      )}

                      <ItseLaskurisYks
                        setValinta={setValinta}
                        addToCart={addToCart}
                        selectedProducts={selectedProducts}
                        setSelectedProducts={setSelectedProducts}
                        medialinks={medialinkspienet}
                      />

                      {/* <SelectedProducts
                        selectedProducts={selectedProducts}
                        handleRemove={handleRemove}
                      /> */}
                    </div>{" "}
                    <SelectedProductsMobil
                      selectedProducts={selectedProducts}
                      handleRemove={handleRemove}
                    />
                    <div className=""></div>
                  </div>{" "}
                </ul>
              </div>
            </main>
            <aside className="hidden xl:block xl:col-span-4">
              <div className="sticky top-4 space-y-4">
                <section aria-labelledby="my-selected-products">
                  <SelectedProducts
                    selectedProducts={selectedProducts}
                    handleRemove={handleRemove}
                  />
                </section>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
