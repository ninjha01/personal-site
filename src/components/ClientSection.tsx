import React from "react";
import { ClientType } from "../commonTypes";

export const ClientSection = (props: { clients: ClientType[] }) => {
  const { clients } = props;
  return (
    <section className="mb-16">
      <h1
        id="clients"
        className="mb-8 pt-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 text-2xl border-t"
      >
        Clients
      </h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 auto-rows-1">
        {clients.map(client => (
          <ClientCard key={client.name} client={client} />
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
    <div className="flex flex-col p-6 text-left rounded-xl bg-white shadow-md hover:shadow-xl hover:shadow-blue-900 ease-in-out duration-200 ">
      {description}
      <a className="flex flex-row items-center gap-3 mt-8 mb-2" href={url}>
        <img
          alt="client logo"
          className="inline-block object-cover object-center w-16 h-16 mt-3 p-1 rounded-full inline-block align-baseline outline-rounded outline-dashed outline-offset-2 outline-[1.2] outline-blue-900"
          src={logo}
        />
        <div className="flex flex-col justify-center space-between gap-2">
          <p className="text-sm font-semibold tracking-wider text-blue-900 uppercase">{name}</p>
          <p className="text-xs track-tighter text-gray-500">{subtitle}</p>
        </div>
      </a>
    </div>
  );
};
