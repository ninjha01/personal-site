import React from "react";
import { ClientType } from "../commonTypes";

export const ClientSection = (props: { clients: ClientType[] }) => {
  const { clients } = props;
  return (
    <section className="mb-16">
      <h1
        id="clients"
        className="mb-4 pt-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 text-2xl border-t"
      >
        Clients
      </h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 auto-rows-1">
        {clients.map((client) => (
          <ClientCard client={client} />
        ))}
      </div>
    </section>
  );
};
const ClientCard = (props: { client: ClientType }) => {
  const {
    client: { name, url, logo, subtitle },
  } = props;

  /* if we description is null, we assume it's a current engagement */
  let description = props.client.description ? (
    <p className="mb-auto mx-auto text-base leading-relaxed font-medium text-gray-700 whitespace-normal p-4 ">
      {props.client.description}
    </p>
  ) : (
    <h1 className="font-semibold animate-pulse text-blue-900 mb-auto mx-auto my-auto text-base text-xl text-center leading-relaxed text-gray-500 whitespace-normal">
      Current Engagement
    </h1>
  );

  return (
    <div className="flex flex-col p-6 text-left shadow-2xl rounded-xl">
      {description}
      <div className="flex flex-row items-center gap-3 my-8">
        <img
          alt="client logo"
          className="inline-block object-cover object-center w-auto h-16 mt-3 rounded-full outline-rounded outline-dashed outline-offset-2 outline-[1.2] outline-blue-900 p-1 inline-block align-baseline"
          src={logo}
        />
        <div className="flex flex-col gap-2">
          <a
            className="h-8 text-sm font-semibold tracking-wider text-blue-900 uppercase"
            href={url}
          >
            {name}
          </a>
          <a className="text-xs h-8 text-gray-500 tracking-wider" href={url}>
            {subtitle}
          </a>
        </div>
      </div>
    </div>
  );
};
