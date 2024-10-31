import React from "react";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import ContactFormProps from "./ContactFormProps";
import { XCircleIcon } from "@heroicons/react/solid";

export default function HeaderTwo() {
  const {
    agreed,
    loading,
    submitted,
    errors,
    formData,
    handleInputChange,
    handleSubmitValidate,
    handleSubmitSave,
  } = ContactFormProps();

  return (
    <div className="relative ">
      <div className="absolute inset-0">
        <div className="absolute  inset-y-0 left-0 w-1/2 " />
      </div>
      <div
        style={{
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
        }}
        className=" bg-stone-950 relative max-w-7xl mx-auto lg:grid lg:grid-cols-5"
      >
        <div className=" py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Ota Yhteyttä
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-100">
              Etsitkö ammattitaitoista kumppania, joka rakentaa tyylikkäät ja
              toimivat kotisivut tai verkkokaupan? Wadelmasiru auttaa sinua
              saamaan yrityksesi verkkoon nopeasti ja luotettavasti.
            </p>
            <dl className="mt-8 text-base text-gray-100">
              <div className="mt-6">
                <dt className="sr-only">Puhelinnumero</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">+358 404 601285</span>
                </dd>
              </div>

              <div className="mt-3">
                <dt className="sr-only">Sähköposti</dt>
                <dd className="flex">
                  <MailIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">asiakaspalvelu@wadelmasiru.fi</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form
              onSubmit={(e) => handleSubmitValidate(e, false)}
              className="grid grid-cols-1 gap-y-6"
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Nimi tai Yritys
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Nimi tai Yritys"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Sähköposti
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Sähköposti"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="sr-only">
                  Puhelinnumero
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Puhelinnumero"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Viesti
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  placeholder="Viesti"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                  disabled={loading}
                >
                  {loading ? "Ladataan..." : "Lähetä"}
                </button>
              </div>
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
                          : "Lomakkeessa on " + errors.length + " virhettä"}
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
              {submitted && (
                <p className="text-green-500">Kiitos, lomake on lähetetty!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
