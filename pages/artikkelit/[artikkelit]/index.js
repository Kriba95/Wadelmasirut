import Head from "@/components/head";
import PageSection from "@/components/Content/PageSection";
import Loading from "@/components/Loading/Loading";

export const getStaticPaths = async () => {
  const url = process.env.NEXTS_SERVER + `/api/artikkelit`;
  const artikkelitPaths = await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.error("err", err));

  const paths = artikkelitPaths.map((artikkelit) => ({
    params: { artikkelit: artikkelit.url },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  const artikkelit = encodeURIComponent(context.params.artikkelit);

  let res = await fetch(
    process.env.NEXTS_SERVER + "/api/artikkelit?arc=" + artikkelit
  );
  const data = await res.json();

  if (!data[0]) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      headerData: {
        title: data[0].title,
        description: data[0].description,
        keywords: data[0].keywords,
        url: data[0].url,
      },
      post: data[0],
      imagesArray: data[0].imagesArray || [],
    },
    revalidate: 100,
  };
};

export default function Artikkeli({post, headerData,imagesArray }) {

  
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
          ? `<div><img class="max-h-[633px]  mr-auto ml-auto justify-center  items-center" src="${images[imageIndex]}" alt="Wadelmasiru kuva ${
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

  if (post?.text) {
    // Muokataan teksti ja lisätään kuvat
    const processedText = splitTextWithImages(post.text, imagesArray);

    return (
      <>
        <Head props={headerData} />
        <PageSection post={{ ...post, text: processedText }} />
      </>
    );
  } else {
    return (
      <>
        <Loading />
      </>
    );
  }
}
