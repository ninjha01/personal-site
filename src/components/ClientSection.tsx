import React from "react";
import { ClientType } from "../commonTypes";
import { repeatArray } from "../utils";

export const ClientSection = (props: { clients: ClientType[] }) => {
  const { clients } = props;
  return (
    <section>
      <h1
        id="clients_section"
        className="mb-8 pt-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 text-2xl border-t"
      >
        Clients
      </h1>

      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 auto-rows-1">
          {clients.map((client) => (
            <ClientCard client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};
const ClientCard = (props: { client: ClientType }) => {
  const {
    client: { name, url, description, logo },
  } = props;

  const padding = () => {
    const repeats = 600 - description.length;
    return <>{repeatArray([<>&nbsp</>], repeats)}</>;
  };

  return (
    <div className="flex flex-col w-full max-w-lg p-6 text-left shadow-2xl lg:mx-auto rounded-xl">
      <p className="mx-auto text-base leading-relaxed text-gray-500 whitespace-normal">
        <>
          {description}
          {padding}
        </>
      </p>

      <a
        className="mt-4 text-xs font-semibold tracking-wider text-blue-900 uppercase"
        href={url}
      >
        {name}
      </a>
      <img
        alt="client logo"
        className="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full border-dotted border-2 border-blue-900 p-1 inline-block align-baseline"
        src={logo}
      />
    </div>
  );
};
