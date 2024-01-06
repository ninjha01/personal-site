import Link from "next/link";
import { ReactNode } from "react";
import { config } from "../config";
import { classNames } from "../utils";
import { GitHubLogo } from "./GithubLogo";

function FooterItem(props: { href: string; children: ReactNode }) {
  const { href, children } = props;
  return (
    <li
      className={classNames(
        "relative block cursor-pointer px-3 py-2 transition hover:text-blue-500",
      )}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
}
export const Footer = () => {
  const commitLink = process.env.NEXT_PUBLIC_GIT_COMMIT_SHA
    ? `https://github.com/ninjha01/personal-site/commit/${process.env.NEXT_PUBLIC_GIT_COMMIT_SHA}`
    : "https://github.com/ninjha01/personal-site/";

  return (
    <div className="flex items-center justify-center">
      <ul className="flex flex-row items-center justify-center border-zinc-500 pb-8 text-zinc-500">
        {/* {config.links.map(link => (
          <FooterItem key={link.href} href={link.href}>
            {link.label}
          </FooterItem>
        ))} */}
        <FooterItem href={commitLink}>
          <div className="flex flex-row items-center ">
            <GitHubLogo className="mr-2 h-4 w-4" />
            {process.env.NEXT_PUBLIC_GIT_COMMIT_SHA || "local"}
          </div>
        </FooterItem>
      </ul>
    </div>
  );
};
