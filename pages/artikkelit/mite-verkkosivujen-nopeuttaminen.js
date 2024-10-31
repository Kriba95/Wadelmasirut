import PageSection from "@/components/Content/PageSection";
import Head from "@/components/head";
import React from "react";

const headerData = {
  title: "Verkkosivujen nopeuttaminen - Parhaat käytännöt ja työkalut",
  description: "Verkkosivujen latausaika vaikuttaa merkittävästi käyttäjäkokemukseen ja hakukonenäkyvyyteen. Tässä artikkelissa esittelemme parhaat käytännöt ja työkalut verkkosivujen suorituskyvyn optimointiin.",
  keywords: "verkkosivujen nopeuttaminen, suorituskyvyn optimointi, verkkosivujen optimointi, käyttäjäkokemus, hakukonenäkyvyys",
  url: "https://wadelmasiru.fi/artikkelit/verkkosivujen-nopeuttaminen",
};


export default function VerkkosivujenNopeuttaminen() {
    const post = {
        transactionsTitle: "Verkkosivujen nopeuttaminen",
        differenceTitle: "Käytännöt verkkosivujen nopeuttamiseksi",
        differenceText:
          "Verkkosivujen latausaika vaikuttaa merkittävästi käyttäjäkokemukseen ja hakukonenäkyvyyteen. Nopeiden sivujen varmistaminen on avainasemassa asiakkaiden sitouttamisessa ja konversioiden parantamisessa.",
        helpTitle: "Olemme täällä auttaaksemme",
        cta1Text: "Artikkelit",
        cta2Text: "Lue lisää",
        authorName: "Wadelmasiru",
        text: `<h2 class="text-2xl  text-gray-900 font-bold mb-4">Verkkosivujen nopeuttaminen: Parhaat käytännöt ja työkalut suorituskyvyn optimointiin</h2>`,
    
        authorTitle: "Wadelmasiru",
    };
    
    
let imagesArray = [
  "https://res.cloudinary.com/deo7pv2rv/image/upload/f_auto,q_auto/v1/1wademasiru/sdzbaxg6xgljnyuvxyyu",
  "https://res.cloudinary.com/deo7pv2rv/image/upload/f_auto,q_auto/v1/1wademasiru/ninscmhdfr4dbimcqe30",
  "https://res.cloudinary.com/deo7pv2rv/image/upload/f_auto,q_auto/v1/1wademasiru/zjeohmitnrmqcqpxfmen",
  "https://res.cloudinary.com/deo7pv2rv/image/upload/f_auto,q_auto/v1/1wademasiru/wdndzvbwfrgjxomejhty",
  "https://res.cloudinary.com/deo7pv2rv/image/upload/f_auto,q_auto/v1/1wademasiru/xvs3f0xv9tfjbc7xdz4f",
];

const splitTextWithImages = (text, images, imagePosition = "random") => {
  const sections = [];
  let imageIndex = 0;
  let currentPosition = "left"; // Starting position for images

  // Split text by paragraphs, retaining the tags
  const splitText = text.split(/(?<=<\/p>)/);

  splitText.forEach((sectionText, index) => {
    if (sectionText.includes("<h2")) {
      // If there's an <h2> tag in this section, insert the image accordingly

      const imageHTML = images[imageIndex]
        ? `<div><img src="${images[imageIndex]}" alt="Kuva ${
            imageIndex + 1
          }" /></div>`
        : "";
      imageIndex++;

      const textHTML = `<div>${sectionText}</div>`;

      if (imagePosition === "random") {
        if (index === 2 || index === 5) {
          currentPosition = "noImage";
        } else if (index === 1) {
          currentPosition = "center";
        } else {
          currentPosition = index % 2 === 0 ? "left" : "right"; // Alternate positions
        }
      } else {
        currentPosition = imagePosition;
      }

      let contentWithoutDiv = textHTML.replace(/^<div[^>]*>\s*/i, "");

      if (currentPosition === "left") {
        if (contentWithoutDiv.trim().startsWith("<ul")) {
          sections.push(`
        <div class="grid grid-cols-1 gap-4 mb-4">
              ${textHTML}
            </div>
          `);

          // Suorita haluttu toiminto
          console.log("Sisältö alkaa <ul>:lla");
          // Voit myös tehdä muita asioita, kuten muokata tai käsitellä sisältöä
        } else {
          sections.push(`
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            ${imageHTML}
            ${textHTML}
          </div>
        `);
          console.log("Sisältö ei ala <ul>:lla");
        }
      } else if (currentPosition === "right") {
        sections.push(`
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            ${textHTML}
            ${imageHTML}
          </div>
        `);
      } else if (currentPosition === "center") {
        sections.push(`
          <div class="grid grid-cols-1 gap-4 mb-4">
            ${imageHTML}
            ${textHTML}
          </div>
        `);
      } else {
        sections.push(`
          <div class="grid grid-cols-1 gap-4 mb-4">
            ${textHTML}
          </div>
        `);
      }
    } else {
      // If there's no <h2> tag, just push the text section as is
      sections.push(`
        <div class="grid grid-cols-1 gap-4 mb-4">
          <div>${sectionText}</div>
        </div>
      `);
    }
  });

  return sections.join("");
};

  // Muokataan teksti ja lisätään kuvat
  const processedText = splitTextWithImages(post.text, imagesArray);

  return (
    <>
      <Head props={headerData} />
      <PageSection post={{ ...post, text: processedText }} />
    </>
  );
}


