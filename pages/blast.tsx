import Head from "next/head";
import { Sidebar } from "../components/Sidebar";

// @ts-ignore
import blast_content from "../content/blast.md";

import xdr_img from "../public/assets/images/xdr_promo.png";

import { classNames } from "../utils";

import { Prose } from "../components/Prose";
import { SearchCircleIcon } from "@heroicons/react/outline";

export const Blast = () => {
  return (
    <>
      <Head>
        <title>Blast Service</title>
      </Head>

      <Sidebar>
        <div className="pt-2">
          <h1 className="font-extrabold tracking-tight text-blue-700 text-2xl md:text-4xl md:px-16 xl:px-32">
            Project Nitro
          </h1>
          <h1 className="font-extrabold tracking-tight text-gray-900 text-2xl md:text-4xl md:px-16 xl:px-32">
            {"A BLAST that's not from the past"}
          </h1>

          <section className="grid grid-cols-1 lg:grid-cols-2 md:px-16 xl:px-32 lg:gap-6">
            <div className="flex flex-col items-center lg:order-last">
              <div
                className="h-[30rem] w-full max-w-lg bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${xdr_img.src})`,
                }}
              />
              <a
                href="https://nitro-356017.uc.r.appspot.com/"
                className="w-full max-w-lg bg-blue-900 items-center rounded-xl border-2 border-white px-16 py-3.5 text-center text-base font-medium text-white w-full"
                target="_blank"
                rel="noreferrer"
              >
                Try it now
              </a>
            </div>
            <Prose className={classNames("h-full mt-8")} content={blast_content} />
          </section>
        </div>
      </Sidebar>
    </>
  );
};

export default Blast;
