import Link from "next/link";
import Image from "next/image";
import { classNames } from "../utils";

import { ReactNode } from "react";
import { NavLink } from "../commonTypes";
import { config } from "../config";

function NavItem(props: { href: string; children: ReactNode }) {
  const { href, children } = props;
  return (
    <Link href={href}>
      <li
        className={classNames("relative block cursor-pointer px-3 py-2 text-zinc-100 transition hover:text-blue-500")}
      >
        {children}
      </li>
    </Link>
  );
}
export function DesktopNavigation(props: any) {
  return (
    <nav {...props}>
      <div className="flex items-center justify-center gap-4">
        <ul className="flex items-center justify-center gap-2 rounded-full bg-zinc-800/90 px-5 py-2 text-sm font-medium text-zinc-100 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 ring-white/10 backdrop-blur">
          <li className="relative h-8 w-8 overflow-hidden rounded-full object-cover outline outline-dashed outline-offset-4 outline-blue-200">
            <Image src={config.personal.profile} alt="" layout="fill" objectFit="cover" />
          </li>
          {config.links.map((link: NavLink) => (
            <NavItem key={link.href} href={link.href}>
              {link.label}
            </NavItem>
          ))}
        </ul>
      </div>
    </nav>
  );
}
