import Link from "next/link";
import { useEffect } from "react";
import LogoIcon from "../components/LogoIcon";

export const FourOhFour = () => {
  useEffect(() => {
    document.title = "404";
  }, []);
  return (
    <>
      <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <Link href="/">
              <a className="inline-flex">
                <span className="sr-only">Workflow</span>
                <div className="rounded-full w-80 h-80">
                  <LogoIcon />
                </div>
              </a>
            </Link>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-900">404 error</p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Page not found.</h1>
              <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
              <div className="mt-6">
                <Link href="/">
                  <a className="text-base font-medium text-blue-900 hover:text-blue-500">
                    Go back home<span aria-hidden="true"> &rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <footer className="mx-auto w-full max-w-7xl flex-shrink-0 px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-4">
            <Link
              href="mailto:contact@nishantjha.org"
              className="text-sm font-medium text-gray-500 hover:text-gray-600"
            >
              <a className="text-sm font-medium text-gray-500 hover:text-gray-600">Contact Support</a>
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
};
export default FourOhFour;
