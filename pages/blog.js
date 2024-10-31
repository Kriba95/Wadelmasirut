import Head from "@/components/head";

const posts = [
  {
    title: "Verkkosivujen nopeuttaminen",
    href: "/artikkelit/verkkosivujen-nopeuttaminen",
    description:
      "Parhaat vinkit ja työkalut verkkosivujesi latausajan nopeuttamiseksi.",
    date: "5.7.2024",
    datetime: "2024-07-05",
  },
  {
    title: "Responsiivisen suunnittelun merkitys suorituskyvylle",
    href: "/artikkelit/responsiivisen-suunnittelun-merkitys-suorituskyvylle",
    description:
      "    Varmista, että sivustosi on suunniteltu responsiivisesti ja toimii moitteettomasti kaikilla laitteilla ja näyttökoilla parantaaksesi käyttäjäkokemusta.",
    date: "12.7.2024",
    datetime: "2024-07-12",
  },
  {
    title: "SEO:n perusteet: Miten parantaa hakukonenäkyvyyttä",
    href: "/artikkelit/seo-perusteet-miten-parantaa-hakukonenakyvyytta",
    description:
      "Ymmärrä hakukoneoptimoinnin perusperiaatteet ja paranna sivustosi näkyvyyttä.",
    date: "29.6.2024",
    datetime: "2024-06-29",
  },
  {
    title: "Verkkokaupan perustaminen",
    href: "/artikkelit/verkkokaupan-perustaminen",
    description: "Askel askeleelta -opas oman verkkokaupan luomiseen.",
    date: "10.6.2024",
    datetime: "2024-06-10",
  },
];

const headerData = {
  title: "Blogi - Wadelmasiru",
  description:
    "Seuraa viikoittaisia artikkeleitamme ja pysy ajan tasalla verkkosivujen optimoinnista, responsiivisesta suunnittelusta, SEO:sta ja verkkokaupan perustamisesta. Tilaa uutiskirjeemme saadaksesi uusimmat päivityksemme suoraan sähköpostiisi.",
  keywords:
    "blogi, verkkosivujen nopeuttaminen, responsiivinen suunnittelu, SEO, verkkokaupan perustaminen, Wadelmasiru",
};

export default function Example() {
  return (
    <>
      {" "}
      <Head props={headerData} />
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Blogi
            </h2>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
              <p className="text-xl text-gray-500">
                Tilaa viikoittaiset artikkelit suoraan sähköpostiisi.
              </p>
              <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Sähköpostiosoite
                  </label>
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:max-w-xs"
                    placeholder="Kirjoita sähköpostisi"
                  />
                </div>
                <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                  <button
                    type="button"
                    className="w-full bg-indigo-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:inline-flex"
                  >
                    Ilmoita minulle
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                <p className="text-sm text-gray-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                </p>
                <a href={post.href} className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {post.description}
                  </p>
                </a>
                <div className="mt-3">
                  <a
                    href={post.href}
                    className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Lue koko artikkeli
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
