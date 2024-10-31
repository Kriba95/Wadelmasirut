"use client";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  BellIcon,
  BookmarkAltIcon,
  CashIcon,
  CogIcon,
  FireIcon,
  HomeIcon,
  InboxIcon,
  KeyIcon,
  MenuIcon,
  PhotographIcon,
  SearchCircleIcon,
  UserIcon,
  ViewGridAddIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import Sidebar from "@/components/navbar/Sidebar";
import useSWR from "swr";
const fetcher = async (uri) => {
  const response = await fetch(uri);
  return response.json();
};
import dynamic from "next/dynamic";
import PageSection from "@/components/Content/PageImageSection";
import SideNavbar from "@/components/navbar/SideNavbar";

const CustomEditor = dynamic(
  () => import("@/components/TextEditor/CustomEditor"),
  { ssr: false }
);

// import 'ckeditor5/ckeditor5.css';
// import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

const subNavigation = [
  {
    id: 1,
    name: "Luo artikkeli",
    description: "Syötä artikkelin tiedot ja sisällöt",
    href: "#",
    icon: CogIcon,
    current: true,
  },
  {
    id: 2,
    name: "SEO-optimointi",
    description:
      "Määritä artikkelin SEO-tiedot, kuten otsikko, kuvaus ja avainsanat",
    href: "#",
    icon: BellIcon,
    current: false,
  },
  {
    id: 3,
    name: "Kuvat",
    description: "Lisää ja hallitse artikkelin kuvia",
    href: "#",
    icon: PhotographIcon,
    current: false,
  },
  {
    id: 4,
    name: "Esikatselu",
    description: "Tarkista artikkelin ulkoasu ennen julkaisua",
    href: "#",
    icon: CashIcon,
    current: false,
  },
  {
    id: 5,
    name: "Julkaisu",
    description: "Julkaise valmis artikkeli",
    href: "#",
    icon: ViewGridAddIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
} // Dynaaminen importointi CKEditor 5:stä

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [page, setPage] = useState(1);

  const [post, setPost] = useState({
    transactionsTitle: "",
    differenceTitle: "",
    differenceText: "",
    helpTitle: "Olemme täällä auttaaksemme",
    cta1Text: "Artikkelit",
    nothanks: "Artikkelit",

    author: {
      name: "Wadelmasiru",
      title: "Wadelmasiru",
    },
    text: `<h2 class="text-2xl text-gray-900 font-bold mb-4">Verkkosivujen nopeuttaminen: Parhaat käytännöt ja työkalut suorituskyvyn optimointiin</h2>`,
    url: "https://wadelmasiru.fi/artikkelit/verkkosivujen-nopeuttaminen",
  });

  const [headerData, setHeaderData] = useState({
    title: "",
    description: "",
    keywords: "",
    url: "",
  });

  const [imagesArray, setImagesArray] = useState([
    "https://res.cloudinary.com/deo7pv2rv/image/upload/f_auto,q_auto/v1/1wademasiru/sdzbaxg6xgljnyuvxyyu",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setPost({
      ...post,
      text: data,
    });
  };
  const handleHeaderChange = (e) => {
    const { name, value } = e.target;
    setHeaderData({
      ...headerData,
      [name]: value,
    });
  };

  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleImageChange = (e, index) => {
    const newImages = [...imagesArray];
    newImages[index] = e.target.value;
    setImagesArray(newImages);
  };

  // Kun post.differenceTitle muuttuu, päivitetään oletusarvo
  useEffect(() => {
    setHeaderData((prevData) => ({
      ...prevData,
      url: toUrlFriendly(post.differenceTitle),
    }));
  }, [post.differenceTitle]);

  function toUrlFriendly(text) {
    return text
      .toLowerCase() // Muuta pieniksi kirjaimiksi
      .replace(/[^a-z0-9\s]/g, "") // Poista erityismerkit
      .trim() // Poista johtavat ja peräkkäiset välilyönnit
      .replace(/\s+/g, "-"); // Vaihda välilyönnit viivaksi
  }

  async function fetchToArticle() {
    try {
      const response = await fetch("/api/artikkelit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: headerData.title,
          description: headerData.description,
          keywords: headerData.keywords,
          url: headerData.url,
          transactionsTitle: post.transactionsTitle,
          differenceTitle: post.differenceTitle,
          differenceText: post.differenceText,
          helpTitle: post.helpTitle,
          cta1Text: post.cta1Text,
          author: post.author,
          text: post.text,
          imagesArray: imagesArray,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Handle success (e.g., show a success message, redirect, etc.)
        alert("Article submitted successfully!");
      } else {
        // Handle errors
        console.error("Error submitting article:", result.error);
        alert("Failed to submit the article.");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error:", error);
      alert("An unexpected error occurred.");
    }
  }


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

  const { data, error } = useSWR("/api/redirect_protected", fetcher, {});

  if (error) return <div>oops...{JSON.stringify(data)}</div>;
  if (data === undefined) return <div>Loading...</div>;

  if (data.protected === true) {
    return (
      <div className="relative h-screen flex bg-blue-gray-50 overflow-hidden">
        <Sidebar page="Luo uusi" />

        <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
          {/* Mobile top navigation */}

          <SideNavbar />
          <main className="flex-1 flex overflow-hidden">
            <div className="flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="bg-white border-b border-blue-gray-200 xl:hidden"
              >
                <div className="max-w-3xl mx-auto py-3 px-4 flex items-start sm:px-6 lg:px-8">
                  <a
                    href="#"
                    className="-ml-1 inline-flex items-center space-x-3 text-sm font-medium text-blue-gray-900"
                  >
                    <ChevronLeftIcon
                      className="h-5 w-5 text-blue-gray-400"
                      aria-hidden="true"
                    />
                    <span>Uusi artikkeli</span>
                  </a>
                </div>
              </nav>

              <div className="flex-1 flex xl:overflow-hidden">
                {/* Secondary sidebar */}
                <nav
                  aria-label="Sections"
                  className="hidden flex-shrink-0 w-96 bg-white border-r border-blue-gray-200 xl:flex xl:flex-col"
                >
                  <div className="flex-shrink-0 h-16 px-6 border-b border-blue-gray-200 flex items-center">
                    <p className="text-lg font-medium text-blue-gray-900">
                      Uusi artikkeli
                    </p>
                  </div>
                  <div className="flex-1 min-h-0 overflow-y-auto">
                    {subNavigation.map((item) => (
                      <div
                        onClick={() => setPage(item.id)}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          page === item.id
                            ? "bg-blue-50 bg-opacity-50"
                            : "hover:bg-blue-50 hover:bg-opacity-50",
                          "flex p-6 border-b border-blue-gray-200 cursor-pointer"
                        )}
                        aria-current={page === item.id ? "page" : undefined}
                      >
                        <item.icon
                          className="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400"
                          aria-hidden="true"
                        />
                        <div className="ml-3 text-sm">
                          <p className="font-medium text-blue-gray-900">
                            {item.name}
                          </p>
                          <p className="mt-1 text-blue-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </nav>

                {/* Main content */}
                <div className="flex-1 max-h-screen xl:overflow-y-auto">
                  <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
                    <h1 className="text-3xl font-extrabold text-blue-gray-900">
                      Luo uusi artikkeli
                    </h1>

                    <form className="mt-6 space-y-8 divide-y divide-y-blue-gray-200">
                      {page === 1 && (
                        <>
                          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                            <div className="sm:col-span-6">
                              <h2 className="text-xl font-medium text-blue-gray-900">
                                Lisää artikkelin kategoria (H1), pääotsikko (H2)
                                ja artikkelin teksti.
                              </h2>
                              <span>
                                {" "}
                                Artikkeli voi sisältää useita otsikoita, mutta
                                pääotsikon merkitys on tärkein.
                              </span>
                            </div>

                            <div className="sm:col-span-6">
                              <label
                                htmlFor="helpTitle"
                                className="block text-sm font-medium text-blue-gray-900"
                              >
                                Pääotsikko Tai kategoria /{" "}
                                <span className="text-xs text-normal font-normal">
                                  {" "}
                                  Transactions Title H1
                                </span>
                              </label>
                              <input
                                type="text"
                                name="transactionsTitle"
                                id="transactionsTitle"
                                onChange={handlePostChange}
                                value={post.transactionsTitle}
                                className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                            <div className="sm:col-span-6">
                              <label
                                htmlFor="helpTitle"
                                className="block text-sm font-medium text-blue-gray-900"
                              >
                                Pääotsikko /{" "}
                                <span className="text-xs text-normal font-normal">
                                  {" "}
                                  Difference Title H2
                                </span>
                              </label>
                              <input
                                type="text"
                                name="differenceTitle"
                                id="differenceTitle"
                                value={post.differenceTitle}
                                onChange={handlePostChange}
                                className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                            <div className="sm:col-span-6">
                              <label
                                htmlFor="differenceText"
                                className="block text-sm font-medium text-blue-gray-900"
                              >
                                Artikkeli /
                                <span className="text-xs text-normal font-normal">
                                  {" "}
                                  Artikkelin Teksti
                                </span>
                              </label>
                              <div className="w-full mt-4">
                                <CustomEditor
                                  handleEditorChange={handleEditorChange}
                                />
                                {post.text.length} kirjainta
                                <div
                                  className=" text-gray-500"
                                  dangerouslySetInnerHTML={{
                                    __html: post.text,
                                  }}
                                />
                                <hr className="my-2"></hr>
                                {post.text}
                              </div>
                              {/* <textarea
                              id="text"
                              name="text"
                              rows={4}
                              value={post.text}
                              onChange={handlePostChange}
                              className="block w-full border border-blue-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                            /> */}
                            </div>
                          </div>

                          <div className="pt-8 flex justify-end">
                            <button
                              type="button"
                              onClick={() => setPage(2)}
                              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Jatka
                            </button>
                          </div>
                        </>
                      )}
                      {page === 2 && (
                        <>
                          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                            <div className="sm:col-span-6">
                              <h2 className="text-xl font-medium text-blue-gray-900">
                                (SEO) Google Search Engine Optimization
                              </h2>
                            </div>{" "}
                      
                              
                            <div className="bg-white min-w-96 p-4 rounded-md shadow-md max-w-3xl mx-auto">
                            <div className="flex ">
                              <div>
                                <img className="w-8 h-8 mr-2 " src="/asa.png"></img>
                              </div>{" "}
                              <div>
                                <p className="block text-gray-600 text-sm truncate">
                                  Wadelmasiru.fi
                                </p>
                                <p className="block text-gray-600 text-sm truncate">
                                  https://wadelmasiru.fi/artikkelit/
                                  {headerData.url}
                                </p>{" "}
                              </div>
                            </div>
                            <span className="block text-blue-600  text-lg font-semibold mt-2 truncate">
                              {headerData.title}
                            </span>
                            <span className="block text-gray-700 mt-1 text-sm line-clamp-2">
                              {headerData.description}
                            </span>
                          </div>

                            <div className="sm:col-span-6">
                              <label
                                htmlFor="title"
                                className="block text-sm font-medium text-blue-gray-900"
                              >
                                Title
                              </label>
                              <span className="text-xs text-blue-gray-700">
                                Main Title for Google Search. max{" "}
                                {headerData.title.length} / 60 Characters
                              </span>
                              <input
                                type="text"
                                name="title"
                                id="title"
                                value={headerData.title}
                                onChange={handleHeaderChange}
                                className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                              />{" "}
                              <span className="text-xs text-blue-gray-700">
                                {headerData.title.length} / 60 Kirjainta
                                {headerData.title.length < 60
                                  ? ""
                                  : alert("No more title max 60 Character ")}
                              </span>
                            </div>
                            <div className="sm:col-span-6">
                              <label
                                htmlFor="description"
                                className="block text-sm font-medium text-blue-gray-900"
                              >
                                Description
                              </label>{" "}
                              <span className="text-xs text-blue-gray-700">
                                Main Text for Google Search max{" "}
                                {headerData.description.length} / 150 Characters
                                {headerData.description.length < 150
                                  ? ""
                                  : alert(
                                      "No more description max 150 Character"
                                    )}
                              </span>
                              <textarea
                                id="description"
                                name="description"
                                rows={4}
                                value={headerData.description}
                                onChange={handleHeaderChange}
                                className="block w-full border border-blue-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                              />
                              <span className="text-xs text-blue-gray-700">
                                {headerData.description.length} / 150 Kirjainta
                              </span>
                            </div>
                            <div className="sm:col-span-6">
                              <label
                                htmlFor="keywords"
                                className="block text-sm font-medium text-blue-gray-900"
                              >
                                Keywords
                              </label>{" "}
                              <span className="text-xs text-blue-gray-700">
                                Avainsanat, Erota sanat pilkulla{" "}
                                {'--> "," eli erota tällä -->  ,'} max 0-10 kpl
                              </span>
                              <input
                                type="text"
                                name="keywords"
                                id="keywords"
                                value={headerData.keywords}
                                onChange={handleHeaderChange}
                                className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                            <div className="sm:col-span-6">
                              <label
                                htmlFor="header-url"
                                className="block text-sm font-medium text-blue-gray-900"
                              >
                                URL
                              </label>{" "}
                              <p className="text-xs text-blue-gray-700">
                                Tämä on artikkelin URL-parametri
                              </p>
                              <span className="text-xs text-blue-gray-700">
                                {"www.wadelmasiru.fi/artikkelit/" +
                                  headerData.url}
                              </span>
                              <input
                                type="text"
                                name="url"
                                id="header-url"
                                value={headerData.url}
                                onChange={handleHeaderChange}
                                className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-md shadow-md max-w-3xl mx-auto">
                            <div className="flex">
                              <div>
                                <img className="w-8 h-8 mr-2" src="/asa.png"></img>
                              </div>{" "}
                              <div>
                                <p className="block text-gray-600 text-sm truncate">
                                  Wadelmasiru.fi
                                </p>
                                <p className="block text-gray-600 text-sm truncate">
                                  https://wadelmasiru.fi/artikkelit/
                                  {headerData.url}
                                </p>{" "}
                              </div>
                            </div>
                            <span className="block text-blue-600 text-lg font-semibold mt-2 truncate">
                              {headerData.title}
                            </span>
                            <span className="block text-gray-700 mt-1 text-sm line-clamp-2">
                              {headerData.description}
                            </span>
                          </div>

                          <div className="pt-8 flex justify-end">
                            <button
                              type="button"
                              onClick={() => setPage(1)}
                              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Edellinen
                            </button>
                            <button
                              type="button"
                              onClick={() => setPage(3)}
                              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Jatka
                            </button>
                          </div>
                        </>
                      )}

                      {page === 3 && (
                        <>
                          <div className="sm:col-span-6">
                            <h2 className="text-xl font-medium text-blue-gray-900">
                              Images
                            </h2>
                          </div>

                          {imagesArray.map((image, index) => (
                            <div className="sm:col-span-6" key={index}>
                              <label
                                htmlFor={`image${index + 1}`}
                                className="block text-sm font-medium text-blue-gray-900"
                              >
                                Image {index + 1}
                              </label>
                              <input
                                type="text"
                                name={`image-${index}`}
                                id={`image-${index}`}
                                value={image}
                                onChange={(e) => handleImageChange(e, index)}
                                className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                          ))}
                          <div className="pt-8 flex justify-end">
                            <button
                              type="button"
                              onClick={() => setPage(2)}
                              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Edellinen
                            </button>
                            <button
                              type="button"
                              onClick={() => setPage(4)}
                              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Jatka
                            </button>
                          </div>
                        </>
                      )}

                      {page === 4 && (
                        <>
                          <div className="sm:col-span-6">
                            <h2 className="text-xl font-medium text-blue-gray-900">
                              Preview Artikkeli - Katso
                            </h2>
                          </div>

                          <PageSection
                            post={{ ...post, text: processedText }}
                          />

                          <div className="pt-8 flex justify-end">
                            <button
                              type="button"
                              onClick={() => setPage(3)}
                              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Edellinen
                            </button>
                            <button
                              type="button"
                              onClick={() => setPage(5)}
                              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Jatka
                            </button>
                          </div>
                        </>
                      )}
                      {page === 5 && (
                        <>
                          <div className="sm:col-span-6">
                            <h2 className="text-xl font-medium text-blue-gray-900">
                              Artikkeli - Katso
                            </h2>
                          </div>

                          <div className="pt-8 flex justify-end">
                            <button
                              type="button"
                              onClick={() => setPage(4)}
                              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Edellinen
                            </button>
                            <button
                              type="button"
                              onClick={() => fetchToArticle()}
                              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Complete
                            </button>
                          </div>
                        </>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative h-screen flex items-center justify-center bg-blue-gray-50 overflow-hidden">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Et ole kirjautunut</h1>
          <p className="mb-6 text-lg text-gray-600">
            Pääsy tämän sivun sisältöön edellyttää kirjautumista. Kirjaudu
            sisään päästäksesi käyttämään kaikkia palveluita ja ominaisuuksia.
          </p>
          <a
            href="/api/auth/login"
            className="inline-block px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
          >
            Kirjaudu sisään
          </a>
        </div>
      </div>
    );
  }
}
