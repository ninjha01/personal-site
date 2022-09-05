import { Dialog, Transition } from "@headlessui/react";
import profile from "../public/assets/images/profile.jpg";

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
import {
  Dispatch,
  Fragment,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  SetStateAction,
  StrictMode,
  useState,
} from "react";
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
  noStrict?: boolean;
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const Wrapper = (props: { children: any; noStrict?: boolean }) => {
    if (props.noStrict) {
      return <>{props.children}</>;
    } else {
      return <StrictMode>{props.children}</StrictMode>;
    }
  };

  const mobileShowHide = (
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
  );

  return (
    <Wrapper noStrict={props.noStrict}>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment} appear={true}>
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

            <MobileSidebar setSidebarOpen={setSidebarOpen} />
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">{desktopSidebar}</div>
        <div className="flex flex-1 flex-col md:pl-64">
          {mobileShowHide}
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
          "group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-blue-50",
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

const GitHubLogo = (props: { className?: string }) => {
  return (
    <svg
      className={classNames(props.className || "")}
      stroke="currentColor"
      fill="currentColor"
      width="256px"
      height="250px"
      viewBox="0 0 256 250"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z"></path>
      </g>
    </svg>
  );
};

const sidebarFooter = (
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
        <a className="flex flex-row items-center gap-1 text-xs font-medium text-indigo-200 group-hover:text-white">
          <GitHubLogo className="h-3 w-4 stroke-indigo-200" />

          {process.env.NEXT_PUBLIC_GIT_COMMIT_SHA || "local"}
        </a>
      </Link>
    </div>
  </div>
);

const homeItems = [
  { name: "Clients", href: "/#clients", current: false, icon: BriefcaseIcon },
  { name: "Projects", href: "/#projects", current: false, icon: CodeIcon },
];
const uiMockups = [
  {
    name: "Blast Service",
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
    wip: false,
  },
  {
    name: "Blast Service",
    href: "/blastarch",
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

const desktopSidebar = (
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
    <div className="flex flex-shrink-0 bg-gray-700 p-4">{sidebarFooter}</div>
  </div>
);

const MobileSidebar = (props: { setSidebarOpen: Dispatch<SetStateAction<boolean>> }) => {
  const { setSidebarOpen } = props;
  return (
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
          <div className="flex flex-shrink-0 bg-gray-700 p-4">{sidebarFooter}</div>
        </Dialog.Panel>
      </Transition.Child>
      <div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
    </div>
  );
};
