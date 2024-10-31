import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronRightIcon, XCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Loading from "@/components/Loading/Loading";
import ThreeImages from "@/components/Laskuri/ThreeImages";
import Head from "@/components/head";

export default function Example() {
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lahetetty, setLahetetty] = useState(false);
  const [errors, setErrors] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
    lastName: "",
    firstName: "",
    liite: "",
    agreed: agreed,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitValidate = (e) => {
    e.preventDefault();
    const newErrors = [];

    if (formData.teksti === "" || formData.teksti === undefined) {
      newErrors.push('Kenttä "Vapaanmuotoinen teksti" puuttuu');
    }
    if (formData.name === "" || formData.name === undefined) {
      newErrors.push('Kenttä "Nimi tai Yritys" puuttuu');
    }

    if (
      formData["mobile-or-email"] === "" ||
      formData["mobile-or-email"] === undefined
    ) {
      newErrors.push('Kenttä "Puhelinnumero tai Sähköposti" puuttuu');
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      handleSubmitSave(e, true);
    }
  };
  const handleSubmitSave = async (e, pika) => {
    e.preventDefault();
    setLoading(true);

    if (pika) {
      try {
        const res = await fetch("/api/contactwadelmas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await res.json();

        setLoading(false);
        setLahetetty(true);
      } catch (error) {
        console.error("Error submitting form", error);
        setLoading(false);
        setLahetetty(false);
      }
      return;
    }
    try {
      const res = await fetch("/api/contactwadelma", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      setLoading(false);
      setLahetetty(true);
    } catch (error) {
      console.error("Error submitting form", error);
      setLoading(false);
      setLahetetty(false);
    }
  };
  const headerData = {
    title: "Ota yhteyttä - Wadelmasiru",
    description: 'Ota meihin yhteyttä täyttämällä lomake. Tarjoamme tehokkaita verkkokaupparatkaisuja ja digipalveluja, jotka optimoivat liiketoimintaasi. Meidän asiakaspalvelumme on valmis auttamaan sinua.',
    keywords: 'ota yhteyttä, verkkosivut, verkkokauppa, asiakaspalvelu, Wadelmasiru',
  };
  
  return (
    <>
      {" "}
      <Head props={headerData} />
      <div className="relative bg-gray-800 overflow-hidden">
        {loading && <Loading />}

        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 sm:mt-24">
            {!lahetetty ? (
              <div className="mx-auto max-w-7xl">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                  <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                    <div>
                      <div className="inline-flex cursor-pointer items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                        <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                          Ota Yhteyttä
                        </span>
                        <span className="ml-4 text-sm"></span>
                        <ChevronRightIcon
                          className="ml-2 w-5 h-5 text-gray-500"
                          aria-hidden="true"
                        />
                      </div>
                      <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                        <span className="md:block">Ota Yhteyttä </span>
                        <span className="text-indigo-400 md:block">Lomake</span>
                      </h1>
                      <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        Voit ottaa meihin yhteyttä tällä lomakkeella tai lähettämällä sähköpostia osoitteeseen:<br></br><br></br>  <span className=" font-extralight">asiakaspalvelu@wadelmasiru.fi</span>
                      </p>
                      <ThreeImages />
                    </div>
                  </div>

                  <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                    <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                      <div className="px-4 py-8 sm:px-10">
                        <div className="mt-6">
                          <form className="space-y-6">
                            <div>
                              <label htmlFor="name" className="sr-only">
                                Nimi tai Yritys
                              </label>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="name"
                                placeholder="Nimi tai Yritys"
                                required
                                className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                value={formData.name}
                                onChange={handleInputChange}
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="mobile-or-email"
                                className="sr-only"
                              >
                                Puhelin tai Sähköposti
                              </label>
                              <input
                                type="text"
                                name="mobile-or-email"
                                id="mobile-or-email"
                                autoComplete="email"
                                placeholder="Puhelin tai sähköposti"
                                required
                                className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                value={formData.mobileemail}
                                onChange={handleInputChange}
                              />
                            </div>

                            <div>
                              <label htmlFor="teksti" className="sr-only">
                                Teksti
                              </label>
                              <textarea
                                id="teksti"
                                name="teksti"
                                type="teksti"
                                placeholder="Vapaanmuotoinen teksti"
                                required
                                className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                value={formData.teksti}
                                onChange={handleInputChange}
                              />
                            </div>

                            <div>
                              <Link
                                type="button"
                                href="/tarjouspyynto#haluan-kertoa"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-500 mb-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Haluan kertoa laajemmin
                              </Link>
                              <button
                                type="button"
                                onClick={(e) => handleSubmitValidate(e, true)}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Lähetä
                              </button>
                              {errors.length > 0 && (
                                <div className="rounded-md bg-red-50 p-4 mt-4 -mb-4">
                                  <div className="flex">
                                    <div className="flex-shrink-0">
                                      <XCircleIcon
                                        className="h-5 w-5 text-red-400"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <div className="ml-3">
                                      <h3 className="text-sm font-medium text-red-800">
                                        {errors.length === 1
                                          ? "Lomakkeessa on yksi virhe"
                                          : "Lomakkeessa on " +
                                            errors.length +
                                            " virhettä"}
                                      </h3>
                                      <div className="mt-2 text-sm text-red-700">
                                        <ul className="list-disc pl-5 space-y-1">
                                          {errors.map((error, index) => (
                                            <li key={index}>{error}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                        <p className="text-xs leading-5 text-gray-500">
                          Lähettämällä lomakkeen hyväksyt meidän{" "}
                          <Link
                            href="/yleisetehdot"
                            className="font-medium text-gray-900 hover:underline"
                          >
                            Käyttöehdot
                          </Link>
                          ,{" "}
                          <Link
                            href="/terms-conditions"
                            className="font-medium text-gray-900 hover:underline"
                          >
                            Tietosuojakäytäntö
                          </Link>{" "}
                          ja{" "}
                          <Link
                            href="/evastekaytanto"
                            className="font-medium text-gray-900 hover:underline"
                          >
                            Evästekäytäntö
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <section>
                <div className="min-vh-30 overflow-hidden">
                  <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
                    <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto"></div>
                    <div className="text-base max-w-prose mx-auto lg:max-w-none">
                      <h2 className="text-base text-indigo-200 font-semibold tracking-wide uppercase">
                        Viesti vastaanotettu{" "}
                      </h2>
                      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                        Kiitos yhteydenotosta{" "}
                      </p>
                      <div className=" text-gray-300">
                        Tarkistamme viestisi ja palaamme mahdollisimman pian.
                      </div>
                    </div>
                    <div className="text-base py-6 max-w-prose mx-auto lg:max-w-none">
                      <p className="mt-2 text-xl py-4 leading-8 font-extrabold tracking-tight text-gray-100 ">
                        Haluatko tehdä muutoksia viestiisi?
                      </p>
                      <button
                        onClick={() => setLahetetty(false)}
                        className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                      >
                        Muokkaa
                      </button>{" "}
                    </div>
                  </div>{" "}
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
