import React, {
	JSXElementConstructor,
	ReactElement,
	ReactFragment,
	ReactPortal
} from "react";
import { Footer } from "./Footer";

export const Sidebar = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal;
}) => {
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-white ">
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-blue-900 border-r border-gray-50">
              <div className="flex flex-col items-center flex-shrink-0 px-4">
                <button className="px-8 text-left focus:outline-none">
                  <h2 className="block p-2 text-xl font-medium tracking-tighter text-blue-100 transition duration-500 ease-in-out transform cursor-pointer hover:text-blue-100">
                    nishantjha.org
                  </h2>
                </button>
                <button className="hidden rounded-lg focus:outline-none focus:shadow-outline">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex flex-col flex-grow px-4 mt-5">
                <nav className="flex-1 space-y-1 bg-blue-900">
                  <ul>
                    {[
                      { title: "Clients", url: "#clients_section" },
                      { title: "Projects", url: "#projects_section" },
                      { title: "Essays", url: "#essays_section" },
                    ].map((x) => (
                      <li>
                        <SidebarItem url={x.url} title={x.title} />
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <Footer />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 w-0 overflow-hidden">
          <main className="relative flex-1 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                <h1 className="text-lg text-neutral-600">{props.children}</h1>
              </div>
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                {/* Do not cross the closing tag underneath this coment */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
const SidebarItem = (props: { url: string; title: string }) => {
  const { url, title } = props;
  return (
    <a
      href={url}
      className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-blue-100 transition duration-500 ease-in-out transform rounded-lg bg-blue-900 hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-50 focus:shadow-outline focus:text-blue-900 hover:text-blue-900 active:text-blue-900"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        ></path>
      </svg>
      <span className="ml-4"> {title}</span>
    </a>
  );
};