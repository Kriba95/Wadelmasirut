export default function PageSection({ post }) {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto"></div>

        <div className="text-base max-w-prose mx-auto lg:max-w-none">
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
  );
}
