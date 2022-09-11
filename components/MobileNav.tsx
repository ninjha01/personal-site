import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { ChevronDownIcon, CloseIcon } from "./Header";
import { config } from "../config";

function MobileNavItem(props: { href: string; children: ReactNode }) {
  const { href, children } = props;
  return (
    <li className="pt-4 text-zinc-100 transition hover:text-blue-500">
      <Popover.Button as={Link} href={href}>
        {children}
      </Popover.Button>
    </li>
  );
}
export function MobileNavigation(props: any) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full  bg-zinc-800/90 px-4 py-2 text-sm font-medium text-zinc-200 shadow-lg shadow-zinc-800/5 ring-1 ring-white/10 backdrop-blur hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-zinc-900 p-8 ring-1 ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-500">Navigation</h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100/5 text-base text-zinc-300">
                {config.links.map(({ href, label }) => (
                  <MobileNavItem key={href} href={href}>
                    {label}
                  </MobileNavItem>
                ))}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}
