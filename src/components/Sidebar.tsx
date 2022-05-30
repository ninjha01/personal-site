import { Dialog, Transition } from "@headlessui/react";
import {
	BriefcaseIcon,
	CodeIcon,
	MenuIcon,
	SearchCircleIcon,
	XIcon
} from "@heroicons/react/outline";
import React, {
	Fragment,
	JSXElementConstructor,
	ReactElement,
	ReactFragment,
	ReactPortal,
	useState
} from "react";
import { Link } from "react-router-dom";
import { config } from "../config";
import { classNames } from "../utils";

export const Sidebar = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal;
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigation = [
    {
      name: "Clients",
      href: "/#clients",
      current: false,
      icon: BriefcaseIcon,
      hidden: false,
    },
    {
      name: "Projects",
      href: "/#projects",
      current: false,
      icon: CodeIcon,
      hidden: false,
    },
    {
      name: "Blast UI",
      href: "/blast",
      current: false,
      icon: SearchCircleIcon,
      hidden: true,
    },
  ];
  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-blue-50"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <button className="px-8 text-left focus:outline-none">
                    <a
                      href="/#top"
                      className="block p-2 text-xl font-medium tracking-tighter text-blue-100 transition duration-500 ease-in-out transform cursor-pointer hover:text-blue-100"
                    >
                      {config.url}
                    </a>
                  </button>
                  <nav className="mt-5 px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-blue-50"
                            : "text-gray-300 hover:bg-gray-700 hover:text-blue-50",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-300"
                              : "text-gray-400 group-hover:text-gray-300",
                            "mr-4 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="flex-shrink-0 flex bg-gray-700 p-4">
                  <a href="#" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src={require("../assets/images/profile.jpg")}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-blue-50">
                          {config.personal.firstname} {config.personal.lastname}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="ml-3">
              <button className="px-8 text-left focus:outline-none">
                <a
                  href="/#top"
                  className="block p-2 text-xl font-medium tracking-tighter text-blue-100 transition duration-500 ease-in-out transform cursor-pointer hover:text-blue-100"
                >
                  {config.url}
                </a>
              </button>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <SidebarItem
                  url={item.href}
                  title={item.name}
                  hidden={item.hidden}
                />
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex bg-gray-700 p-4">
            <a href="/" className="flex-shrink-0 w-full group block">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-9 w-9 rounded-full"
                    src={require("../assets/images/profile.jpg")}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-blue-50">
                    {config.personal.firstname} {config.personal.lastname}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 ">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {props.children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
interface SidebarItemType {
  url: string;
  title: string;
  hidden?: boolean;
}

const SidebarItem = (props: SidebarItemType) => {
  const { url, title, hidden } = props;

  const LinkElement = (props: {
    url: string;
    hidden?: boolean;
    children: ReactElement[];
  }) => {
    const { url, hidden, children } = props;
    const className =
      "text-gray-300 hover:bg-gray-700 hover:text-blue-50 group flex items-center px-2 py-2 text-md font-medium rounded-md";
    if (url.includes("#")) {
      return (
        <a
          href={url}
          className={classNames(className, hidden ? "display: none" : "")}
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link
          to={url}
          className={classNames(className, hidden ? "hidden" : "")}
        >
          {children}
        </Link>
      );
    }
  };

  return (
    <LinkElement url={url} hidden={hidden}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        ></path>
      </svg>
      <span className="ml-4"> {title}</span>
    </LinkElement>
  );
};
