import React, { useEffect } from "react";

export const FourOhFour = () => {
  useEffect(() => {
    document.title = "404";
  }, []);
  return (
    <>
      <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center">
            <a href="/" className="inline-flex">
              <span className="sr-only">Workflow</span>
              <img className="h-32 w-auto rounded-full" src={require("../assets/images/profile.jpg")} alt="" />
            </a>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold text-blue-900 uppercase tracking-wide">404 error</p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found.</h1>
              <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
              <div className="mt-6">
                <p className="text-base font-medium text-blue-900 hover:text-blue-500">
                  Go back home<span aria-hidden="true"> &rarr;</span>
                </p>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-4">
            <a href="mailto:contact@nishantjha.org" className="text-sm font-medium text-gray-500 hover:text-gray-600">
              Contact Support
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
};
