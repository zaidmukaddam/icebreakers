import { NextSeo } from "next-seo";
import Link from "next/link";
import { Logo } from "../components/LogoDark";
import { SEO_CONFIG } from "../lib/seo/config";

const NotFound = () => {
  return (
    <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
      <NextSeo
        title={SEO_CONFIG.title}
        description={SEO_CONFIG.description}
        canonical={SEO_CONFIG.canonical}
        twitter={{
          handle: "@zaidmukaddam",
          cardType: "summary_large_image",
        }}
      />

      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 justify-center">
          <Logo className="h-8 w-auto" />
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Page not found.
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Sorry, we could not find the page you are looking for.
            </p>
            <div className="mt-6">
              <Link href="/" className="text-base font-medium" passHref>
                Go back home<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
