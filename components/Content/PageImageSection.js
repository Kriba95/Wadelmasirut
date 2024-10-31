import Link from "next/link";
import BrickPattern from "./BrickPattern";

export default function PageSection({ post }) {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl    mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        <div className="">
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto"></div>

          <div className="text-base  max-w-prose mx-auto lg:max-w-none">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              {post.transactionsTitle}
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {post.differenceTitle}
            </p>
          </div>

          <img src="https://res.cloudinary.com/deo7pv2rv/image/upload/f_auto,q_auto/v1/1wademasiru/xvs3f0xv9tfjbc7xdz4f"></img>
          <div
            className=" text-gray-500"
            dangerouslySetInnerHTML={{ __html: post.text }}
          />
        </div>

        <div className=" content-center ">
          <img
            className=" "
            src="https://res.cloudinary.com/deo7pv2rv/image/upload/f_auto,q_auto/v1/1wademasiru/wdndzvbwfrgjxomejhty"
          ></img>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div className="relative z-10">
            <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none"></div>
            <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
              <div className="rounded-md shadow">
                <Link
                  href="/artikkelit"
                  className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                >
                  {post.cta1Text}
                </Link>
              </div>
            </div>
          </div>

          {post.nothanks ? null : (
            <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
              {/* <BrickPattern /> */}

              <blockquote className="relative bg-white rounded-lg shadow-lg">
                <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                  {/* <img src="/asa.png" alt="Waldemasiru" className="h-8 " /> */}
                  <p className="font-bold text-gray-900 text-2xl">
                    Wadelmasiru
                  </p>
                  <div className="relative text-lg text-gray-700 font-medium mt-8">
                    <p className="relative">{post.differenceText}</p>
                  </div>
                </div>
                <cite className="relative flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                  <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                    <img
                      className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300"
                      src="/asa.png"
                      alt=""
                    />
                  </div>
                  <span className="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                    <p className="text-white font-semibold sm:inline">Savko</p>
                    <p className="sm:inline"> | {post.authorTitle}</p>
                  </span>
                </cite>
              </blockquote>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
