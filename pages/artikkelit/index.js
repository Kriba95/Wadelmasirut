import Head from "@/components/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/* Tämä esimerkki vaatii Tailwind CSS v2.0+ */

const headerData = {
  title: "Wadelmasiru - Artikkelit",
  description:
    "Tutustu ajankohtaisiin artikkeleihimme, jotka kattavat erilaisia aiheita verkkosivujen kehittämisestä hakukoneoptimointiin ja verkkokaupan perustamiseen.",
  keywords:
    "artikkelit, verkkosivujen kehittäminen, hakukoneoptimointi, verkkokauppa, Wadelmasiru",
};

export default function Artikkelit() {
  const router = useRouter();
  const [posts, setPosts] = useState([
    {
      title: "Verkkosivujen nopeuttaminen",
      href: "/artikkelit/verkkosivujen-nopeuttaminen",
      description:
        "Parhaat vinkit ja työkalut verkkosivujesi latausajan nopeuttamiseksi.",
      date: "5.7.2024",
      datetime: "2024-07-05",
      category: { name: "Artikkelit", href: "#" },
      imageUrl:
        "https://res.cloudinary.com/deo7pv2rv/image/upload/f_auto,q_auto/v1/1wademasiru/bgltvl0krw9mf53vmzmh",
      readingTime: "6 min",
      author: {
        name: "Wadelmasiru",
        href: "#",
        imageUrl: "/asa.png",
      },
    },
    {
      title: "Responsiivisen suunnittelun merkitys suorituskyvylle",
      href: "/artikkelit/responsiivisen-suunnittelun-merkitys-suorituskyvylle",
      description:
        "Varmista, että sivustosi on suunniteltu responsiivisesti ja toimii moitteettomasti kaikilla laitteilla ja näyttökoilla parantaaksesi käyttäjäkokemusta.",
      date: "12.7.2024",
      datetime: "2024-07-12",
      category: { name: "Artikkeli", href: "#" },
      imageUrl:
        "https://res.cloudinary.com/deo7pv2rv/image/upload/f_auto,q_auto/v1/1wademasiru/ml3tnzqpvfiskhaduncg",
      readingTime: "6 min",
      author: {
        name: "Wadelmasiru",
        href: "#",
        imageUrl: "/asa.png",
      },
    },
    {
      title: "SEO:n perusteet: Miten parantaa hakukonenäkyvyyttä",
      href: "/artikkelit/seo-perusteet-miten-parantaa-hakukonenakyvyytta",
      description:
        "Ymmärrä hakukoneoptimoinnin perusperiaatteet ja paranna sivustosi näkyvyyttä.",
      date: "29.6.2024",
      datetime: "2024-06-29",
      category: { name: "Artikkeli", href: "#" },
      imageUrl:
        "https://res.cloudinary.com/deo7pv2rv/image/upload/f_auto,q_auto/v1/1wademasiru/caklmr4ku6uouxji1irb",
      readingTime: "6 min",
      author: {
        name: "Wadelmasiru",
        href: "#",
        imageUrl: "/asa.png",
      },
    },
    {
      title: "Verkkokaupan perustaminen",
      href: "/artikkelit/verkkokaupan-perustaminen",
      description: "Askel askeleelta -opas oman verkkokaupan luomiseen.",
      date: "10.6.2024",
      datetime: "2024-06-10",
      category: { name: "Artikkeli", href: "#" },
      imageUrl: "/asa.png",
      readingTime: "8 min",
      author: {
        name: "Wadelmasiru",
        href: "#",
        imageUrl: "/asa.png",
      },
    },
  ]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await fetch("/api/artikkelit");
      const data = await response.json();
      console.log(data.result);

      // Yhdistetään uudet artikkelit vanhoihin
      setPosts((prevPosts) => [...data.result,...prevPosts, ]);
    } catch (error) {
      console.error("Failed to fetch files", error);
    }
  };

  return (
    <>
      <Head props={headerData} />
      <div className="relative min-vh-80 bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight bold text-gray-900 sm:text-4xl">
              Artikkelit
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"></p>
          </div>
          <div className="mt-12 max-w-7xl mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post, i) => (
              <div
                onClick={() => {post.href ? router.push(post.href) :  router.push("https://wadelmasiru.fi/artikkelit/"+post.url)}}
                key={post.title}
                className="cursor-pointer flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={post.imageUrl ? post.imageUrl : post.imagesArray[0]}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      {post?.category?.href ? (
                        <Link
                          href={post.category.href}
                          className="hover:underline"
                        >
                          {post.category.name}
                        </Link>
                      ) : (
                        <Link
                          href={`https://wadelmasiru.fi/artikkelit/${post.url}`}
                          className="hover:underline"
                        >
                          Artikkeli
                        </Link>
                      )}
                    </p>
                    {post?.category?.href ? (
                      <Link href={post.href} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          {post.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {post.description}
                        </p>
                      </Link>
                    ) : (
                      <Link
                        href={`https://wadelmasiru.fi/artikkelit/${post.url}`}
                        className="block mt-2"
                      >
                        <p className="text-xl font-semibold text-gray-900">
                          {post.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {post.description}
                        </p>
                      </Link>
                    )}
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      {post?.category?.href ? (
                        <Link href={post.author.href}>
                          <span className="sr-only">{post.author.name}</span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={post.author.imageUrl}
                            alt=""
                          />
                        </Link>
                      ) : (
                        <Link
                          href={`https://wadelmasiru.fi/artikkelit/${post.url}`}
                        >
                          <span className="sr-only">Wadelmasiru</span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={"/asa.png"}
                            alt=""
                          />
                        </Link>
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <Link
                          href={`https://wadelmasiru.fi/artikkelit/${post.url}`}
                          className="hover:underline"
                        >
                          Wadelmasiru
                        </Link>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        {post.datetime ? (
                          <time dateTime={post.datetime}>{post.date}</time>
                        ) : (
                          <time dateTime={post.createdAt}> {new Intl.DateTimeFormat('fi-FI', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                          }).format(new Date(post.createdAt))}</time>

                        )}

                        {post.readingTime && (
                          <>
                            {" "}
                            <span aria-hidden="true">&middot;</span>
                            <span>{post.readingTime} read</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
