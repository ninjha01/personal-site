import { Dialog, Transition } from "@headlessui/react";
import {
  BeakerIcon,
  BookOpenIcon,
  BriefcaseIcon,
  CodeIcon,
  MenuIcon,
  SearchCircleIcon,
  TemplateIcon,
  XIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, StrictMode, useState } from "react";
import { config } from "../config";
import profile from "../public/assets/images/profile.jpg";
import { classNames } from "../utils";

export const Sidebar = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal;
  noStrict?: boolean;
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const homeItems = [
    { name: "Clients", href: "/#clients", current: false, icon: BriefcaseIcon },
    { name: "Projects", href: "/#projects", current: false, icon: CodeIcon },
  ];
  const uiMockups = [
    {
      name: "Sequence Builder",
      href: "/seqbuild",
      current: false,
      icon: BeakerIcon,
      wip: true,
    },
    {
      name: "Blast Alignment",
      href: "/blast",
      current: false,
      icon: SearchCircleIcon,
      wip: false,
    },
    {
      name: "Code Notebook",
      href: "/notebook",
      current: false,
      icon: BookOpenIcon,
      wip: false,
    },
  ];

  const archDiagrams = [
    {
      name: "This Website",
      href: "/sitearch",
      current: false,
      icon: TemplateIcon,
      wip: true,
    },
  ];
  const navItems = (
    <nav className="mt-5 space-y-1 px-2">
      {homeItems.map(item => (
        <SidebarItem key={item.name} url={item.href} title={item.name} icon={item.icon} />
      ))}
      <p className="ml-2 pt-16 pb-2 text-blue-100">UI Mockups</p>
      {uiMockups.map(item => (
        <SidebarItem key={item.name} url={item.href} title={item.name} icon={item.icon} wip={item.wip} />
      ))}
      <p className="ml-2 pt-16 pb-2 text-blue-100">Architectures</p>
      {archDiagrams.map(item => (
        <SidebarItem key={item.name} url={item.href} title={item.name} icon={item.icon} wip={item.wip} />
      ))}
    </nav>
  );

  const Wrapper = (props: { children: any; noStrict?: boolean }) => {
    if (props.noStrict) {
      return <>{props.children}</>;
    } else {
      return <StrictMode>{props.children}</StrictMode>;
    }
  };

  return (
    <Wrapper noStrict={props.noStrict}>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
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

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800">
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
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon className="h-6 w-6 text-blue-50" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <button className="px-8 text-left focus:outline-none">
                      <Link href="/#top">
                        <a className="block transform cursor-pointer p-2 text-xl font-medium tracking-tighter text-blue-100 transition duration-500 ease-in-out hover:text-blue-100">
                          {config.url}
                        </a>
                      </Link>
                    </button>
                    {navItems}
                  </div>
                  <div className="flex flex-shrink-0 bg-gray-700 p-4">
                    <div className="flex items-center">
                      <div className="relative inline-block h-10 w-10 rounded-full">
                        <Image className="rounded-full" layout="fill" objectFit="cover" src={profile} alt="" />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-blue-50">
                          {config.personal.firstname} {config.personal.lastname}
                        </p>
                        <Link
                          target="_blank"
                          rel="noreferrer"
                          href={
                            process.env.NEXT_PUBLIC_GIT_COMMIT_SHA
                              ? `https://github.com/ninjha01/personal-site/commit/${process.env.NEXT_PUBLIC_GIT_COMMIT_SHA}`
                              : "https://github.com/ninjha01/personal-site/"
                          }
                        >
                          <a className="text-xs font-medium text-indigo-200 group-hover:text-white">
                            {process.env.NEXT_PUBLIC_GIT_COMMIT_SHA || "local"}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="ml-3">
                <button className="px-8 text-left focus:outline-none">
                  <Link href="/#top">
                    <a className="block transform cursor-pointer p-2 text-xl font-medium tracking-tighter text-blue-100 transition duration-500 ease-in-out hover:text-blue-100">
                      {config.url}
                    </a>
                  </Link>
                </button>
              </div>
              {navItems}
            </div>
            <div className="flex flex-shrink-0 bg-gray-700 p-4">
              <div className="flex items-center">
                <div className="relative inline-block h-9 w-9 rounded-full">
                  <Image className="rounded-full" layout="fill" objectFit="cover" src={profile} alt="" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-blue-50">
                    {config.personal.firstname} {config.personal.lastname}
                  </p>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href={
                      process.env.NEXT_PUBLIC_GIT_COMMIT_SHA
                        ? `https://github.com/ninjha01/personal-site/commit/${process.env.NEXT_PUBLIC_GIT_COMMIT_SHA}`
                        : "https://github.com/ninjha01/personal-site/"
                    }
                  >
                    <a className="text-xs font-medium text-indigo-200 group-hover:text-white">
                      {process.env.NEXT_PUBLIC_GIT_COMMIT_SHA || "local"}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="mx-auto px-4 sm:px-6 md:px-8">{props.children}</div>
            </div>
          </main>
        </div>
      </div>
    </Wrapper>
  );
};
interface SidebarItemType {
  url: string;
  title: string;
  icon: (props: any) => ReactElement;
  hidden?: boolean;
  wip?: boolean;
}

const SidebarItem = (props: SidebarItemType) => {
  const { url, title, hidden, wip } = props;

  return (
    <Link href={url}>
      <a
        className={classNames(
          "text-gray-300 hover:bg-gray-700 hover:text-blue-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md",
          hidden ? "display: none" : ""
        )}
      >
        <props.icon
          className={classNames("mr-3 flex h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-300")}
          aria-hidden="true"
        />
        <span className="ml-4 flex-1"> {title}</span>
        {wip && (
          <>
            <span className="mx-auto inline-flex animate-pulse items-center rounded-full bg-yellow-300 px-2.5 py-0.5 px-2 text-xs font-medium text-gray-800 opacity-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <rect
                  height="8.48"
                  transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.8717 17.6255)"
                  width="3"
                  x="16.34"
                  y="12.87"
                />
                <path d="M17.5,10c1.93,0,3.5-1.57,3.5-3.5c0-0.58-0.16-1.12-0.41-1.6l-2.7,2.7L16.4,6.11l2.7-2.7C18.62,3.16,18.08,3,17.5,3 C15.57,3,14,4.57,14,6.5c0,0.41,0.08,0.8,0.21,1.16l-1.85,1.85l-1.78-1.78l0.71-0.71L9.88,5.61L12,3.49 c-1.17-1.17-3.07-1.17-4.24,0L4.22,7.03l1.41,1.41H2.81L2.1,9.15l3.54,3.54l0.71-0.71V9.15l1.41,1.41l0.71-0.71l1.78,1.78 l-7.41,7.41l2.12,2.12L16.34,9.79C16.7,9.92,17.09,10,17.5,10z" />
              </svg>
            </span>
          </>
        )}
      </a>
    </Link>
  );
};
