import React from 'react';

const NotFoundPage = ({ teksti }) => {
  // Korjattu teksti-ehdon käyttö
  teksti = teksti ? teksti : "Hupsista, sivua ei löytynyt. Kukakohan meni poistamaan sen?";
  
  return (
    <div className="flex flex-col">
      <main className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 my-auto py-16 sm:py-32">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            404 Sivua ei löydy
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Hupsista keikkaa!
          </h1>
          <p className="mt-2 text-base text-gray-500">
            {teksti}
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="text-base font-medium text-indigo-600 hover:text-indigo-500"
            >
              Mene Etusivulle, ei täällä muuta ole <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
