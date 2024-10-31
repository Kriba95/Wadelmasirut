import React, { useState, useRef } from "react";
import { Switch } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function LaskuriLomakeFinaali({
  formData,
  setFormData,
  setLahetetty,
  handleSendScroll,
  setLoading,
}) {
  const [files, setFiles] = useState([]);
  const [agreed, setAgreed] = useState(null);
  const [filePreviews, setFilePreviews] = useState([]);
  const [color, setColor] = useState(false);
  const [kuinkaMonta, setKuinkaMonta] = useState(0);
  const [errors, setErrors] = useState([]);

  const uploadToClient = (event) => {
    const selectedFiles = event.target.files;

    // Update files state with selected files
    setFiles([...files, ...selectedFiles]);

    // Generate previews for selected files
    const previews = Array.from(selectedFiles).map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
    }));
    setFilePreviews([...filePreviews, ...previews]);
  };

  const handleRemovePreview = (index) => {
    const updatedPreviews = [...filePreviews];
    updatedPreviews.splice(index, 1);
    setFilePreviews(updatedPreviews);

    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const handleDragOver = (event) => {
    setColor(true);

    event.preventDefault();
  };

  const handleDrop = (event) => {
    setColor(false);
    event.preventDefault();

    const selectedFiles = Array.from(event.dataTransfer.files);

    // Update the 'files' state correctly
    setFiles([...files, ...selectedFiles]);

    // Generate previews for selected files
    const previews = selectedFiles.map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
    }));

    // Update the 'filePreviews' state correctly
    setFilePreviews(filePreviews.concat(previews));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (files.length !== 0) {
      const api_key = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
      const api_secret = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET;
      const upload_preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESENT;
      try {
        // Assuming 'files' is an array of File objects
        const totalFiles = files.length; // Total number of files to upload
        let filesUploaded = 0; // Counter for successfully uploaded files

        for (const file of files) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("api_key", api_key);
          formData.append("api_secret", api_secret);
          formData.append("upload_preset", upload_preset);

          const response = await fetch(
            "https://api.cloudinary.com/v1_1/deo7pv2rv/image/upload",
            {
              method: "POST",
              body: formData,
            }
          );

          const data = await response.json();

          if (response.ok) {
            filesUploaded++; // Increment the counter for successfully uploaded files
            const remainingFiles = totalFiles - filesUploaded;

            setKuinkaMonta(remainingFiles);
          } else {
            alert("File upload failed");
          }
        }

        handleSubmitSave(e);
      } catch (error) {
        console.error("Error uploading files:", error);
        alert("Error uploading files");
      }
    } else {
      handleSubmitSave(e);
    }
  };

  const [response, setResponse] = useState(null);
  const scrollRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contactwadelma", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      setResponse(result);
      setLoading(false);
      setLahetetty(true);
      handleSendScroll();
    } catch (error) {
      console.error("Error submitting form", error);
      setLoading(false);
    }
  };

  const handleSubmitValidate = (e) => {
    e.preventDefault();
    const newErrors = [];

    if (formData.firstName === "" || formData.firstName === undefined) {
      newErrors.push('Kenttä "Etunimi tai Yritys" puuttuu');
    }

    if (formData.email === "" || formData.email === undefined) {
      newErrors.push('Kenttä "Sähköposti" puuttuu');
    }

    if (agreed === null || agreed === false) {
      newErrors.push(
        "Hyväksy tietosuojakäytäntö ja evästekäytäntö ennen lomakkeen lähettämistä."
      );
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      handleSubmit(e);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="relative max-w-xl pt-16 mx-auto"
    >
      <div className="text-center  border-b pb-6 border-gray-700">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Yrityksen tiedot{" "}
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-300">
          Voit lähettää liitteitä ja vapaamuotoisen tekstin projektista ja
          projektin tarpeista.
        </p>
      </div>
      <div className="mt-12">
        <form onSubmit={handleSubmitValidate}>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-300"
              >
                Etunimi
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-300"
              >
                Sukunimi
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  autoComplete="family-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Sähköposti
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-gray-300"
              >
                Puhelinnumero
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="phoneNumber"
                  id="phone-number"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="+358 401 2345"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="grid mt-6 grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            {/* File Upload Section */}
            <div className="sm:col-span-2">
              <label
                htmlFor="Liite-Liite"
                className="block text-sm font-medium text-gray-300"
              >
                Liite
              </label>
              {color && (
                <div className="justify-center text-center">
                  <h3 className="text-2xl p-2 text-gray-300 font-extrabold">
                    Vie tähän
                  </h3>
                </div>
              )}
              <div
                className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md ${
                  color ? "border-gray-300" : "border-gray-300"
                }`}
              >
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-300">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-medium text-indigo-300 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Valitse Liite</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={uploadToClient}
                        multiple
                      />
                    </label>
                    <p className="sm:block hidden pl-1">tai vedä ja pudota</p>
                  </div>
                  <p className="text-xs text-gray-300">
                    PNG, JPG, PDF, MAX 10MB
                  </p>
                </div>
              </div>
              {filePreviews.length > 0 && (
                <div className="mt-2   pb-12 ">
                  {filePreviews.map((preview, index) => (
                    <div className="mt-1 border-b border-gray-600" key={index}>
                      {preview.file.type === "application/pdf" ? (
                        <div className="text-xs flex justify-between">
                          <span className="text-gray-300">
                            Ladattu {preview.file.name}
                          </span>
                          <span
                            onClick={() => handleRemovePreview(index)}
                            className="cursor-pointer text-gray-300"
                          >
                            Poista
                          </span>
                        </div>
                      ) : (
                        <>
                          <div className="text-xs  flex justify-between">
                            <span className="text-gray-300">
                              Ladattu {preview.file.name}
                            </span>
                            <span
                              onClick={() => handleRemovePreview(index)}
                              className="cursor-pointer text-gray-300"
                            >
                              Poista
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Viesti
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="grid mt-6 grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            {/* Agreement Section */}

            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? "bg-indigo-600" : "bg-gray-200",
                      "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span className="sr-only">
                      Hyväksy tietosuojakäytännöt ja evästekäytännöt
                    </span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? "translate-x-5" : "translate-x-0",
                        "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-400">
                    Valitsemalla tämän, hyväksyt{" "}
                    <Link
                      href="/yleisetehdot"
                      className="font-medium text-gray-100 underline"
                    >
                      Käyttöehdot
                    </Link>{", "}
                    <Link
                      href="/terms-conditions"
                      className="font-medium text-gray-100 underline"
                    >
                      Tietosuojakäytännön
                    </Link>{" "}
                    ja{" "}
                    <Link
                      href="/evastekaytanto"
                      className="font-medium text-gray-300 underline"
                    >
                      Evästekäytännön
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Lähetä Tarjouspyyntö
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
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LaskuriLomakeFinaali;
