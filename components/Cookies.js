import Link from "next/link";
import React, { useState, useEffect } from "react";
import TagManager from "react-gtm-module";

function Cookies() {
  const [showCookieModal, setShowCookieModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Näytetään cookie modal vain ensimmäisellä käynnillä
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setShowCookieModal(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowCookieModal(false);

    // Lisätään Clarity-seurantakoodi
    TagManager.initialize({ gtmId: "GTM-PHD29M38" });

    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "nfgovpbkn2");
  };

  const handleReject = () => {
    setShowCookieModal(false);
  };

  if (!showCookieModal) return null;

  return (
    <div style={{zIndex:"222"}} className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-screen flex flex-col">
        <h2 className="text-xl font-bold mb-4">Käytämme evästeitä</h2>
        <div className="overflow-y-auto flex-grow mb-4">
          <p>
            Käytämme evästeitä seuraaviin tarkoituksiin:
          </p>
          <ul className="list-disc list-inside my-4">
            <li>
              Parantaaksemme verkkosivustomme käyttökokemusta (toiminnalliset
              evästeet)
            </li>
            <li>Seurataksemme sivujen kävijämääriä (tilastolliset evästeet)</li>
            {/* <li>
              Tarjoaksemme sinulle relevantteja mainoksia (markkinointievästeet)
            </li> */}
          </ul>
          <p className="mb-4">
            Klikkaa “OK” antaaksesi suostumuksesi käyttää evästeitä kaikkiin
            näihin tarkoituksiin.
          </p>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-blue-500 underline mb-4"
          >
            Lisätietoja Google- ja Clarity-palveluista
          </button>
          {showDropdown && (
            <div className="p-4 bg-gray-100 rounded-md shadow-md">
              <p className="mb-4">
                Käytämme verkkosivuillamme Google- ja Clarity-palveluja
                tarjotaksemme sinulle paremman käyttökokemuksen ja ymmärtääksemme
                paremmin verkkosivujemme käyttöä.
              </p>
              <p className="mb-2">
                <strong>Google:</strong> Käytämme Google-palveluja, kuten
                Google Analytics, kerätäksemme tietoja siitä, miten
                verkkosivustoamme käytetään, ja parantaaksemme sen toimivuutta.
                Google kerää tietoja evästeiden avulla. Lisää tietoa Google:n
                tietosuojakäytännöistä löydät täältä:{" "}
                <Link
                  className="text-blue-500 underline"
                  href="https://policies.google.com/privacy"
                >
                  Google Privacy & Terms
                </Link>
              </p>
              <p>
                <strong>Clarity:</strong> Käytämme myös Clarity-palvelua, joka
                auttaa meitä ymmärtämään, miten käyttäjät vuorovaikuttavat
                verkkosivustomme kanssa. Clarity käyttää evästeitä ja muita
                teknologioita kerätäkseen tietoja käyttäjäkäyttäytymisestä.
                Lisätietoja Clarityn yksityisyydensuojakäytännöistä löytyy
                täältä:{" "}
                <Link
                  className="text-blue-500 underline"
                  href="https://clarity.microsoft.com/privacy"
                >
                  Clarity Privacy Policy
                </Link>
              </p>
            </div>
          )}
          <div className="pr-2 text-xs mt-4">
            <Link className="text-gray-500 pr-2" href="/terms-conditions">
              Tietosuojaseloste
            </Link>
            <Link
              className="text-gray-500 pr-2  inline-flex"
              href="/yleisetehdot"
            >
              Yleiset ehdot
            </Link>
            <Link className="text-gray-500 pr-2" href="/evastekaytanto">
              Evästekäytäntö
            </Link>
            <Link className="text-gray-500 pr-2" href="/sopimusehdot">
              Sopimusehdot
            </Link>
          </div>
        </div>
        <div className="flex justify-end space-x-2 pt-4 border-t border-gray-200">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
            onClick={handleReject}
          >
            Hylkää
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleAccept}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cookies;
