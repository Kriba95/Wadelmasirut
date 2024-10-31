import Link from "next/link";
import BrickPattern from "./BrickPattern";

export default function PageSection({ post }) {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl   mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        <div className="">
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto"></div>

          <div className="text-base lg:max-w-none">
            <h1 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              {post.transactionsTitle}
            </h1>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {post.differenceTitle}
            </p>
          </div>

          <div
            className=" text-gray-500"
            dangerouslySetInnerHTML={{ __html: post.text }}
          />
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div className="relative z-10">
            <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none"></div>
            <div className="mt-10 flex text-base lg:max-w-none">
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
        </div>
      </div>
    </div>
  );
}
